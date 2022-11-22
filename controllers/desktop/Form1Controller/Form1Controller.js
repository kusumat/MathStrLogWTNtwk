define({ 

 //Type your controller code here 
  
  containsChars: function()
  {
    var inputstring = this.view.tbxInputString.text;
  var charsArr = [this.view.tbxcharacterarray.text];
    
   if(kony.string.containsChars(inputstring, charsArr) === true)
     {
       //alert("The input string contains the characters");
       this.view.LabelOutput.text = "The input string contains the characters";
     }
    else
      {
        //alert("The input string does not contain the characters");
        this.view.LabelOutput.text = "The input string does not contain the characters";
      }
  },
  
  contiansOnlyGivenChars: function()
  {
     var inputstring = this.view.tbxInputString.text;
  var charsArr = [this.view.tbxcharacterarray.text];
    if(kony.string.containsOnlyGivenChars(inputstring, charsArr) === true)
     {
       //alert("The input string contains only the characters specified");
       this.view.LabelOutput.text = "The input string contains only the characters specified";
     }
    else
      {
        //alert("The input string contains other characters as well");
        this.view.LabelOutput.text = "The input string contains other characters as well";
      }
    
  },
  
  containsNoGivenChars: function()
  {
     var inputstring = this.view.tbxInputString.text;
     var charsArr = [this.view.tbxcharacterarray.text];
    if(kony.string.containsNoGivenChars (inputstring, charsArr) === true)
     {
       //alert("The input string contains none of the characters specified");
       this.view.LabelOutput.text = "The input string contains none of the characters specified";
     }
    else
      {
        //alert("The input string contains the character specified");
        this.view.LabelOutput.text = "The input string contains the character specified";
      }
  },
  
  endsWith: function()
  {
    var sourcestring = this.view.tbxInputString.text;
     var comparestring = this.view.tbxcharacterarray.text;
    if(kony.string.endsWith(sourcestring, comparestring) === true)
     {
       //alert("The input string ends with the string specified");
       this.view.LabelOutput.text = "The input string ends with the string specified";
      }
    else
      {
        //alert("The input string does not end with the string specified");
        this.view.LabelOutput.text = "The input string does not end with the string specified";
      }
  },
  
  equalsIgnoreCase: function()
  {
     var string1 = this.view.tbxInputString.text;
     var string2 = this.view.tbxcharacterarray.text;
    if(kony.string.equalsIgnoreCase(string1, string2) === true)
     {
       //alert("The two strings are same");
       this.view.LabelOutput.text = "The two strings are same";
     }
    else
      {
        //alert("The two strings are different");
        this.view.LabelOutput.text = "The two strings are different";
      }
  },
  
  startsWith: function()
  {
    var sourcestring = this.view.tbxInputString.text;
     var comparestring = this.view.tbxcharacterarray.text;
    if(kony.string.startsWith(sourcestring, comparestring) === true)
     {
       //alert("The input string starts with the string specified");
       this.view.LabelOutput.text = "The input string starts with the string specified";
     }
    else
      {
        //alert("The input string does not start with the string specified");
        this.view.LabelOutput.text = "The input string does not start with the string specified";
      }
  }, 
    
  
 

 });