define({ 

  //Type your controller code here 
  callbackFunction:function callbackFunction(network){
    if(network.status !== "FAILED"){
      alert(JSON.stringify(network));
    }
    else{
      alert("Failed to get network");
    }
  },
  checkActiveNetwork:function checkActiveNetwork() {

    var options = {
      "requestWithPermission" : false,
      "callback" : this.callbackFunction
    };
    //alert("Network type is : "+kony.net.getActiveNetworkType(options));
    this.view.LabelOutput.text = kony.net.getActiveNetworkType(options);
    this.view.LabelResult.text = "Network type is : "+kony.net.getActiveNetworkType(options);

  },
  setCookiesFunc: function setCookiesFunc() {
    var listOfCookies = [{
      "Name": "appName",
      "Value": "App01",
      "Domain": "app.example.com",
      "Path": "/"
    }];
    kony.net.setCookies("window.location.origin", listOfCookies);
    alert("Set cookies is done .");
  }

});