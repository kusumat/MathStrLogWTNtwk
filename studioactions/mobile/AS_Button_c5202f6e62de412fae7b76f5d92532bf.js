function AS_Button_c5202f6e62de412fae7b76f5d92532bf(eventobject) {
    var self = this;
    var config = {};
    config.statusChange = function(isOnLine) {
        if (isOnLine) {
            alert("Device is online");
        } else {
            alert("Device is offline");
        }
    };
    kony.net.setNetworkCallbacks(config);
    if (voltmx.theme.getCurrentTheme() != "default") {
        voltmx.theme.setCurrentTheme("default", function() {
            self.view.btnNetCallBack.skin = "cnfNetApi";
        }, null);
    } else {
        (function() {
            self.view.btnNetCallBack.skin = "cnfNetApi";
        })();
    }
}