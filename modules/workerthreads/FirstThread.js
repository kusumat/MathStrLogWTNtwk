//Type your code here//workers inner scope
//invoked when Parent calls worker.postmessage()
kony = voltmx;
self.addEventListener("message", function (event) {
    kony.print('Worker Scope : onmessage : event.data : ' + event.data["message"]);
    //call func
    do_something_in_worker();
});

function do_something_in_worker() {
    kony.print('Worker Scope : invoking postMessage()');
    //will invoke Parent worker.onmessage()
    postMessage({
        'message': "Hello World From Worker "
    });
}