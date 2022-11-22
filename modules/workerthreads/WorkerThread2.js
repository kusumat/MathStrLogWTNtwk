//Type your code here//Grand child worker2 – nested worker
//workers inner scope
kony = voltmx;
kony.print("Grand child: Worker2 Scope: Init");

//invoked when Parent calls worker.postmessage()
this.addEventListener("message", function(event) {
	kony.print('Grand child: Worker2 Scope : onmessage : event.data : ' + event.data);
});

self.postMessage("Hello from Worker2");
//
invoke_timer_task();

//
function invoke_timer_task () {
    kony.print("Grand child: Worker2 Scope :- kony.timer.schedule - ");
    
    var timerId = "mytimer1211";
    var i = 0;
    
    function timerFunc()
    {
        i++;
        kony.print("Worker2 Scope :- kony.timer.schedule - In timerFunc() : " + i + " : Grand child ");
        
        if(i > 20) {
            kony.print("Grand child: Worker2 Scope :- kony.timer.schedule - Stopping timer : ");
            kony.timer.cancel(timerId);
        }
    }
    
    //
    kony.timer.schedule(timerId,timerFunc, 1, true);
    kony.print("Grand child: Worker2 Scope :- kony.timer.schedule - Done");
}
kony.print("Grand child: Worker2 Scope : Loading done");