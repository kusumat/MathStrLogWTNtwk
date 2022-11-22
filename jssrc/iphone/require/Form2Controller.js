define("userForm2Controller", {
    isAsciiAlpha: function() {
        var inputstring = this.view.tbxInputString.text;
        if (kony.string.isAsciiAlpha(inputstring) === true) {
            //alert("The string contains ASCII alphabets");
            this.view.LabelOutput.text = "The string contains ASCII alphabets";
        } else
        //alert("The string is not made up of just ASCII characters");
            this.view.LabelOutput.text = "The string is not made up of just ASCII characters";
    },
    isAsciiAlphaNumeric: function() {
        var inputstring = this.view.tbxInputString.text;
        if (kony.string.isAsciiAlphaNumeric(inputstring) === true) {
            //alert("The string contains combination of ASCII alphabets and numerics");
            this.view.LabelOutput.text = "The string contains combination of ASCII alphabets and numerics";
        } else
        //alert("The string is not made up of combinations of ASCII alphabets and numerics");
            this.view.LabelOutput.text = "The string is not made up of combinations of ASCII alphabets and numerics";
    },
    isNumeric: function() {
        var inputstring = this.view.tbxInputString.text;
        if (kony.string.isNumeric(inputstring) === true) {
            //alert("The string contains only numerics");
            this.view.LabelOutput.text = "The string contains only numerics";
        } else
        //alert("The string is not made of numeric charaters");
            this.view.LabelOutput.text = "The string is not made of numeric charaters";
    },
    isValidEmail: function() {
        var inputstring = this.view.tbxInputString.text;
        if (kony.string.isValidEmail(inputstring) === true) {
            //alert("The Email ID is valid ");
            this.view.LabelOutput.text = "The Email ID is valid ";
        } else
        //alert("The Email ID is invalid");
            this.view.LabelOutput.text = "The Email ID is invalid";
    },
    rep: function() {
        var sourcestring = this.view.tbxInputString.text;
        //alert("The string is concatenated as a chain " + kony.string.rep(sourcestring, 5));
        this.view.LabelOutput.text = kony.string.rep(sourcestring, 5);
    },
    reverse: function() {
        var sourcestring = this.view.tbxInputString.text;
        //alert("The input string is reversed "+kony.string.reverse(sourcestring));
        this.view.LabelOutput.text = kony.string.reverse(sourcestring);
    },
    trim: function() {
        var sourcestring = this.view.tbxInputString.text;
        //alert("The input string is trimmmed "+kony.string.trim(sourcestring));
        this.view.LabelOutput.text = kony.string.trim(sourcestring);
    }
});
define("Form2ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_gc36fee38d314b7a99ae6a79294c9124: function AS_Button_gc36fee38d314b7a99ae6a79294c9124(eventobject) {
        var self = this;
        return self.isNumeric.call(this);
    },
    AS_Button_b87b7a1cd8c14ecdb10a82cf7a6140bf: function AS_Button_b87b7a1cd8c14ecdb10a82cf7a6140bf(eventobject) {
        var self = this;
        return self.isAsciiAlpha.call(this);
    },
    AS_Button_j96848ba6f3742e192b17a1eae38036c: function AS_Button_j96848ba6f3742e192b17a1eae38036c(eventobject) {
        var self = this;
        return self.isAsciiAlphaNumeric.call(this);
    },
    AS_Button_c9fa59e43a3e4eee89c370a943669670: function AS_Button_c9fa59e43a3e4eee89c370a943669670(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "MathStrLogWTNtwk",
            "friendlyName": "Form1"
        });
        ntf.navigate();
    },
    AS_Button_bc9bc7ed509b45bca7e8b2c17b7be86e: function AS_Button_bc9bc7ed509b45bca7e8b2c17b7be86e(eventobject) {
        var self = this;
        return self.rep.call(this);
    },
    AS_Button_abea1d1ea118458b9a2769ff59174d4d: function AS_Button_abea1d1ea118458b9a2769ff59174d4d(eventobject) {
        var self = this;
        return self.isValidEmail.call(this);
    },
    AS_Button_b10bd2e992cc4199adecc073e7c5fb84: function AS_Button_b10bd2e992cc4199adecc073e7c5fb84(eventobject) {
        var self = this;
        return self.reverse.call(this);
    },
    AS_Button_e9b0813f5ded49e29eb0c31bd2d45c8b: function AS_Button_e9b0813f5ded49e29eb0c31bd2d45c8b(eventobject) {
        var self = this;
        return self.trim.call(this);
    }
});
define("Form2Controller", ["userForm2Controller", "Form2ControllerActions"], function() {
    var controller = require("userForm2Controller");
    var controllerActions = ["Form2ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
