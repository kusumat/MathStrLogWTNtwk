kony=voltmx;voltmx.decrement=function(a){if("number"==typeof a){return a-1}else{return a}};voltmx.increment=function(a){if("number"==typeof a){return a+1}else{return a}};voltmx.decrementIndices=function(a){for(var b=[],c=0;c<a.length;c++){b[c]=a[c]-1}return b};voltmx.incrementIndices=function(a){for(var b=[],c=0;c<a.length;c++){b[c]=a[c]+1}return b};voltmx.math={pi:Math.PI,random:function(){return Math.random()},randomSeed:function(a){pseudoRandomArray=[];if(isNaN(a))throw new Error("Invalid argument to math.randomseed");if(!pseudoRandomArray[a]){pseudoRandomArray[a]=Math.random()}return pseudoRandomArray[a]},toInteger:function(a){a-=0;if(isNaN(a)){throw new Error("Invalid argument to math.tointeger")}return Math.floor(a)},pow:function(a,b){a-=0;b-=0;if(isNaN(a)||isNaN(b)){throw new Error("Invalid argument(s) to math.pow")}return Math.pow(a,b)},findExtreme:function(a,b){if(2>b.length){throw new Error((a?"math.max":"math.min")+" needs atleast two arguments")}var c=b[0]-0;if(isNaN(c)){throw new Error("Invalid argument to "+(a?"math.max":"math.min"))}for(var d=1;d<b.length;d++){b[d]-=0;if(isNaN(b[d])){throw new Error("Invalid argument to "+(a?"math.max":"math.min"))}if(a){if(c<b[d]){c=b[d]}}else{if(c>b[d]){c=b[d]}}}return c},min:function(){return voltmx.math.findExtreme(!1,arguments)},max:function(){return voltmx.math.findExtreme(!0,arguments)},sqrt:function(a){a-=0;if(isNaN(a)){throw new Error("Invalid argument to math.sqrt")}var b=Math.sqrt(a);return isNaN(b)?"nan":b}};voltmx.string={find:function(){if(2>arguments.length){throw new Error("string.find needs atleast two arguments")}for(var a=0;2>a;a++){if("number"==typeof arguments[a]){arguments[a]=arguments[a].toString()}else if("string"!=typeof arguments[a]){throw new Error("Invalid argument(s) to string.find")}}var b=0;if(2<arguments.length){b=arguments[2]-0;if(!isNaN(b)){if(0>b){b+=arguments[0].length;if(0>b)b=0}}else{b=0}}var c=arguments[0].indexOf(arguments[1],b-1);if(-1===c){return null}else{return c}},len:function(a){if(0===arguments.length){throw new Error("string.len needs atleast one argument")}if("number"==typeof a){a=a.toString()}else if("string"!=typeof a){throw new Error("Invalid argument to string.len")}return arguments[0].length},compare:function(a,b){if(2>arguments.length){throw new Error("string.compare needs atleast two arguemnts")}if("string"==typeof a&&"string"==typeof b){if(a<b){return-1}else if(a==b){return 0}else{return 1}}else{throw new Error("Invalid argument(s) to string.compare")}},charat:function(a,b){if(2>arguments.length){throw new Error("string.charat needs atleast two arguments")}if("number"==typeof a){a=a.toString()}else if("string"!=typeof a){throw new Error("Invalid argument to string.charat")}b-=0;if(isNaN(b)){throw new Error("Invalid argument to string.charat")}if(0>b||b>=a.length){return null}return a.charAt(b)},flipCase:function(a,b){if(0===a.length){throw new Error(b?"string.upper":"string.lower needs atleast one argument")}if("string"!=typeof a[0]){throw new Error("Invalid argment to "+b?"string.upper":"string.lower")}if(b){return a[0].toUpperCase()}else{return a[0].toLowerCase()}},lower:function(){return voltmx.string.flipCase(arguments,!1)},upper:function(){return voltmx.string.flipCase(arguments,!0)},rep:function(a,b){if(2>arguments.length){throw new Error("Insufficient arguments to string.rep")}if("number"==typeof a){a=a.toString()}else if("string"!=typeof a){throw new Error("Invalid argument to string.rep")}b-=0;if(isNaN(b)){throw new Error("Invalid argument to string.rep")}for(var c="",d=0;d<b;d++){c+=a}return c},reverse:function(a){if(0===arguments.length){throw new Error("string.reverse needs atleast one argument")}if("number"==typeof a){a=a.toString()}else if("string"!=typeof a){throw new Error("Invalid argument to string.reverse")}for(var b="",c=a.length-1;0<=c;c--){b+=a.charAt(c)}return b},trim:function(a){if(0===arguments.length){throw new Error("string.trim needs atleast one argument")}if(a===void 0){return a}else if("string"!=typeof a){return a.toString()}return a.replace(/^\s*/,"").replace(/\s*$/,"")},equalsIgnoreCase:function(a,b){if(2>arguments.length){throw new Error("string.equalsIgnoreCase needs atleast two arguments")}if("string"!=typeof a||"string"!=typeof b){throw new Error("Invalid argument(s) to string.equalsIgnoreCase")}return a.toLowerCase()===b.toLowerCase()},equals:function(a,b){if(2>arguments.length){throw new Error("string.equals needs atleast two arguments")}if("string"!=typeof a||"string"!=typeof b){throw new Error("Invalid argument(s) to string.equals")}return a===b},matchEnds:function(a,b){if(2>a.length){throw new Error(b?"string.endsWith":"string.startsWith needs atleast two arguments")}if("string"!=typeof a[0]||"string"!=typeof a[1]){throw new Error("Invalid argument(s) to "+b?"string.endsWith":"string.startsWith")}if(!(2<a.length&&(!1===a[2]||null===a[2]))){a[0]=a[0].toLowerCase();a[1]=a[1].toLowerCase()}if(b){var c=a[0].lastIndexOf(a[1]);if(0>c){return!1}else{return a[0].lastIndexOf(a[1])===a[0].length-a[1].length}}else{return 0===a[0].indexOf(a[1])}},startsWith:function(){return voltmx.string.matchEnds(arguments,!1)},endsWith:function(){return voltmx.string.matchEnds(arguments,!0)},split:function(a,b){if(0===arguments.length){throw new Error("string.split needs atleast one argument")}if("string"!=typeof a){throw new Error("Invalid argument to string.split")}var c;if(1<arguments.length){if("string"!=typeof b){throw new Error("The optional delimitor for string.split must be a string")}c=b}else{c=","}var d=[];if(""==c){d[1]=a}else{d=a.split(c);d.unshift(null)}return d},sub:function(){function getIndex(a,b){if("string"==typeof a){a-=0}else if("number"!=typeof a){throw new Error("Invalid argument to string.sub")}if(0>a){return a+b-1}else if(a>b){return b}return a}if(2>arguments.length){throw new Error("string.sub needs atleast two arguments")}for(var a=[],b=0;b<arguments.length;b++){a[b]=arguments[b]}if("number"==typeof a[0]){a[0]=a[0].toString()}else if("string"!=typeof a[0]){throw new Error("Invalid argument to string.sub")}var c=getIndex(a[1],a[0].length),d=a[0].length;if(2<a.length){d=getIndex(a[2],a[0].length)}if(d<c||0===c&&d===c){return""}else{return a[0].slice(c,d+1)}},replace:function(a,b,c){if(3>arguments.length){throw new Error("string.replace needs atleast three arguments")}if("string"!=typeof a||"string"!=typeof b||"string"!=typeof c){throw new Error("Invalid argument(s) to string.replace")}var d=new RegExp(voltmx.string.escapeRegExp(b),"g");return""!=a&&""==b?a:a.replace(d,c)},isAsciiAlpha:function(a){if(0===arguments.length){throw new Error("string.isAsciiAlpha needs atleast 1 argument")}if("string"!=typeof a){throw new Error("Invalid argument(s) to string.isAsciiAlpha")}var b=/[^a-zA-Z]/g;return""==a?!1:!b.test(a)},isAsciiAlphaNumeric:function(a){if(0===arguments.length){throw new Error("string.isAsciiAlphaNumeric needs atleast 1 argument")}var b=/[^a-zA-Z0-9]/i,c=/^[a-zA-Z0-9]*$/i,d=a.match(b),e=a.match(c);return!d&&e&&a?!0:!1},isNumeric:function(a){if(0===arguments.length){throw new Error("string.isNumeric needs atleast 1 argument")}return""==a||"string"==typeof a&&0==a.replace(/\s/g,"").length?!1:!isNaN(a)},containsChars:function(b,c){if(0===arguments.length){throw new Error("string.containsChars needs 2 arguments")}if("string"!=typeof b){throw new Error("Invalid argument(s) to string.containsChars")}if(!1==c instanceof Array){throw new Error("Invalid argument to table.containsChars")}for(var a=[],d="",e=c,f=e.length,g=!1,h=0;h<f;h++){a[h]=e[h];if(""==b||""==a[h])return!0}d=a.join("");d="["+voltmx.string.escapeRegExp(d)+"]";var j=new RegExp(d,"g");g=j.test(b);return g},containsOnlyGivenChars:function(b,c){if(0===arguments.length){throw new Error("string.containsOnlyGivenChars needs atleast 1 argument")}if("string"!=typeof b){throw new Error("Invalid argument(s) to string.containsOnlyGivenChars")}for(var a=[],d="",e=c,f=e.length,g=!1,h=0;h<f;h++){a[h]=e[h]}d=a.join("");d="[^"+voltmx.string.escapeRegExp(d)+"]";var j=new RegExp(d,"g");g=j.test(b);if(!1===g){return!0}else{return!1}},containsNoGivenChars:function(b,c){if(0===arguments.length){throw new Error("string.containsNoGivenChars needs 2 arguments")}if("string"!=typeof b){throw new Error("Invalid argument(s) to string.containsNoGivenChars")}if(!1==c instanceof Array){throw new Error("Invalid argument to table.containsNoGivenChars")}for(var a=[],d="",e=c,f=e.length,g=!1,h=0;h<f;h++){a[h]=e[h];if(""==a[h])return!1}d=a.join("");d="["+voltmx.string.escapeRegExp(d)+"]";var j=new RegExp(d,"g");g=j.test(b);if(!1===g){return!0}else{return!1}},isValidEmail:function(a){if(0===arguments.length)throw new Error("string.isValidEmail needs atleast 1 argument");var b=a;if("string"!=typeof b)return!1;var c=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;if(3>b.length-b.lastIndexOf(".")){return!1}return c.test(b)},escapeRegExp:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}};voltmx.table={concat:function(){var a=!1,b=!1,c=null;if(!arguments[0]instanceof Object)a=!0;if(!a){var d=arguments[0].length,e=0,f=d,g="",h=4<arguments.length?4:arguments.length-1;switch(arguments.length){case 4:arguments[3]-=0;if(isNaN(arguments[3])){a=!0}f=arguments[3];case 3:arguments[2]-=0;if(isNaN(arguments[2])||0>arguments[2]){a=!0}e=arguments[2];case 2:g=arguments[1];default:break;}if(0==d)return voltmx.table.returnResult("",a,b);if(a)return voltmx.table.returnResult(c,a,b);if(e>f){return voltmx.table.returnResult("",a,b)}else if(f>d){a=!0}else if(!a){c="";try{for(var j=e;j<f;j++){if(null==arguments[0][j]||arguments[0][j]instanceof Object)return voltmx.table.returnResult(null,!0,b);c+=arguments[0][j].toString()+g}c+=arguments[0][j].toString()}catch(a){b=!0}}}return voltmx.table.returnResult(c,a,b)},insert:function(){var a=!1,b=!1;if(2>arguments.length||!(arguments[0]instanceof Object)){a=!0}if(!a){var c,d;if(2<arguments.length){c=arguments[1];if("string"==typeof c||isNaN(c)){return voltmx.table.returnResult(!0,b)}d=arguments[2]}else{c=arguments[0].length;d=arguments[1]}try{if("string"==typeof c||c>=arguments[0].length||0>=c){if(0==c){arguments[0].splice(c,0,d)}else{arguments[0][c]=d}}else{arguments[0].splice(c,0,d)}}catch(a){b=!0}}return voltmx.table.returnResult(a,b)},remove:function(){var a=!1,b=null;if(0===arguments.length||!(arguments[0]instanceof Array)){a=!0}if(!a){var c=arguments[0].length-1;if(0<=c){if(1<arguments.length&&null!=arguments[1]){arguments[1]-=0;if(isNaN(arguments[1])||arguments[1]>c||0>arguments[1]){a=!0;return voltmx.table.returnResult(b,a,!1)}if(arguments[1]<c&&0<=arguments[1]){c=arguments[1]}}b=arguments[0].splice(c,1);b=b[0]}else return voltmx.table.returnResult(null,a,!1)}return voltmx.table.returnResult(b,a,!1)},sort:function(a){var b=!1,c=!1,d=null;if(0===arguments.length||!(arguments[0]instanceof Array)){b=!0}if("function"==typeof arguments[1]){d=arguments[1]}else if("function"==typeof arguments[2]){d=arguments[2]}if(!b){var e=arguments[0].length,f=arguments[0];if(2>arguments[0].length){return voltmx.table.returnResult(a,!1,!1)}try{for(var g=0,h;g<e;g++){h=typeof arguments[0][1];if(null==arguments[0][g]||typeof arguments[0][g]!=h){return voltmx.table.returnResult(!0,c)}}if(null!==arguments[1]&&!isNaN(arguments[1]))f.splice(arguments[1],f.slice(arguments[1],f.length).length);if(d){f.sort(function(c,a){var b=d(c,a);return b?-1:1})}else if("string"==typeof arguments[1]){d=arguments[1];f.sort(function(c,a){if(null!=c[d]&&typeof c[d]==typeof a[d]&&"string"==typeof c[d]){var b=c[d].toLowerCase(),e=a[d].toLowerCase();if(b<e)return-1;if(b>e)return 1;return 0}else{return c[d]-a[d]}})}else{f.sort(function(c,a){if("string"==typeof c){var b=c.toLowerCase(),d=a.toLowerCase();if(b<d){return-1}else if(b>d){return 1}else{return 0}}else return c-a})}}catch(a){c=!0;f=null}}if(!b&&!c)return voltmx.table.returnResult(f,b,c);else return voltmx.table.returnResult(!0,c)},filter:function(a,b){var c=!1,d=!1,e;if(2>arguments.length||!(a instanceof Object)||!("function"==typeof b)){c=!0}if(!c){var f,g,h;if(a instanceof Array&&b){try{e=[];for(var k=0;k<a.length;k++){g=a[k];if(g instanceof Object){return voltmx.table.returnResult(null,!0,d)}else{if(null!=g)h=b(k,g);if(!0===h)e.push(g);h=!1}}}catch(a){c=!0}}else if(a&&b){e={};try{for(var l in a){f=l;g=a[l];if(null!=g)h=b(l,g);if(!0===h){e[f]=g}h=!1}}catch(a){c=!0}}}if(c||d)e=null;return voltmx.table.returnResult(e,c,d)},map:function(a,b){var c=!1,d=!1;if(2>arguments.length||!1==a instanceof Object||!("function"==typeof b)){c=!0}if(!c){try{var e,f,g;if(a instanceof Array&&b){for(var h=a.length,k=0;k<h;k++){if(a[k]instanceof Array||null==a[k]){return voltmx.table.returnResult(!0,d)}}try{for(var k=0;k<h;k++){f=a[k];g=b(k,f);if(!1!==g){e=g[0];f=g[1];a[e]=f;g=!1}else return voltmx.table.returnResult(!0,d)}}catch(a){c=!0}}else if(a&&b){try{for(var l in a){e=l;f=a[e];g=b(e,f);if(!1!==g){e=g[0];f=g[1];a[e]=f;g=!1}else return voltmx.table.returnResult(!0,d)}}catch(a){c=!0}}}catch(a){d=!0}}return voltmx.table.returnResult(a,c,d)},mapNew:function(a,b){var c=!1,d=!1;if(2>arguments.length||!1==a instanceof Object||!("function"==typeof b)){c=!0}if(null==a)return voltmx.table.returnResult(null,c,d);try{var e=null,f,g,h;if(!c){if(a instanceof Array&&b){for(var k=a.length,l=0;l<k;l++){if(a[l]instanceof Object||null==a[l]){return voltmx.table.returnResult(null,!0,d)}}try{e=[];for(var l=0;l<k;l++){g=a[l];h=b(l,g);f=h[0];g=h[1];e[f]=g}}catch(a){c=!0}}else if(a&&b){try{e={};for(var m in a){f=m;g=a[f];h=b(f,g);if(!1!==h){f=h[0];g=h[1];e[f]=g;h=!1}else return voltmx.table.returnResult(!0,d)}}catch(a){c=!0}}}}catch(a){d=!0}if(c||d)e=null;return voltmx.table.returnResult(e,c,d)},get:function(a,b){var c=!1,d=!1,e=!1,f=null;if(2>arguments.length||!1==a instanceof Object||null==b){c=!0;return voltmx.table.returnResult(f,c,d)}try{if(b in a){f=a[b]}else e=!0}catch(a){d=!0}return voltmx.table.returnResult(f,c,d,e)},contains:function(a,b){var c=!1,d=!1;if(2>arguments.length||!1==a instanceof Object||null==b){return voltmx.table.returnResult(d,!0,c)}try{if(b in a)d=!0}catch(a){c=!0}return voltmx.table.returnResult(d,!1,c)},append:function(a,b){var c=!1,d=!1;if(2!=arguments.length||!(a instanceof Object)||!(b instanceof Object)){c=!0;return voltmx.table.returnResult(null,c,d)}try{if(a.length&&b.length){for(var e=0;e<b.length;e++){a.push(b[e])}}else{for(var f in b){a[f]=b[f]}}}catch(a){d=!0}return voltmx.table.returnResult(a,c,d)},removeAll:function(a){if(1>arguments.length){throw new Error("table.removeAll needs atleast 1 argument")}if("object"!=typeof a){throw new Error("Invalid  arguments to table.removeAll")}if(a.length)a.length=0;else{for(var b in a){delete a[b]}}},unpack:function(a){if(0===arguments.length){throw new Error("unpack needs atleast one argument")}if(!1==a instanceof Object){throw new Error("Invalid first argument to unpack")}var b=3<arguments.length?3:arguments.length,c=arguments[0].length,d=0,e=c;switch(b){case 3:arguments[2]-=0;if(isNaN(arguments[2])){throw new Error("Invalid argument to unpack")}e=arguments[2];case 2:arguments[1]-=0;if(isNaN(arguments[1])){throw new Error("Invalid argument to unpack")}d=arguments[1];default:break;}if(d>e){return[""]}else{for(var f="",g=d;g<e;g++){if(0==g){f=arguments[0][g]}else{f=f+" "+arguments[0][g]}}return f}},returnResult:function(){var a=null,b=null,c=!1,d=!1;if(3<=arguments.length){var e=arguments[0];c=arguments[1];d=arguments[2];var f=arguments[3]}else{c=arguments[0];d=arguments[1]}if(c){a=100;b="INVALID ARGUMENTS"}else if(d){a=101;b="INTERNAL ERROR"}else if(f){a=0;b="INVALID KEY"}if(3<=arguments.length)return e;else if(2==arguments.length&&(c||d))return[a,b];else return}};voltmx.os.time=function(){var a=new Date().toTimeString();return a.slice(0,a.indexOf(" "))};voltmx.os.diffDateTime=function(a,b){if("string"!=typeof a||"string"!=typeof b){throw new Error("Invalid argument(s) to os.diffDateTime")}var c=a.split(":");c[2]=c[2]-0;var d=b.split(":");d[2]=d[2]-0;var e=3600*c[0]+60*c[1]+c[2],f=3600*d[0]+60*d[1]+d[2];return e>86400||f>86400?null:e-f};voltmx.os.date=function(){var a,b=new Date;if(0===arguments.length){var c=b.toTimeString();a=voltmx.os.padZero(b.getMonth()+1)+"/"+voltmx.os.padZero(b.getDate())+"/"+voltmx.os.padZero(b.getFullYear()%100)+" "+c.slice(0,c.indexOf(" "));return a}else if("string"==typeof arguments[0]){if(-1!=arguments[0].toLowerCase().indexOf("dd")){return voltmx.os.formatdate(arguments[0],b)}else{var d="!"===arguments[0].charAt(0),e=d?1:0;if("*"===arguments[0].charAt(e)&&"t"===arguments[0].charAt(e+1)){var f=d?b.getUTCDate():b.getDate(),g=(d?b.getUTCMonth():b.getMonth())+1,h=d?b.getUTCFullYear():b.getFullYear();a={};a.year=h;a.month=g;a.day=f;a.hour=d?b.getUTCHours():b.getHours();a.min=d?b.getUTCMinutes():b.getMinutes();a.sec=d?b.getUTCSeconds():b.getSeconds();a.wday=d?b.getUTCDay():b.getDay()+1;a.yday=voltmx.os.getDayOfYear(f,g,h);a.isdst=d?!1:voltmx.os.checkForDst();return a}else return null}}else return null};voltmx.os.toCurrency=function(a){a-=0;if(isNaN(a)){throw new Error("Invalid argument to os.toCurrency")}if(0>a)a*=-1;var b=a.toFixed(3);b=b.substr(0,b.length-1);for(var c="",d=0;d<b.length-4;d++){c+=b.charAt(d);if(0==(b.length-d-1)%3)c+=","}for(;d<b.length;d++){c+=b.charAt(d)}return"$"+c};voltmx.os.toNumber=function(a){if(1!=arguments.length){throw new Error("Invalid argument to os.toNumber")}if("number"==typeof a){return a}else if("string"==typeof a){var b=a.replace(/^\s*/,"").replace(/\s*$/,"");if(""===b){return null}else{var c=b-0;return isNaN(c)?null:c}}else{return null}};voltmx.os.compareDates=function(a,b,c){if(null==a||null==b||null==c||!voltmx.os.isvaliddate(a,c)||!voltmx.os.isvaliddate(b,c))return null;var d=voltmx.os.getDate(a,c),e=voltmx.os.getDate(b,c);return parseInt((d.getTime()-e.getTime())/86400000)};voltmx.os.addToDate=function(a,b,c,d){if(null==a||null==b||null==c||null==d){return null}var e=a,f=b,g=c,h=d,i=e.split("/");if(!voltmx.os.isvaliddate(e,f))return null;var j=voltmx.os.getDate(e,f);if(j){switch(g){case"years":j.setFullYear(j.getFullYear()+h);break;case"months":j.setMonth(j.getMonth()+h);break;case"days":j.setDate(j.getDate()+h);break;case"hours":j.setHours(j.getHours()+h);break;case"minutes":j.setMinutes(j.getMinutes()+h);break;default:break;}if(voltmx.os.isLeapYear([a,f])&&1<=j.getMonth()&&("years"==g||"months"==g&&(-12==h||12==h)))j.setDate(j.getDategetDate()-1);return voltmx.os.formatdate(f,j)}return null};voltmx.os.isLeapYear=function(a,b){var c,d=new Date;c=d.getFullYear();if("string"==typeof a&&"string"==typeof b){if(!voltmx.os.isvaliddate(a,b))return!1;var e=a.split("/")[2];c=2==e.length?parseInt(d.getFullYear().toString().substr(0,2)+e):parseInt(e)}if(0==c%400||0==c%4&&0!=c%100){return!0}else{return!1}};voltmx.os.formatDate=function(a,b,c){if(null==a||null==b||null==c){return null}else if("string"==typeof a&&"string"==typeof b&&"string"==typeof c){var d=a,e=b,f=c,g=e.indexOf("dd"),h=e.indexOf("mm"),i=-1!=e.indexOf("yyyy")?e.indexOf("yyyy"):e.indexOf("yy");if("dd/mm/yyyy"==e&&!voltmx.os.isvaliddate(d,e)||-1==g||-1==h||-1==i||-1!=e.indexOf("ddd")||-1!=e.indexOf("mmm")){return null}var j=e.charAt(g-1),k=e.charAt(g+2);k="("==k?"":k;var l=e.charAt(h-1),m=e.charAt(h+2),n=e.charAt(i-1),o=e.charAt(i+4),p=""==j?d.indexOf(j,g-1):d.indexOf(j,g-2)+1,q=""==l?d.indexOf(l,h-1):d.indexOf(l,h-2)+1,r=""==n?d.indexOf(n,i-1):-1!=d.indexOf(n,i-2)?d.indexOf(n,i-2)+1:d.indexOf(n,i-4)+1,s=""!=k?d.indexOf(k,g):d.indexOf(k,g+2),t=""!=m?d.indexOf(m,h):d.indexOf(m,h+2),u=""!=o?d.indexOf(o,i):d.indexOf(o,i+4),v=d.substring(p,s),w=d.substring(q,t),x=d.substring(r,u);if(2==x.length&&-1!=f.indexOf("yyyy"))var y=new Date().getFullYear().toString().substr(0,2)+x;f=f.replace(/dd/,voltmx.os.padZero(parseInt(v,10)));f=f.replace(/mm/,voltmx.os.padZero(parseInt(w,10)));f=f.replace(/(yyyy|yy)/,y?y:-1==f.indexOf("yyyy")&&4==x.length?x.substr(2,2):x);return f}return null};voltmx.os.isValidDate=function(a,b){return 2!=arguments.length||null==a||null==b?!1:voltmx.os.isvaliddate(a,b)};voltmx.os.dateComponents=function(a,b){var c,d;if(0==arguments.length){d=new Date}else if(null!=a&&null!=b){if(!voltmx.os.isvaliddate(a,b))return null;d=voltmx.os.getDate(a,b);var e=b.split("/")[2]}if(d){var f=d.getDate(),g=d.getMonth()+1,h=e&&2==e.length?parseInt(d.getFullYear().toString().substr(2,2)):d.getFullYear();c={};c.year=h;c.month=g;c.day=f;c.hour=d.getHours();c.min=d.getMinutes();c.sec=d.getSeconds();c.wday=d.getDay()+1;c.yday=voltmx.os.getDayOfYear(f,g,h);c.isdst=voltmx.os.checkForDst();return c}else return null};voltmx.os.padZero=function(a){return 10>a?"0"+a:a};voltmx.os.formatdate=function(a,b){a=a.toLowerCase();a=a.replace(/dd/,voltmx.os.padZero(b.getDate()));a=a.replace(/mm/,voltmx.os.padZero(b.getMonth()+1));return a.replace(/(yyyy|yy)/,-1==a.indexOf("yyyy")?b.getFullYear().toString().substr(2,2):b.getFullYear())};voltmx.os.isvaliddate=function(a,b){var c="/",d=voltmx.os.daysArray(12),e=a.indexOf(c),f=a.indexOf(c,e+1),g=b||"dd/mm/yyyy";if("dd/mm/yyyy"==g||"dd/mm/yy"==g){var h=a.substring(0,e),j=a.substring(e+1,f)}else if("mm/dd/yy"==g||"mm/dd/yyyy"==g){var h=a.substring(e+1,f),j=a.substring(0,e)}else return!1;var k=a.substring(f+1),l=new Date;strYr=k;if("0"==h.charAt(0)&&1<h.length)h=h.substring(1);if("0"==j.charAt(0)&&1<j.length)j=j.substring(1);if(2==strYr.length){strYr=(l.getFullYear()+"").substr(0,2)+strYr}for(var m=1;3>=m;m++){if("0"==strYr.charAt(0)&&1<strYr.length)strYr=strYr.substring(1)}month=parseInt(j);day=parseInt(h);year=parseInt(strYr);if(!voltmx.os.isInteger(j)||!voltmx.os.isInteger(h)||!voltmx.os.isInteger(k)||1>j.length||1>month||12<month||1>h.length||1>day||31<day||2==month&&day>voltmx.os.daysInFebruary(year)||day>d[month]||4!=strYr.length||0==year||year<1900||year>2100){return!1}return!0};voltmx.os.daysArray=function(a){for(var b=1;b<=a;b++){this[b]=31;if(4==b||6==b||9==b||11==b){this[b]=30}if(2==b){this[b]=29}}return this};voltmx.os.daysInFebruary=function(a){return 0==a%4&&(!(0==a%100)||0==a%400)?29:28};voltmx.os.isInteger=function(a){var b;for(b=0;b<a.length;b++){var d=a.charAt(b);if("0">d||"9"<d)return!1}return!0};voltmx.os.getDate=function(a,b){var c;if("string"==typeof a&&"string"==typeof b){var d=a.split("/"),e=new Date().getFullYear().toString().substr(0,2);if(-1==b.indexOf("yyyy")||2==d[2].length)d[2]=e+d[2];if("mm/dd/yyyy"==b||"mm/dd/yy"==b)c=new Date(d[0]+"/"+d[1]+"/"+d[2]);else c=new Date(d[1]+"/"+d[0]+"/"+d[2]);return c}};voltmx.os.getDayOfYear=function(a,b,c){var d,e,f=[31,28,31,30,31,30,31,31,30,31,30,31];if(0==c%4){f[1]++}for(d=1,e=0;d<b;e+=f[d-1],d++){}return e+a};voltmx.os.checkForDst=function(){var a=new Date,b=new Date(a.getFullYear(),0,1,0,0,0,0),c=b.toGMTString(),d=new Date(c.substring(0,c.lastIndexOf(" ")-1)),e=new Date(a.getFullYear(),6,1,0,0,0,0);c=e.toGMTString();var f=new Date(c.substring(0,c.lastIndexOf(" ")-1));if((b-d)/3600000==(e-f)/3600000){return!1}else{return!0}};