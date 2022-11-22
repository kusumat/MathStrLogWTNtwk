define("userfrmHomeMathController", {
    onclickfloor: function() {
        var a = this.view.tbxOperations.text;
        var b = Math.floor(a);
        //alert("The converted value is " +b );
        this.view.LabelOutput.text = b;
    },
    onclicksqrt: function() {
        var a = this.view.tbxOperations.text;
        var b = Math.sqrt(a);
        //alert("The square root value is " +b );
        this.view.LabelOutput.text = b;
    },
    onclickpow: function() {
        var a = this.view.tbxOperations.text;
        var b = Math.pow(a, 2);
        //alert("The Squared value is " +b );
        this.view.LabelOutput.text = b;
    },
    onclickmax: function() {
        var a = this.view.tbxNumber1.text;
        var b = this.view.tbxNumber2.text;
        var c = Math.max(a, b);
        //alert("The maximum value is " +c); 
        this.view.LabelOutput.text = c;
    },
    onclickmin: function() {
        var a = this.view.tbxNumber1.text;
        var b = this.view.tbxNumber2.text;
        var c = Math.min(a, b);
        //alert("The minimum value is " +c); 
        this.view.LabelOutput.text = c;
    },
    onclickpi: function() {
        var pi = Math.PI;
        //alert("The pi value is " +pi );
        this.view.LabelOutput.text = pi;
    },
    onclickRandom: function() {
        var random = Math.random();
        //alert("The random number is " +random);
        this.view.LabelOutput.text = random;
    }
});
define("frmHomeMathControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_ad18e176469d4be3b0b30afe9a33aac8: function AS_Button_ad18e176469d4be3b0b30afe9a33aac8(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "MathStrLogWTNtwk",
            "friendlyName": "FormHome"
        });
        ntf.navigate();
    },
    AS_Button_cefc2d4c0e7045ecaf40acf50fbf7b9b: function AS_Button_cefc2d4c0e7045ecaf40acf50fbf7b9b(eventobject) {
        var self = this;
        return self.onclickfloor.call(this);
    },
    AS_Button_d708afb1d1204d8e89a2201d1734154c: function AS_Button_d708afb1d1204d8e89a2201d1734154c(eventobject) {
        var self = this;
        return self.onclickmax.call(this);
    },
    AS_Button_jaee180aa1014ba79d122ae20740f355: function AS_Button_jaee180aa1014ba79d122ae20740f355(eventobject) {
        var self = this;
        return self.onclickmin.call(this);
    },
    AS_Button_a5cf8db4570a49508eae8c837de9cf96: function AS_Button_a5cf8db4570a49508eae8c837de9cf96(eventobject) {
        var self = this;
        return self.onclickRandom.call(this);
    },
    AS_Button_be42371d255e424e981d1e1e21634afd: function AS_Button_be42371d255e424e981d1e1e21634afd(eventobject) {
        var self = this;
        return self.onclicksqrt.call(this);
    },
    AS_Button_j2800924b94a4e48be4f4db3838dc9ba: function AS_Button_j2800924b94a4e48be4f4db3838dc9ba(eventobject) {
        var self = this;
        return self.onclickpow.call(this);
    },
    AS_Button_c856b3cd10734f55a7f75f4617e15dfe: function AS_Button_c856b3cd10734f55a7f75f4617e15dfe(eventobject) {
        var self = this;
        return self.onclickpi.call(this);
    },
    AS_TextField_cc7d26abb4c04b1ebb1cfd343dee2063: function AS_TextField_cc7d26abb4c04b1ebb1cfd343dee2063(eventobject, changedtext) {
        var self = this;
    }
});
define("frmHomeMathController", ["userfrmHomeMathController", "frmHomeMathControllerActions"], function() {
    var controller = require("userfrmHomeMathController");
    var controllerActions = ["frmHomeMathControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
