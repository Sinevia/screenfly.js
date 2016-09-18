Screenfly.js
=========
Screenfly.js is a small utility class. It applies styles on the fly to DOM elements depending on the browser screen size.

Screenfly.js uses CSS selectors supported by JQuery. It is extemely accurate.

# Dependencies
JQuery

# Usage instructions
Add JQuery to the webpage and screenfly.js. Then place the following snippet anywhere on the webpage (header, body), once per page, or multiple times as best suits your development.

$(document).ready(function(){
  screenfly({
    "h1" : {"font-size":{0:22,100:24,200:36,300:48,500:72,700:82}
    "#logo" : {"width":{0:"100px",100:"110px",200:"120px",300:"130px",500:"140px",700:"150px"}
  });
});
