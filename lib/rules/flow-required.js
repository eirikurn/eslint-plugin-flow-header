/**
 * @fileoverview Force flow comment.
 * @author Eirikur
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Force flow comment.",
            category: "Fill me in",
            recommended: false
        },
        fixable: "code",  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        var sourceCode = context.getSourceCode();
        var comments = sourceCode.getAllComments();
        var flowComments = comments.filter(function(comment) {
            return comment.value.indexOf('@flow') >= 0;
        });

        if (flowComments.length === 0) {
            context.report({
                message: 'Missing @flow comment.',
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


        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
        };
    }
};
