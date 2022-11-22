//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "MathStrLogWTNtwk",
    appName: "MathStrLogWTNtwk",
    appVersion: "1.0.0",
    isturlbase: "https://m100000012001.sit-hclvoltmx.net/services",
    isDebug: true,
    isMFApp: true,
    appKey: "84d1fe9766bd813ef431dcca61fdc728",
    appSecret: "81088ce47e8e27df0fe30a32cc70c2eb",
    serviceUrl: "https://100000012.auth.sit-hclvoltmx.net/appconfig",
    svcDoc: {
        "selflink": "https://100000012.auth.sit-hclvoltmx.net/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "_internal_logout": "https://m100000012001.sit-hclvoltmx.net/services/IST"
        },
        "service_doc_etag": "000001849E1783A0",
        "appId": "0bceb382-4136-4fd9-a196-0e3692572b19",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "App 199",
        "reportingsvc": {
            "session": "https://m100000012001.sit-hclvoltmx.net/services/IST",
            "custom": "https://m100000012001.sit-hclvoltmx.net/services/CMS"
        },
        "baseId": "074378dc-cce2-47ad-9038-da021191e8d9",
        "app_default_version": "1.0",
        "services_meta": {}
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
    testAutomation: {
        "scriptsURL": "http://192.168.0.5:9989/testresources/MathStrLogWTNtwk/",
        "webSocketPort": 9111,
        "fetchScriptsFromLocalStorage": false,
        "disableScreenShotsForTestReports": false
    },
};
sessionID = "";

function setAppBehaviors() {
    voltmx.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        isMVC: true,
        APILevel: 8400,
        isCompositeApp: false
    });
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    voltmx.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        postappinit: function(eventObj) {
            return applicationController.postAppInitCallBack(eventObj);
        },
        showstartupform: function() {
            new voltmx.mvc.Navigation("FormHome").navigate();
        }
    });
};

function loadResources() {
    _kony.mvc.initCompositeApp(false);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    voltmx.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    voltmx.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
voltmx.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
loadResources();
debugger;