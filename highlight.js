function highlightAllCode() { // creates function highlightAllCode()
  var pres = document.body.getElementsByTagName("pre"); //sets var pres = document.body etc
  for (var i = 0; i < pres.length; i++) { // keeps track of lenth of pres
    var pre = pres[i]; // sets index
    var lang = pre.getAttribute("data-language"); // gets the language that is set with 
    if (languages.hasOwnProperty(lang)) // if language is set to other use that 
      highlightCode(pre, languages[lang]); 
  }
}
