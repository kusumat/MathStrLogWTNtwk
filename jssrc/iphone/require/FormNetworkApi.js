define("FormNetworkApi", function() {
    return function(controller) {
        function addWidgetsFormNetworkApi() {
            this.setDefaultUnit(voltmx.flex.DP);
            var btnClearCookies = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "7%",
                "id": "btnClearCookies",
                "isVisible": true,
                "left": "10%",
                "onClick": controller.AS_Button_a4510a1f93a54da7a437d9a91063b971,
                "skin": "btnBasicColor",
                "text": "Clear Cookies",
                "top": "10%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnFormData = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "7%",
                "id": "btnFormData",
                "isVisible": true,
                "left": "10%",
                "onClick": controller.AS_Button_bff7d23d622a477eb0c6af976425c033,
                "skin": "btnBasicColor",
                "text": "Form Data",
                "top": "20%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnIsNetworkAvailable = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "7%",
                "id": "btnIsNetworkAvailable",
                "isVisible": true,
                "left": "10%",
                "onClick": controller.AS_Button_af36a5d1f4e249eba8fd6e1e0148b4ff,
                "skin": "btnBasicColor",
                "text": "Is Network Available",
                "top": "30%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnHttpRequest = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "7%",
                "id": "btnHttpRequest",
                "isVisible": true,
                "left": "10%",
                "onClick": controller.AS_Button_fe1f40f6b3d04e969bc8975c0e7ee244,
                "skin": "btnBasicColor",
                "text": "Http Request",
                "top": "40%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnNetType = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "7%",
                "id": "btnNetType",
                "isVisible": true,
                "left": "10%",
                "onClick": controller.AS_Button_h013fedccf024257bb5718fa1191392c,
                "skin": "btnBasicColor",
                "text": "Network Type",
                "top": "50%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var flxHeader = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "6.91%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0cff13f9dfcda46",
                "top": "0dp",
                "width": "100%",
                "appName": "MathStrLogWTNtwk"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeader.setDefaultUnit(voltmx.flex.DP);
            var lblHeader = new voltmx.ui.Label({
                "centerX": "56.76%",
                "centerY": "44.64%",
                "height": "43dp",
                "id": "lblHeader",
                "isVisible": true,
                "left": "50%",
                "skin": "CopydefLabel0g48a8e10979c4b",
                "text": "Network API",
                "textStyle": {},
                "top": "20%",
                "width": "44.69%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnBack = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnBack",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_i3d2f35e872241d28f1426c24fa23e91,
                "skin": "btnBasicColor",
                "text": "Back",
                "top": "0%",
                "width": "20%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxHeader.add(lblHeader, btnBack);
            var infoContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "163dp",
                "id": "infoContainer",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0d0cb417244494a",
                "top": "7%",
                "width": "100%",
                "appName": "MathStrLogWTNtwk"
            }, {
                "paddingInPixel": false
            }, {});
            infoContainer.setDefaultUnit(voltmx.flex.DP);
            var btnGreen = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "20%",
                "id": "btnGreen",
                "isVisible": true,
                "left": "5%",
                "skin": "btnGreen",
                "top": "10%",
                "width": "20%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnBlue = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "20%",
                "id": "btnBlue",
                "isVisible": true,
                "left": "5.31%",
                "skin": "CopydefBtnNormal0jaf7a0dc4ea34cBLUE",
                "top": "49.69%",
                "width": "20%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var lbGreen = new voltmx.ui.Label({
                "id": "lbGreen",
                "isVisible": true,
                "left": "30%",
                "skin": "CopydefLabel0h93f671c8ac04f",
                "text": "After successful API call",
                "textStyle": {},
                "top": "10%",
                "width": "60%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lbBlue = new voltmx.ui.Label({
                "id": "lbBlue",
                "isVisible": true,
                "left": "30%",
                "skin": "blueLb",
                "text": "Before API call",
                "textStyle": {},
                "top": "52%",
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            infoContainer.add(btnGreen, btnBlue, lbGreen, lbBlue);
            var btnNetCallBack = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "7%",
                "id": "btnNetCallBack",
                "isVisible": true,
                "left": "10%",
                "onClick": controller.AS_Button_c5202f6e62de412fae7b76f5d92532bf,
                "skin": "btnBasicColor",
                "text": "Network Callbacks",
                "top": "60%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var LabelOutput = new voltmx.ui.Label({
                "id": "LabelOutput",
                "isVisible": true,
                "left": "62dp",
                "text": "Label",
                "textStyle": {},
                "top": "660dp",
                "width": voltmx.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var LabelResult = new voltmx.ui.Label({
                "id": "LabelResult",
                "isVisible": true,
                "left": "62dp",
                "text": "Output/Status",
                "textStyle": {},
                "top": "597dp",
                "width": voltmx.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            this.add(btnClearCookies, btnFormData, btnIsNetworkAvailable, btnHttpRequest, btnNetType, flxHeader, infoContainer, btnNetCallBack, LabelOutput, LabelResult);
        };
        return [{
            "addWidgets": addWidgetsFormNetworkApi,
            "enabledForIdleTimeout": false,
            "id": "FormNetworkApi",
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