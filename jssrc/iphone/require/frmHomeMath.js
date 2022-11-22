define("frmHomeMath", function() {
    return function(controller) {
        function addWidgetsfrmHomeMath() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxHome = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "90.30%",
                "horizontalScrollIndicator": true,
                "id": "flxHome",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "CopyslFbox0ic758b93b85f45",
                "top": "50dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {
                "paddingInPixel": false
            }, {});
            flxHome.setDefaultUnit(voltmx.flex.DP);
            var btnConvert = new voltmx.ui.Button({
                "centerX": "80%",
                "focusSkin": "defBtnFocus",
                "height": "57dp",
                "id": "btnConvert",
                "isVisible": true,
                "onClick": controller.AS_Button_cefc2d4c0e7045ecaf40acf50fbf7b9b,
                "right": "5.00%",
                "skin": "CopydefBtnNormal0fcf0ec4c7db440",
                "text": "Decimal to integer ",
                "top": "216dp",
                "width": "112dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnSqrt = new voltmx.ui.Button({
                "centerX": "20%",
                "focusSkin": "defBtnFocus",
                "height": "57dp",
                "id": "btnSqrt",
                "isVisible": true,
                "left": "5.01%",
                "onClick": controller.AS_Button_be42371d255e424e981d1e1e21634afd,
                "skin": "btnBasicColor",
                "text": "Square root ",
                "top": "216dp",
                "width": "112dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnMax = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "57dp",
                "id": "btnMax",
                "isVisible": true,
                "left": "11.84%",
                "onClick": controller.AS_Button_d708afb1d1204d8e89a2201d1734154c,
                "skin": "btnBasicColor",
                "text": "Maximum",
                "top": "427dp",
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnRandom = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "57dp",
                "id": "btnRandom",
                "isVisible": true,
                "left": "11.77%",
                "onClick": controller.AS_Button_a5cf8db4570a49508eae8c837de9cf96,
                "skin": "btnBasicColor",
                "text": "Random",
                "top": "570dp",
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnMin = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "57dp",
                "id": "btnMin",
                "isVisible": true,
                "left": "59.66%",
                "onClick": controller.AS_Button_jaee180aa1014ba79d122ae20740f355,
                "skin": "btnBasicColor",
                "text": "Minimum",
                "top": "427dp",
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnValue = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "57dp",
                "id": "btnValue",
                "isVisible": true,
                "left": "59.59%",
                "onClick": controller.AS_Button_c856b3cd10734f55a7f75f4617e15dfe,
                "skin": "btnBasicColor",
                "text": "π Value",
                "top": "570dp",
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var tbxOperations = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "tbxOperations",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "5.00%",
                "placeholder": "Enter a number",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0d10cd2dcc6264c",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "147dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
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
            var btnSquare = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "57dp",
                "id": "btnSquare",
                "isVisible": true,
                "left": "137dp",
                "onClick": controller.AS_Button_j2800924b94a4e48be4f4db3838dc9ba,
                "skin": "CopydefBtnNormal0hfd091f0464f41",
                "text": "Square",
                "top": "216dp",
                "width": "103dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var tbxNumber1 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "tbxNumber1",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "4.98%",
                "onTextChange": controller.AS_TextField_cc7d26abb4c04b1ebb1cfd343dee2063,
                "placeholder": "Enter a number",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0a74f60eaed1e47",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "357dp",
                "width": "43%",
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
            var tbxNumber2 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "74.54%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "tbxNumber2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "210dp",
                "placeholder": "Enter a number",
                "right": "10%",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0df3ba7d821ba49",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "357dp",
                "width": "43%",
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
            var lblAPIText = new voltmx.ui.Label({
                "height": "12.79%",
                "id": "lblAPIText",
                "isVisible": true,
                "left": "2.00%",
                "skin": "CopydefLabelnew0d36f032c6a7a46",
                "text": "This app showcases the Math API exposed by Kony Quantum. The Math API has functions that you can use to perform mathematical operations. ",
                "textStyle": {},
                "top": "2%",
                "width": "96%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblMathOperations = new voltmx.ui.Label({
                "id": "lblMathOperations",
                "isVisible": true,
                "left": "4.95%",
                "skin": "CopydefLabel0cbacfa0c78d140",
                "text": "Math API Operations",
                "textStyle": {},
                "top": "113dp",
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
            var lblCompare = new voltmx.ui.Label({
                "id": "lblCompare",
                "isVisible": true,
                "left": "4.50%",
                "skin": "CopydefLabel0cbacfa0c78d140",
                "text": "Compare Two Numbers",
                "textStyle": {},
                "top": "317dp",
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
            var CopylblCompare0b8064e24d0ba4d = new voltmx.ui.Label({
                "id": "CopylblCompare0b8064e24d0ba4d",
                "isVisible": true,
                "left": "4.48%",
                "skin": "CopydefLabel0cbacfa0c78d140",
                "text": "Generate a Random number and π Value",
                "textStyle": {},
                "top": "520dp",
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
            var lblSeperator = new voltmx.ui.Label({
                "height": "0px",
                "id": "lblSeperator",
                "isVisible": true,
                "left": "38dp",
                "skin": "CopydefLabel0ha6cd16f283243",
                "text": "Label",
                "textStyle": {},
                "top": "317dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxHome.add(btnConvert, btnSqrt, btnMax, btnRandom, btnMin, btnValue, tbxOperations, btnSquare, tbxNumber1, tbxNumber2, lblAPIText, lblMathOperations, lblCompare, CopylblCompare0b8064e24d0ba4d, lblSeperator);
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
                "centerX": "49.96%",
                "centerY": "42.98%",
                "height": "43dp",
                "id": "lblHeader",
                "isVisible": true,
                "left": "37.33%",
                "skin": "CopydefLabel0g48a8e10979c4b",
                "text": "Math API",
                "textStyle": {},
                "top": "20.41%",
                "width": "110dp",
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
                "onClick": controller.AS_Button_ad18e176469d4be3b0b30afe9a33aac8,
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
            var LabelOutput = new voltmx.ui.Label({
                "id": "LabelOutput",
                "isVisible": true,
                "left": "139dp",
                "skin": "defLabel",
                "text": "Label",
                "textStyle": {},
                "top": "727dp",
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
            this.add(flxHome, flxHeader, LabelOutput);
        };
        return [{
            "addWidgets": addWidgetsfrmHomeMath,
            "enabledForIdleTimeout": false,
            "id": "frmHomeMath",
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