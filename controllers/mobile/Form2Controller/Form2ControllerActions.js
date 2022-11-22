define({
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