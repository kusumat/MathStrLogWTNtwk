define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_g9b09f49778243a6833344837b8d0175: function AS_Button_g9b09f49778243a6833344837b8d0175(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "MathStrLogWTNtwk",
            "friendlyName": "FormHome"
        });
        ntf.navigate();
        self.view.tf1.isVisible = false;
        self.view.tf2.isVisible = false;
    },
    AS_Button_c1adb6e761fe47918849d43d77076fb3: function AS_Button_c1adb6e761fe47918849d43d77076fb3(eventobject) {
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
    AS_Button_ed79ca7159064959a50e131b4242bf80: function AS_Button_ed79ca7159064959a50e131b4242bf80(eventobject) {
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
    AS_Form_i501893f5767424e81555445ea1ed059: function AS_Form_i501893f5767424e81555445ea1ed059(eventobject) {
        var self = this;
        self.view.tf1.isVisible = false;
        self.view.tf2.isVisible = false;
    }
});