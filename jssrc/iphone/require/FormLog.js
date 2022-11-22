define("FormLog", function() {
    return function(controller) {
        function addWidgetsFormLog() {
            this.setDefaultUnit(voltmx.flex.DP);
            var btnBack = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "7%",
                "id": "btnBack",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_aad852378e3d40f58c600466e254bc52,
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
            var btnGenerate = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "7%",
                "id": "btnGenerate",
                "isVisible": true,
                "left": "10%",
                "onClick": controller.AS_Button_j1299396230a488ebf55415592ad2d26,
                "skin": "btnBasicColor",
                "text": "Generate Logs",
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
            var lbConf = new voltmx.ui.Label({
                "height": "7%",
                "id": "lbConf",
                "isVisible": false,
                "left": "2%",
                "skin": "CopydefLabel0ed307f3b658944",
                "text": "Generated logs please check console or seg",
                "textStyle": {},
                "top": "20%",
                "width": "95%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var segLogData = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "lblDescription": "",
                    "lblHeading": "",
                    "lblStrip": "",
                    "lblTime": ""
                }],
                "groupCells": false,
                "height": "70%",
                "id": "segLogData",
                "isVisible": true,
                "left": "0.00%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSampleRowTemplate",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "30%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSampleRowTemplate": "flxSampleRowTemplate",
                    "lblDescription": "lblDescription",
                    "lblHeading": "lblHeading",
                    "lblStrip": "lblStrip",
                    "lblTime": "lblTime"
                },
                "width": "100%",
                "appName": "MathStrLogWTNtwk"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_ROW_SELECT,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            this.add(btnBack, btnGenerate, lbConf, segLogData);
        };
        return [{
            "addWidgets": addWidgetsFormLog,
            "enabledForIdleTimeout": false,
            "id": "FormLog",
            "init": controller.AS_Form_j88934038265416d8fdf4959b51c3b84,
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