/**
 * @fileoverview Force flow comment.
 * @author Eirikur
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/flow-required"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("flow-required", rule, {

    valid: [
        "// @flow\nvar foo = 5;"
    ],

    invalid: [
        {
            code: "/* yo */var foo = 5\n//test\nvar bar;",
            errors: [{
                message: "Missing @flow comment."
            }]
        }
    ]
});
