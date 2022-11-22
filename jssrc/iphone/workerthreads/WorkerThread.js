//worker
//workers inner scope
kony = voltmx;
kony.print("Worker Scope: Init");
var worker = new kony.worker.WorkerThread('WorkerThread2.js');
//invoked when Parent calls worker.postmessage()
this.addEventListener("message", function(event) {
    kony.print('Worker Scope : onmessage : event.data : ' + event.data);
});
self.postMessage("Hello from Worker");
//
invoke_timer_task();
//
function invoke_timer_task() {
    kony.print("Worker Scope :- kony.timer.schedule - ");
    var timerId = "mytimer121";
    var i = 0;

    function timerFunc() {
        i++;
        kony.print("Worker Scope :- kony.timer.schedule - In timerFunc() : " + i);
        if (i > 20) {
            kony.print("Worker Scope :- kony.timer.schedule - Stopping timer : ");
            kony.timer.cancel(timerId);
        }
    }
    //
    kony.timer.schedule(timerId, timerFunc, 1, true);
    kony.print("Worker Scope :- kony.timer.schedule - Done");
}
kony.print("Worker Scope: Loading done");