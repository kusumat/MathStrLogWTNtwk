define({ 

isAsciiAlpha: function()
  {
  var inputstring = this.view.tbxInputString.text;
  if(kony.string.isAsciiAlpha(inputstring)===true)  
    {
      //alert("The string contains ASCII alphabets");
      this.view.LabelOutput.text = "The string contains ASCII alphabets";
    }
    else
     //alert("The string is not made up of just ASCII characters");
      this.view.LabelOutput.text = "The string is not made up of just ASCII characters";
},
  
  isAsciiAlphaNumeric: function()
  {
  var inputstring = this.view.tbxInputString.text;
  if(kony.string.isAsciiAlphaNumeric(inputstring)===true)  
    {
      //alert("The string contains combination of ASCII alphabets and numerics");
      this.view.LabelOutput.text = "The string contains combination of ASCII alphabets and numerics";
    }
    else
      //alert("The string is not made up of combinations of ASCII alphabets and numerics");
      this.view.LabelOutput.text = "The string is not made up of combinations of ASCII alphabets and numerics";
},
  
   isNumeric: function()
  {
  var inputstring = this.view.tbxInputString.text;
  if(kony.string.isNumeric(inputstring)===true)  
    {
      //alert("The string contains only numerics");
      this.view.LabelOutput.text = "The string contains only numerics";
    }
    else
      //alert("The string is not made of numeric charaters");
      this.view.LabelOutput.text = "The string is not made of numeric charaters";
},
  
  isValidEmail: function()
  {
  var inputstring = this.view.tbxInputString.text;
  if(kony.string.isValidEmail(inputstring)===true)  
    {
      //alert("The Email ID is valid ");
      this.view.LabelOutput.text = "The Email ID is valid ";
    }
    else
      //alert("The Email ID is invalid");
      this.view.LabelOutput.text = "The Email ID is invalid";
},
  
  rep: function()
  {
    var sourcestring = this.view.tbxInputString.text;
    //alert("The string is concatenated as a chain " + kony.string.rep(sourcestring, 5));
    this.view.LabelOutput.text = kony.string.rep(sourcestring, 5);
  },
  
  reverse: function(){
   var sourcestring = this.view.tbxInputString.text;
    //alert("The input string is reversed "+kony.string.reverse(sourcestring));
    this.view.LabelOutput.text = kony.string.reverse(sourcestring);
  },
  
    trim: function(){
   var sourcestring = this.view.tbxInputString.text;
    //alert("The input string is trimmmed "+kony.string.trim(sourcestring));
    this.view.LabelOutput.text = kony.string.trim(sourcestring);
  }
  
  
  
  
  
  
  

 });