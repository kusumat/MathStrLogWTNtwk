define("Form2", function() {
    return function(controller) {
        function addWidgetsForm2() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer0j0929fecb58f40 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100.83%",
                "id": "FlexContainer0j0929fecb58f40",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-7dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "MathStrLogWTNtwk"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0j0929fecb58f40.setDefaultUnit(voltmx.flex.DP);
            var tbxInputString = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.09%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "tbxInputString",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "35dp",
                "placeholder": "Enter any string",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0b05f9ccaebaa49",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "80dp",
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
            var btnASCII = new voltmx.ui.Button({
                "centerX": "50.03%",
                "focusSkin": "CopyCopydefBtnFocus",
                "height": "50dp",
                "id": "btnASCII",
                "isVisible": true,
                "left": "9.35%",
                "onClick": controller.AS_Button_b87b7a1cd8c14ecdb10a82cf7a6140bf,
                "skin": "CopyCopydefBtnNormal",
                "text": "Check whether the string contains ASCII alphabets",
                "top": "150dp",
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
            var btnASCIIAlphanumeric = new voltmx.ui.Button({
                "centerX": "50.03%",
                "focusSkin": "CopyCopydefBtnFocus",
                "height": "50dp",
                "id": "btnASCIIAlphanumeric",
                "isVisible": true,
                "left": "9.36%",
                "onClick": controller.AS_Button_j96848ba6f3742e192b17a1eae38036c,
                "skin": "CopyCopydefBtnNormal",
                "text": "Check whether the string contains ASCII Alphanumeric characters",
                "top": "210dp",
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
            var CopybtnASCIIAlphanumeric0a841e363f73848 = new voltmx.ui.Button({
                "centerX": "50.08%",
                "focusSkin": "CopyCopydefBtnFocus",
                "height": "50dp",
                "id": "CopybtnASCIIAlphanumeric0a841e363f73848",
                "isVisible": true,
                "left": "9.36%",
                "onClick": controller.AS_Button_gc36fee38d314b7a99ae6a79294c9124,
                "skin": "CopyCopydefBtnNormal",
                "text": "Check whether the string contains only Numeric characters",
                "top": "270dp",
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
            var btnEmail = new voltmx.ui.Button({
                "centerX": "50.00%",
                "focusSkin": "CopyCopydefBtnFocus",
                "height": "50dp",
                "id": "btnEmail",
                "isVisible": true,
                "left": "10.08%",
                "onClick": controller.AS_Button_abea1d1ea118458b9a2769ff59174d4d,
                "skin": "CopyCopydefBtnNormal",
                "text": "Validate the Email ID",
                "top": "330dp",
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
            var btnConcatenate = new voltmx.ui.Button({
                "centerX": "50.03%",
                "focusSkin": "CopyCopydefBtnFocus",
                "height": "50dp",
                "id": "btnConcatenate",
                "isVisible": true,
                "left": "9.78%",
                "onClick": controller.AS_Button_bc9bc7ed509b45bca7e8b2c17b7be86e,
                "skin": "CopyCopydefBtnNormal",
                "text": "Concatenate the string with itself",
                "top": "388dp",
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
            var btnReverse = new voltmx.ui.Button({
                "centerX": "50.02%",
                "focusSkin": "CopyCopydefBtnFocus",
                "height": "50dp",
                "id": "btnReverse",
                "isVisible": true,
                "left": "9.82%",
                "onClick": controller.AS_Button_b10bd2e992cc4199adecc073e7c5fb84,
                "skin": "CopyCopydefBtnNormal",
                "text": "Reverse the string",
                "top": "447dp",
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
            var btnTrim = new voltmx.ui.Button({
                "centerX": "50.03%",
                "focusSkin": "CopyCopydefBtnFocus",
                "height": "50dp",
                "id": "btnTrim",
                "isVisible": true,
                "left": "9.80%",
                "onClick": controller.AS_Button_e9b0813f5ded49e29eb0c31bd2d45c8b,
                "skin": "CopyCopydefBtnNormal",
                "text": "Trim the String",
                "top": "508dp",
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
            var btnBack = new voltmx.ui.Button({
                "focusSkin": "CopyCopydefBtnFocus",
                "height": "50dp",
                "id": "btnBack",
                "isVisible": true,
                "left": "29.30%",
                "onClick": controller.AS_Button_c9fa59e43a3e4eee89c370a943669670,
                "skin": "CopyCopydefBtnNormal",
                "text": "Back",
                "top": "583dp",
                "width": "149dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var Label0e71f69cb7bd743 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "Label0e71f69cb7bd743",
                "isVisible": true,
                "left": "134dp",
                "skin": "CopydefLabel0fa7c847e104247",
                "text": "String API also allows you to perform following operations",
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
            FlexContainer0j0929fecb58f40.add(tbxInputString, btnASCII, btnASCIIAlphanumeric, CopybtnASCIIAlphanumeric0a841e363f73848, btnEmail, btnConcatenate, btnReverse, btnTrim, btnBack, Label0e71f69cb7bd743);
            var LabelOutput = new voltmx.ui.Label({
                "id": "LabelOutput",
                "isVisible": true,
                "left": "58dp",
                "text": "Label",
                "textStyle": {},
                "top": "642dp",
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
            this.add(FlexContainer0j0929fecb58f40, LabelOutput);
        };
        return [{
            "addWidgets": addWidgetsForm2,
            "enabledForIdleTimeout": false,
            "id": "Form2",
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