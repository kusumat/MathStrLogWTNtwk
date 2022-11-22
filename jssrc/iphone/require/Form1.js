define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxBody = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "83.79%",
                "horizontalScrollIndicator": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "CopyslFbox0hf91ef37f75a4c",
                "top": "116dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var tbxInputString = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "tbxInputString",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "35dp",
                "placeholder": "Enter any string",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0eb3ea2bda04346",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "20dp",
                "width": "300dp",
                "zIndex": 1
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
            var tbxcharacterarray = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "tbxcharacterarray",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "35dp",
                "placeholder": "Enter character or string",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0cb012c01b7674c",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "87dp",
                "width": "300dp",
                "zIndex": 1
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
            var btnContainsChars = new voltmx.ui.Button({
                "centerX": "50.00%",
                "focusSkin": "CopydefBtnFocus0e823f9d584904d",
                "height": "50dp",
                "id": "btnContainsChars",
                "isVisible": true,
                "left": "9.34%",
                "onClick": controller.AS_Button_j0611139c11d4e02a857bed31f77aa00,
                "skin": "CopydefBtnNormal0ha60851fecb242",
                "text": "Contains Characters",
                "top": "176dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnGivenChars = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "CopydefBtnFocus0e823f9d584904d",
                "height": "50dp",
                "id": "btnGivenChars",
                "isVisible": true,
                "left": "9.32%",
                "onClick": controller.AS_Button_e754ecd5cddf4071ae84bf67dbc740c3,
                "skin": "CopydefBtnNormal0ha60851fecb242",
                "text": "Contains only Given Charaters",
                "top": "237dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnNoGivenChars = new voltmx.ui.Button({
                "centerX": "50.00%",
                "focusSkin": "CopydefBtnFocus0e823f9d584904d",
                "height": "50dp",
                "id": "btnNoGivenChars",
                "isVisible": true,
                "left": "9.78%",
                "onClick": controller.AS_Button_j1770e07443441b6afbe1151d228aec6,
                "skin": "CopydefBtnNormal0ha60851fecb242",
                "text": "Contains No Given Characters",
                "top": "303dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnEndsWith = new voltmx.ui.Button({
                "centerX": "50.03%",
                "focusSkin": "CopydefBtnFocus0e823f9d584904d",
                "height": "50dp",
                "id": "btnEndsWith",
                "isVisible": true,
                "left": "35dp",
                "onClick": controller.AS_Button_e0d884e63d0b429a818ae6e40c633552,
                "skin": "CopydefBtnNormal0ha60851fecb242",
                "text": "Check if the input string ends with the compare string",
                "top": "367dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnStartsWith = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "CopydefBtnFocus0e823f9d584904d",
                "height": "50dp",
                "id": "btnStartsWith",
                "isVisible": true,
                "left": "35dp",
                "onClick": controller.AS_Button_j6961c194d694b46b98c7ac6c2ae6b9d,
                "skin": "CopydefBtnNormal0ha60851fecb242",
                "text": "Check if the input string starts with the compare string",
                "top": "433dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnNext = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "CopydefBtnFocus0e823f9d584904d",
                "height": "50dp",
                "id": "btnNext",
                "isVisible": true,
                "left": "128dp",
                "onClick": controller.AS_Button_e2e9b42954fa44f295482274b9aafb27,
                "skin": "CopydefBtnNormal0ha60851fecb242",
                "text": "Next",
                "top": "550dp",
                "width": "117dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxBody.add(tbxInputString, tbxcharacterarray, btnContainsChars, btnGivenChars, btnNoGivenChars, btnEndsWith, btnStartsWith, btnNext);
            var flxHeader = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "53dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "MathStrLogWTNtwk"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeader.setDefaultUnit(voltmx.flex.DP);
            var lblHeader = new voltmx.ui.Label({
                "centerX": "50.00%",
                "id": "lblHeader",
                "isVisible": true,
                "left": "123dp",
                "skin": "CopydefLabel0eae7d07926a246",
                "text": "String API",
                "textStyle": {},
                "top": "7dp",
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
            var btnBack = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "80%",
                "id": "btnBack",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_c99ce5862d3e4403a45081ea3febfd5c,
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
            var flxLabel = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "73dp",
                "id": "flxLabel",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0c38911b6bf5948",
                "top": "43dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "MathStrLogWTNtwk"
            }, {
                "paddingInPixel": false
            }, {});
            flxLabel.setDefaultUnit(voltmx.flex.DP);
            var lblInfo = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblInfo",
                "isVisible": true,
                "left": "13dp",
                "skin": "CopydefLabel0d0fa1986c14943",
                "text": "Enter any two strings or characters in the below fields and compare the two strings.",
                "textStyle": {},
                "top": "12dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxLabel.add(lblInfo);
            var LabelOutput = new voltmx.ui.Label({
                "id": "LabelOutput",
                "isVisible": true,
                "left": "47dp",
                "text": "Label",
                "textStyle": {},
                "top": "622dp",
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
            this.add(flxBody, flxHeader, flxLabel, LabelOutput);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
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