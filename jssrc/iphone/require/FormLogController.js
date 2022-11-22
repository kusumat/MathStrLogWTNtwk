define("userFormLogController", {
    //Type your controller code here 
});
define("FormLogControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_aad852378e3d40f58c600466e254bc52: function AS_Button_aad852378e3d40f58c600466e254bc52(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "MathStrLogWTNtwk",
            "friendlyName": "FormHome"
        });
        ntf.navigate();
        self.view.lbConf.isVisible = false;
    },
    AS_Button_j1299396230a488ebf55415592ad2d26: function AS_Button_j1299396230a488ebf55415592ad2d26(eventobject) {
        var self = this;
        //Create Logger Configuration
        var lConfig = new kony.logger.createLoggerConfig();
        //Create FilePersistor
        var persistor1 = new kony.logger.createFilePersistor();
        //Add Persistor to the loggerConfig
        lConfig.addPersistor(persistor1);
        //Create Logger Object
        loggerObj = new kony.logger.createNewLogger("UserLogs", lConfig);
        kony.logger.activatePersistors(kony.logger.consolePersistor);
        kony.logger.activatePersistors(kony.logger.filePersistor);
        kony.logger.currentLogLevel = kony.logger.logLevel.ALL;
        //Print Statements
        var msg = " statement ";
        loggerObj.debug("Message in debug level" + msg);
        loggerObj.trace("Message in trace level" + msg);
        loggerObj.fatal("Message in Fatal level" + msg);
        loggerObj.info("Message in Info level" + msg);
        loggerObj.warn("Message in warn level" + msg);
        loggerObj.error("Message in error level" + msg);
        this.view.segLogData.data = [{
            "lblHeading": "Debug",
            "lblDescription": "Message in debug level" + msg,
            "lblTime": new Date().toLocaleTimeString()
        }, {
            "lblHeading": "Trace",
            "lblDescription": "Message in trace level" + msg,
            "lblTime": new Date().toLocaleTimeString()
        }, {
            "lblHeading": "Fatal",
            "lblDescription": "Message in Fatal level" + msg,
            "lblTime": new Date().toLocaleTimeString()
        }, {
            "lblHeading": "Info",
            "lblDescription": "Message in Info level" + msg,
            "lblTime": new Date().toLocaleTimeString()
        }, {
            "lblHeading": "Warn",
            "lblDescription": "Message in warn level" + msg,
            "lblTime": new Date().toLocaleTimeString()
        }, {
            "lblHeading": "Error",
            "lblDescription": "Message in error level" + msg,
            "lblTime": new Date().toLocaleTimeString()
        }];
        this.view.lbConf.isVisible = true;
    },
    AS_Form_j88934038265416d8fdf4959b51c3b84: function AS_Form_j88934038265416d8fdf4959b51c3b84(eventobject) {
        var self = this;
        self.view.lbConf.isVisible = false;
    }
});
define("FormLogController", ["userFormLogController", "FormLogControllerActions"], function() {
    var controller = require("userFormLogController");
    var controllerActions = ["FormLogControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
