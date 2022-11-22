define("FormWorkerThread", function() {
    return function(controller) {
        function addWidgetsFormWorkerThread() {
            this.setDefaultUnit(voltmx.flex.DP);
            var tf1 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "10%",
                "id": "tf1",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "10%",
                "placeholder": "Placeholder",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0ad17e568f7e745",
                "text": "Please check the console for output",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "20%",
                "width": "80%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "defTextBoxPlaceholder",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var tf2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "10%",
                "id": "tf2",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "10.00%",
                "placeholder": "Placeholder",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0e93c8905fe9548",
                "text": "Please check the console for output",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "60%",
                "width": "80%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "defTextBoxPlaceholder",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var btnThreadBasic = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "7%",
                "id": "btnThreadBasic",
                "isVisible": true,
                "left": "10%",
                "onClick": controller.AS_Button_ed79ca7159064959a50e131b4242bf80,
                "skin": "btnBasicColor",
                "text": "Simple threads",
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
            var btnNestedThread = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "7%",
                "id": "btnNestedThread",
                "isVisible": true,
                "left": "10.00%",
                "onClick": controller.AS_Button_c1adb6e761fe47918849d43d77076fb3,
                "skin": "btnBasicColor",
                "text": "Nested threads",
                "top": "50.00%",
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
                "text": "Worker Thread API",
                "textStyle": {},
                "top": "20%",
                "width": "60%",
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
                "onClick": controller.AS_Button_g9b09f49778243a6833344837b8d0175,
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
            this.add(tf1, tf2, btnThreadBasic, btnNestedThread, flxHeader);
        };
        return [{
            "addWidgets": addWidgetsFormWorkerThread,
            "enabledForIdleTimeout": false,
            "id": "FormWorkerThread",
            "init": controller.AS_Form_i501893f5767424e81555445ea1ed059,
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