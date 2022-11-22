define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnGivenChars **/
    AS_Button_a110352a7c5c4a93b7ed5bc8cdd5bd8f: function AS_Button_a110352a7c5c4a93b7ed5bc8cdd5bd8f(eventobject) {
        var self = this;
        return self.contiansOnlyGivenChars.call(this);
    },
    /** onClick defined for btnNext **/
    AS_Button_b443cc131f5545dc835b215dd475fed6: function AS_Button_b443cc131f5545dc835b215dd475fed6(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("Form2");
        ntf.navigate();
    },
    /** onClick defined for btnStartsWith **/
    AS_Button_b87bc09d66114586901d335d3c7cdef8: function AS_Button_b87bc09d66114586901d335d3c7cdef8(eventobject) {
        var self = this;
        return self.startsWith.call(this);
    },
    /** onClick defined for btnNoGivenChars **/
    AS_Button_baa75c532ce44eb0ac253fffbac7488b: function AS_Button_baa75c532ce44eb0ac253fffbac7488b(eventobject) {
        var self = this;
        return self.containsNoGivenChars.call(this);
    },
    /** onClick defined for btnEndsWith **/
    AS_Button_cc94c900ceb64f1ab1c656c220054f62: function AS_Button_cc94c900ceb64f1ab1c656c220054f62(eventobject) {
        var self = this;
        return self.endsWith.call(this);
    },
    /** onClick defined for btnBack **/
    AS_Button_fcc4e67f31ea44999545af466fb9c068: function AS_Button_fcc4e67f31ea44999545af466fb9c068(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("FormHome");
        ntf.navigate();
    },
    /** onClick defined for btnContainsChars **/
    AS_Button_fde5c608939144d686ae6759b52972a6: function AS_Button_fde5c608939144d686ae6759b52972a6(eventobject) {
        var self = this;
        return self.containsChars.call(this);
    }
});