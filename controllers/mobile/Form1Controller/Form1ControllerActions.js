define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_c99ce5862d3e4403a45081ea3febfd5c: function AS_Button_c99ce5862d3e4403a45081ea3febfd5c(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "MathStrLogWTNtwk",
            "friendlyName": "FormHome"
        });
        ntf.navigate();
    },
    AS_Button_j0611139c11d4e02a857bed31f77aa00: function AS_Button_j0611139c11d4e02a857bed31f77aa00(eventobject) {
        var self = this;
        return self.containsChars.call(this);
    },
    AS_Button_e0d884e63d0b429a818ae6e40c633552: function AS_Button_e0d884e63d0b429a818ae6e40c633552(eventobject) {
        var self = this;
        return self.endsWith.call(this);
    },
    AS_Button_e754ecd5cddf4071ae84bf67dbc740c3: function AS_Button_e754ecd5cddf4071ae84bf67dbc740c3(eventobject) {
        var self = this;
        return self.contiansOnlyGivenChars.call(this);
    },
    AS_Button_e2e9b42954fa44f295482274b9aafb27: function AS_Button_e2e9b42954fa44f295482274b9aafb27(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "MathStrLogWTNtwk",
            "friendlyName": "Form2"
        });
        ntf.navigate();
    },
    AS_Button_j1770e07443441b6afbe1151d228aec6: function AS_Button_j1770e07443441b6afbe1151d228aec6(eventobject) {
        var self = this;
        return self.containsNoGivenChars.call(this);
    },
    AS_Button_j6961c194d694b46b98c7ac6c2ae6b9d: function AS_Button_j6961c194d694b46b98c7ac6c2ae6b9d(eventobject) {
        var self = this;
        return self.startsWith.call(this);
    }
});