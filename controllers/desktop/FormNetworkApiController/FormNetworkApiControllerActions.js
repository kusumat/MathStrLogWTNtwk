define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_f01b40a71bd443889a5846892ce7fc1f: function AS_Button_f01b40a71bd443889a5846892ce7fc1f(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("FormHome");
        ntf.navigate();
        if (voltmx.theme.getCurrentTheme() != "default") {
            voltmx.theme.setCurrentTheme("default", function() {
                self.view.btnClearCookies.skin = "btnBasicColor";
            }, null);
        } else {
            (function() {
                self.view.btnClearCookies.skin = "btnBasicColor";
            })();
        }
        if (voltmx.theme.getCurrentTheme() != "default") {
            voltmx.theme.setCurrentTheme("default", function() {
                self.view.btnFormData.skin = "btnBasicColor";
            }, null);
        } else {
            (function() {
                self.view.btnFormData.skin = "btnBasicColor";
            })();
        }
        if (voltmx.theme.getCurrentTheme() != "default") {
            voltmx.theme.setCurrentTheme("default", function() {
                self.view.btnIsNetworkAvailable.skin = "btnBasicColor";
            }, null);
        } else {
            (function() {
                self.view.btnIsNetworkAvailable.skin = "btnBasicColor";
            })();
        }
        if (voltmx.theme.getCurrentTheme() != "default") {
            voltmx.theme.setCurrentTheme("default", function() {
                self.view.btnHttpRequest.skin = "btnBasicColor";
            }, null);
        } else {
            (function() {
                self.view.btnHttpRequest.skin = "btnBasicColor";
            })();
        }
        if (voltmx.theme.getCurrentTheme() != "default") {
            voltmx.theme.setCurrentTheme("default", function() {
                self.view.btnNetType.skin = "btnBasicColor";
            }, null);
        } else {
            (function() {
                self.view.btnNetType.skin = "btnBasicColor";
            })();
        }
        if (voltmx.theme.getCurrentTheme() != "default") {
            voltmx.theme.setCurrentTheme("default", function() {
                self.view.btnNetCallBack.skin = "btnBasicColor";
            }, null);
        } else {
            (function() {
                self.view.btnNetCallBack.skin = "btnBasicColor";
            })();
        }
    },
    AS_Button_d5e93031e4b9425f9c93937796cbdcc9: function AS_Button_d5e93031e4b9425f9c93937796cbdcc9(eventobject) {
        var self = this;
        kony.net.clearCookies(window.location.origin);
        this.view.LabelOutput.text = "Cleared cookies successfully";
        if (voltmx.theme.getCurrentTheme() != "default") {
            voltmx.theme.setCurrentTheme("default", function() {
                self.view.btnClearCookies.skin = "cnfNetApi";
            }, null);
        } else {
            (function() {
                self.view.btnClearCookies.skin = "cnfNetApi";
            })();
        }
    },
    AS_Button_b8f134c2b10741368f9cade45998081f: function AS_Button_b8f134c2b10741368f9cade45998081f(eventobject) {
        var self = this;
        var httpinputparams1 = new kony.net.FormData();
        httpinputparams1.set("httpKey", "Values added by set method");
        //alert("Created form data and set params Data for param key 'httpKey' is : "+httpinputparams1.get("httpKey"));
        this.view.LabelResult.text = "Created form data and set params Data for param key 'httpKey' is : " + httpinputparams1.get("httpKey");
        this.view.LabelOutput.text = httpinputparams1.get("httpKey");
        if (voltmx.theme.getCurrentTheme() != "default") {
            voltmx.theme.setCurrentTheme("default", function() {
                self.view.btnFormData.skin = "cnfNetApi";
            }, null);
        } else {
            (function() {
                self.view.btnFormData.skin = "cnfNetApi";
            })();
        }
    },
    AS_Button_bfc573baacd54305a8cb3e324a4b204f: function AS_Button_bfc573baacd54305a8cb3e324a4b204f(eventobject) {
        var self = this;
        var request = new kony.net.HttpRequest();
        //alert("http object created :-"+request.getAllResponseHeaders());
        this.view.LabelResult.text = "http object created :-" + request.getAllResponseHeaders();
        this.view.LabelOutput.text = "Http object created successfully";
        if (voltmx.theme.getCurrentTheme() != "default") {
            voltmx.theme.setCurrentTheme("default", function() {
                self.view.btnHttpRequest.skin = "cnfNetApi";
            }, null);
        } else {
            (function() {
                self.view.btnHttpRequest.skin = "cnfNetApi";
            })();
        }
    },
    AS_Button_h22d1af9f3c24c2c83b39a3f490e3005: function AS_Button_h22d1af9f3c24c2c83b39a3f490e3005(eventobject) {
        var self = this;
        var options = {
                "requestWithPermission": true
            }
            //alert("Is Network Available : "+kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY, options));
        this.view.LabelResult.text = "Is Network Available : " + kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY, options);
        this.view.LabelOutput.text = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY, options).toString();
        if (voltmx.theme.getCurrentTheme() != "default") {
            voltmx.theme.setCurrentTheme("default", function() {
                self.view.btnIsNetworkAvailable.skin = "cnfNetApi";
            }, null);
        } else {
            (function() {
                self.view.btnIsNetworkAvailable.skin = "cnfNetApi";
            })();
        }
    },
    AS_Button_c1591d9669704816a2165fbc04dd6023: function AS_Button_c1591d9669704816a2165fbc04dd6023(eventobject) {
        var self = this;
        var config = {};
        config.statusChange = function(isOnLine) {
            if (isOnLine) {
                alert("Device is online :- message from NetworkCallbacks");
            } else {
                alert("Device is offline :- message from NetworkCallbacks");
            }
        };
        kony.net.setNetworkCallbacks(config);
        //alert("Network Callbacks successful");
        this.view.LabelOutput.text = "Network Callbacks successful";
        if (voltmx.theme.getCurrentTheme() != "default") {
            voltmx.theme.setCurrentTheme("default", function() {
                self.view.btnNetCallBack.skin = "cnfNetApi";
            }, null);
        } else {
            (function() {
                self.view.btnNetCallBack.skin = "cnfNetApi";
            })();
        }
    },
    AS_Button_d60f34b6ef3e4a80896d32e3ecc11d33: function AS_Button_d60f34b6ef3e4a80896d32e3ecc11d33(eventobject) {
        var self = this;
        self.checkActiveNetwork.call(this);
        if (voltmx.theme.getCurrentTheme() != "default") {
            voltmx.theme.setCurrentTheme("default", function() {
                self.view.btnNetType.skin = "cnfNetApi";
            }, null);
        } else {
            (function() {
                self.view.btnNetType.skin = "cnfNetApi";
            })();
        }
    }
});