/**
 * @fileoverview Check exitance of flow header comment.
 * @author Eirikur
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Check exitance of flow header comment.",
            category: "Flow Type",
            recommended: false
        },
        fixable: "code",
        schema: []
    },

    create: function(context) {
        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------
        function findFlowHeader(statements) {
            for (let i = 0, statement; statement = statements[i]; i++) {
                const isSafeExpression = (
                    statement.type === 'ExpressionStatement' &&
                    statement.expression.type === 'Literal'
                );

                const leading = searchComments(statement.leadingComments);
                if (leading) return leading;

                if (!isSafeExpression) return;

                const trailing = searchComments(statement.trailingComments);
                if (trailing) return trailing;
            }
        }

        function searchComments(comments) {
            return comments && comments.filter(comment => /@(?:no)?flow/.test(comment.value))[0];
        }

        function report() {
          context.report({
              message: 'Missing @flow header comment.',
              loc: {
                  start: {
                      line: 0,
                      column: 0,
                  },
              },
              fix: function(fixer) {
                  return fixer.insertTextBeforeRange([0, 0], '// @flow\n');
              }
          });
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            Program(node) {
                const comment = findFlowHeader(node.body);
                if (!comment) {
                    report();
                }
            }
        };
    }
};
