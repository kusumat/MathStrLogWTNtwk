define({
onclickfloor: function(){
  var a= this.view.tbxOperations.text;
  var b= Math.floor(a);
  //alert("The converted value is " +b );
  this.view.LabelOutput.text = b.toString();
},
  onclicksqrt: function(){
  var a= this.view.tbxOperations.text;
  var b= Math.sqrt(a);  
  //alert("The square root value is " +b );
  this.view.LabelOutput.text = b.toString();
},
    onclickpow: function(){
  var a= this.view.tbxOperations.text;
  var b= Math.pow(a,2);  
  //alert("The Squared value is " +b );
  this.view.LabelOutput.text = b.toString();
    },
  
 onclickmax: function(){
    var a=this.view.tbxNumber1.text;
    var b=this.view.tbxNumber2.text;
    var c=Math.max(a,b);
     //alert("The maximum value is " +c); 
     this.view.LabelOutput.text = c.toString();
  },
    onclickmin: function(){
    var a=this.view.tbxNumber1.text;
    var b=this.view.tbxNumber2.text;
    var c=Math.min(a,b);
     //alert("The minimum value is " +c); 
     this.view.LabelOutput.text = c.toString();
      
  },
  
  onclickpi: function(){
  var pi= Math.PI;  
  //alert("The pi value is " +pi );
  this.view.LabelOutput.text = pi.toString();
},
  onclickRandom: function(){
    var random= Math.random();
    //alert("The random number is " +random);
    this.view.LabelOutput.text = random.toString();
  }
 
 });