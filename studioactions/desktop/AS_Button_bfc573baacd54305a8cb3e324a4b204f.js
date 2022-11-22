function AS_Button_bfc573baacd54305a8cb3e324a4b204f(eventobject) {
    var self = this;
    var httpRequestNew = kony.net.HttpRequest();
    alert("Http Request :" + httpRequestNew);
    if (voltmx.theme.getCurrentTheme() != "default") {
        voltmx.theme.setCurrentTheme("default", function() {
            self.view.btnHttpRequest.skin = "cnfNetApi";
        }, null);
    } else {
        (function() {
            self.view.btnHttpRequest.skin = "cnfNetApi";
        })();
    }
}