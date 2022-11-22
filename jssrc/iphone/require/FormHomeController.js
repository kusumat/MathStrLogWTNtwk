define("userFormHomeController", {
    //Type your controller code here 
});
define("FormHomeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_e814615ba48e42bd89838fbf36b4895d: function AS_Button_e814615ba48e42bd89838fbf36b4895d(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "MathStrLogWTNtwk",
            "friendlyName": "FormLog"
        });
        ntf.navigate();
    },
    AS_Button_fb743b17bb5048138dca5191c7bceba3: function AS_Button_fb743b17bb5048138dca5191c7bceba3(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "MathStrLogWTNtwk",
            "friendlyName": "frmHomeMath"
        });
        ntf.navigate();
    },
    AS_Button_f0130164a8184eb5bf36b332864675dc: function AS_Button_f0130164a8184eb5bf36b332864675dc(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "MathStrLogWTNtwk",
            "friendlyName": "FormNetworkApi"
        });
        ntf.navigate();
    },
    AS_Button_id2782674fe344539e8706c3f458c9fd: function AS_Button_id2782674fe344539e8706c3f458c9fd(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "MathStrLogWTNtwk",
            "friendlyName": "Form1"
        });
        ntf.navigate();
    },
    AS_Button_f6b3c4df87d84bf1ba1600b2fc8c7467: function AS_Button_f6b3c4df87d84bf1ba1600b2fc8c7467(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "MathStrLogWTNtwk",
            "friendlyName": "FormWorkerThread"
        });
        ntf.navigate();
    }
});
define("FormHomeController", ["userFormHomeController", "FormHomeControllerActions"], function() {
    var controller = require("userFormHomeController");
    var controllerActions = ["FormHomeControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
