define("userFormNetworkApiController", {
    //Type your controller code here 
    callbackFunction: function callbackFunction(network) {
        if (network.status !== "FAILED") {
            alert(JSON.stringify(network));
        } else {
            alert("Failed to get network");
        }
    },
    checkActiveNetwork: function checkActiveNetwork() {
        var options = {
            "requestWithPermission": false,
            "callback": this.callbackFunction
        };
        //alert("Network type is : "+kony.net.getActiveNetworkType(options));
        this.view.LabelOutput.text = kony.net.getActiveNetworkType(options);
        this.view.LabelResult.text = "Network type is : " + kony.net.getActiveNetworkType(options);
    },
    setCookiesFunc: function setCookiesFunc() {
        var listOfCookies = [{
            "Name": "appName",
            "Value": "App01",
            "Domain": "app.example.com",
            "Path": "/"
        }];
        kony.net.setCookies("window.location.origin", listOfCookies);
        alert("Set cookies is done .");
    }
});
define("FormNetworkApiControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_i3d2f35e872241d28f1426c24fa23e91: function AS_Button_i3d2f35e872241d28f1426c24fa23e91(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "MathStrLogWTNtwk",
            "friendlyName": "FormHome"
        });
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
    AS_Button_a4510a1f93a54da7a437d9a91063b971: function AS_Button_a4510a1f93a54da7a437d9a91063b971(eventobject) {
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
    AS_Button_bff7d23d622a477eb0c6af976425c033: function AS_Button_bff7d23d622a477eb0c6af976425c033(eventobject) {
        var self = this;
        var httpinputparams1 = new kony.net.FormData();
        httpinputparams1.set("httpKey", "Values added by set method");
        //alert("Created form data and set params Data for param key 'httpKey' is : "+httpinputparams1.get("httpKey"));
        this.view.LabelOutput.text = httpinputparams1.get("httpKey");
        this.view.LabelResult.text = "Created form data and set params Data for param key 'httpKey' is : " + httpinputparams1.get("httpKey");
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
    AS_Button_fe1f40f6b3d04e969bc8975c0e7ee244: function AS_Button_fe1f40f6b3d04e969bc8975c0e7ee244(eventobject) {
        var self = this;
        var request = new kony.net.HttpRequest();
        //alert("http object created :-"+request.getAllResponseHeaders());
        this.view.LabelOutput.text = "Http Object Created Successfully";
        this.view.LabelResult.text = "http object created :-" + request.getAllResponseHeaders();
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
    AS_Button_af36a5d1f4e249eba8fd6e1e0148b4ff: function AS_Button_af36a5d1f4e249eba8fd6e1e0148b4ff(eventobject) {
        var self = this;
        var options = {
                "requestWithPermission": true
            }
            //alert("Is Network Available : "+kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY, options));
        this.view.LabelOutput.text = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY, options);
        this.view.LabelResult.text = "Is Network Available : " + kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY, options);
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
    AS_Button_c5202f6e62de412fae7b76f5d92532bf: function AS_Button_c5202f6e62de412fae7b76f5d92532bf(eventobject) {
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
    AS_Button_h013fedccf024257bb5718fa1191392c: function AS_Button_h013fedccf024257bb5718fa1191392c(eventobject) {
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
define("FormNetworkApiController", ["userFormNetworkApiController", "FormNetworkApiControllerActions"], function() {
    var controller = require("userFormNetworkApiController");
    var controllerActions = ["FormNetworkApiControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
