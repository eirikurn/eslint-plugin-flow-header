/**
 * @fileoverview Force flow comment.
 * @author Eirikur
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/flow-header"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("flow-header", rule, {

    valid: [
        "// @flow\nvar foo = 5;",
        "'use strict'\n// @flow\nvar foo = 5;",
        "// @noflow\nvar foo = 5;",
        "'use strict'\n// @noflow\nvar foo = 5;"
    ],

    invalid: [
        {
            code: "/* yo */var foo = 5\n//test\nvar bar;",
            errors: [{
                message: "Missing @flow header comment."
            }]
        },
        {
            code: "var foo = 5; // @flow",
            errors: [{
                message: "Missing @flow header comment."
            }]
        }
    ]
});
