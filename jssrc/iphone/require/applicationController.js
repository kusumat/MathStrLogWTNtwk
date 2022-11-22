define({
    appInit: function(params) {
        skinsInit();
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController"
        });
        voltmx.mvc.registry.add("Form1", {
            "viewName": "Form1",
            "controllerName": "Form1Controller"
        });
        voltmx.mvc.registry.add("Form2", {
            "viewName": "Form2",
            "controllerName": "Form2Controller"
        });
        voltmx.mvc.registry.add("FormHome", {
            "viewName": "FormHome",
            "controllerName": "FormHomeController"
        });
        voltmx.mvc.registry.add("FormLog", {
            "viewName": "FormLog",
            "controllerName": "FormLogController"
        });
        voltmx.mvc.registry.add("FormNetworkApi", {
            "viewName": "FormNetworkApi",
            "controllerName": "FormNetworkApiController"
        });
        voltmx.mvc.registry.add("FormWorkerThread", {
            "viewName": "FormWorkerThread",
            "controllerName": "FormWorkerThreadController"
        });
        voltmx.mvc.registry.add("frmHomeMath", {
            "viewName": "frmHomeMath",
            "controllerName": "frmHomeMathController"
        });
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation("FormHome").navigate();
    }
});