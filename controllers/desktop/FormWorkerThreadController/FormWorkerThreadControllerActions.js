define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for btnBack **/
    AS_Button_a83753f1624e42dbbe8de50cfa888dc4: function AS_Button_a83753f1624e42dbbe8de50cfa888dc4(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("FormHome");
        ntf.navigate();
        self.view.tf1.isVisible = false;
        self.view.tf2.isVisible = false;
    },
    /** onClick defined for btnThreadBasic **/
    AS_Button_a935cab2f3f341cdbd6db8d8fb14094d: function AS_Button_a935cab2f3f341cdbd6db8d8fb14094d(eventobject) {
        var self = this;
        //create new worker
        var worker = new kony.worker.WorkerThread('FirstThread.js');
        //invoked when worker calls postmessage() from its inner scope
        worker.addEventListener("message", function(event) {
            kony.print('Parent Scope : onmessage : event.data : ' + event.data["message"]);
        });
        kony.print('Parent Scope : Invoking worker.postmessage()');
        //will invoke worker's inner scope onmessage()
        worker.postMessage({
            'message': 'Hello World From Parent'
        });
        self.view.tf1.isVisible = true;
    },
    /** onClick defined for btnNestedThread **/
    AS_Button_i3be8e77b36a47f2963e368bca7a351d: function AS_Button_i3be8e77b36a47f2963e368bca7a351d(eventobject) {
        var self = this;
        try {
            kony.print("Parent Scope: Init test_case_parent_thread()");
            kony.print("Parent Scope: In try block");
            //create new kony.worker.WorkerThread
            var worker = new kony.worker.WorkerThread('WorkerThread.js');
            //invoked when worker calls postmessage() from its inner scope
            worker.addEventListener("message", function(event) {
                kony.print('Parent Scope : onmessage : event.data : ' + event.data);
            });
            worker.postMessage("Hello from Parent");
        } catch (err) {
            kony.print("Parent Scope: In Catch block");
        }
        //invoke a function                
        invoke_timer_task();
        //
        function invoke_timer_task() {
            kony.print("Parent Scope :- kony.timer.schedule - ");
            var timerId = "mytimer12111";
            var i = 0;

            function timerFunc() {
                i++;
                kony.print("Parent Scope :- kony.timer.schedule - In timerFunc() : " + i);
                if (i > 20) {
                    kony.print("Parent Scope :- kony.timer.schedule - Stopping timer : ");
                    kony.timer.cancel(timerId);
                }
            };
            //
            kony.timer.schedule(timerId, timerFunc, 1, true);
            kony.print("Parent Scope :- kony.timer.schedule - Done");
        };
        kony.print("Parent Scope: Exit test_case_parent_thread()");
        self.view.tf2.isVisible = true;
    },
    /** init defined for FormWorkerThread **/
    AS_Form_a3fd9cd4a06844599f7203a3140c5797: function AS_Form_a3fd9cd4a06844599f7203a3140c5797(eventobject) {
        var self = this;
        self.view.tf1.isVisible = false;
        self.view.tf2.isVisible = false;
    }
});