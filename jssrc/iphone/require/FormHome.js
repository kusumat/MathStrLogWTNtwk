define("FormHome", function() {
    return function(controller) {
        function addWidgetsFormHome() {
            this.setDefaultUnit(voltmx.flex.DP);
            var btnMath = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "10%",
                "id": "btnMath",
                "isVisible": true,
                "left": "25%",
                "onClick": controller.AS_Button_fb743b17bb5048138dca5191c7bceba3,
                "skin": "btnBasicColor",
                "text": "Math API",
                "top": "10%",
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnStringHome = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "10%",
                "id": "btnStringHome",
                "isVisible": true,
                "left": "25%",
                "onClick": controller.AS_Button_id2782674fe344539e8706c3f458c9fd,
                "skin": "btnBasicColor",
                "text": "String API",
                "top": "25%",
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnLog = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "10%",
                "id": "btnLog",
                "isVisible": true,
                "left": "25%",
                "onClick": controller.AS_Button_e814615ba48e42bd89838fbf36b4895d,
                "skin": "btnBasicColor",
                "text": "Logging API",
                "top": "40%",
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnWokerThread = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "10%",
                "id": "btnWokerThread",
                "isVisible": true,
                "left": "25%",
                "onClick": controller.AS_Button_f6b3c4df87d84bf1ba1600b2fc8c7467,
                "skin": "btnBasicColor",
                "text": "Worker Thread API",
                "top": "55%",
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnNetworkApi = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "10%",
                "id": "btnNetworkApi",
                "isVisible": true,
                "left": "25.00%",
                "onClick": controller.AS_Button_f0130164a8184eb5bf36b332864675dc,
                "skin": "btnBasicColor",
                "text": "Network API",
                "top": "70%",
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            this.add(btnMath, btnStringHome, btnLog, btnWokerThread, btnNetworkApi);
        };
        return [{
            "addWidgets": addWidgetsFormHome,
            "enabledForIdleTimeout": false,
            "id": "FormHome",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "MathStrLogWTNtwk"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});