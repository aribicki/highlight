var languages = { // creates var languages
  javascript: /\b(function|return|var|new|public)\b/g,
  java:/\b(new|if|int|for|private)\b/g/* ... etc */ //looking for the following
};
function highlightAllCode() { // creates function highlightAllCode()
  var pres = document.body.getElementsByTagName("pre"); //sets var pres = document.body etc
  for (var i = 0; i < pres.length; i++) { // keeps track of lenth of pres
    var pre = pres[i]; // sets index
    var lang = pre.getAttribute("data-language"); // gets the language that is set with 
    var lang = pre.getAttribute("data-language");
    if (languages.hasOwnProperty(lang)) // if language is set to other use that 
      highlightCode(pre, languages[lang]); 
  }
}
