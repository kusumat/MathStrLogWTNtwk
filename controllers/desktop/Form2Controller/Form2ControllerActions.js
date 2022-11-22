define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_j3c84be913db4dac8b2642b1041b60a1: function AS_Button_j3c84be913db4dac8b2642b1041b60a1(eventobject) {
        var self = this;
        return self.isNumeric.call(this);
    },
    AS_Button_ffc93511c40d490fb7486719739aa5a7: function AS_Button_ffc93511c40d490fb7486719739aa5a7(eventobject) {
        var self = this;
        return self.isAsciiAlpha.call(this);
    },
    AS_Button_cbbba011771c485889c79bd8a325cbd8: function AS_Button_cbbba011771c485889c79bd8a325cbd8(eventobject) {
        var self = this;
        return self.isAsciiAlphaNumeric.call(this);
    },
    AS_Button_b6321e8aff4b4a4b83333e50c6e06d1e: function AS_Button_b6321e8aff4b4a4b83333e50c6e06d1e(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("Form1");
        ntf.navigate();
    },
    AS_Button_a43e76ee73104833b93e0466de81f7f5: function AS_Button_a43e76ee73104833b93e0466de81f7f5(eventobject) {
        var self = this;
        return self.rep.call(this);
    },
    AS_Button_hcd129c656064f85b5186fad3e44d41f: function AS_Button_hcd129c656064f85b5186fad3e44d41f(eventobject) {
        var self = this;
        return self.isValidEmail.call(this);
    },
    AS_Button_i71ed67f113a4f9c9416ee3daa4f9b8e: function AS_Button_i71ed67f113a4f9c9416ee3daa4f9b8e(eventobject) {
        var self = this;
        return self.reverse.call(this);
    },
    AS_Button_b02a75d104754b8fac7ea92d227a20d1: function AS_Button_b02a75d104754b8fac7ea92d227a20d1(eventobject) {
        var self = this;
        return self.trim.call(this);
    }
});