function AS_Button_d60f34b6ef3e4a80896d32e3ecc11d33(eventobject) {
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