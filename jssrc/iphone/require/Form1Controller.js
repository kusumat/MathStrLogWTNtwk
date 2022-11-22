define("userForm1Controller", {
    //Type your controller code here 
    containsChars: function() {
        var inputstring = this.view.tbxInputString.text;
        var charsArr = [this.view.tbxcharacterarray.text];
        if (kony.string.containsChars(inputstring, charsArr) === true) {
            //alert("The input string contains the characters");
            this.view.LabelOutput.text = "The input string contains the characters";
        } else {
            //alert("The input string does not contain the characters");
            this.view.LabelOutput.text = "The input string does not contain the characters";
        }
    },
    contiansOnlyGivenChars: function() {
        var inputstring = this.view.tbxInputString.text;
        var charsArr = [this.view.tbxcharacterarray.text];
        if (kony.string.containsOnlyGivenChars(inputstring, charsArr) === true) {
            //alert("The input string contains only the characters specified");
            this.view.LabelOutput.text = "The input string contains only the characters specified";
        } else {
            //alert("The input string contains other characters as well");
            this.view.LabelOutput.text = "The input string contains other characters as well";
        }
    },
    containsNoGivenChars: function() {
        var inputstring = this.view.tbxInputString.text;
        var charsArr = [this.view.tbxcharacterarray.text];
        if (kony.string.containsNoGivenChars(inputstring, charsArr) === true) {
            //alert("The input string contains none of the characters specified");
            this.view.LabelOutput.text = "The input string contains none of the characters specified";
        } else {
            //alert("The input string contains the character specified");
            this.view.LabelOutput.text = "The input string contains the character specified";
        }
    },
    endsWith: function() {
        var sourcestring = this.view.tbxInputString.text;
        var comparestring = this.view.tbxcharacterarray.text;
        if (kony.string.endsWith(sourcestring, comparestring) === true) {
            //alert("The input string ends with the string specified");
            this.view.LabelOutput.text = "The input string ends with the string specified";
        } else {
            //alert("The input string does not end with the string specified");
            this.view.LabelOutput.text = "The input string does not end with the string specified";
        }
    },
    equalsIgnoreCase: function() {
        var string1 = this.view.tbxInputString.text;
        var string2 = this.view.tbxcharacterarray.text;
        if (kony.string.equalsIgnoreCase(string1, string2) === true) {
            //alert("The two strings are same");
            this.view.LabelOutput.text = "The two strings are same";
        } else {
            //alert("The two strings are different");
            this.view.LabelOutput.text = "The two strings are different";
        }
    },
    startsWith: function() {
        var sourcestring = this.view.tbxInputString.text;
        var comparestring = this.view.tbxcharacterarray.text;
        if (kony.string.startsWith(sourcestring, comparestring) === true) {
            //alert("The input string starts with the string specified");
            this.view.LabelOutput.text = "The input string starts with the string specified";
        } else {
            //alert("The input string does not start with the string specified");
            this.view.LabelOutput.text = "The input string does not start with the string specified";
        }
    },
});
define("Form1ControllerActions", {
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
define("Form1Controller", ["userForm1Controller", "Form1ControllerActions"], function() {
    var controller = require("userForm1Controller");
    var controllerActions = ["Form1ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
