function highlightCode(node, keywords) { // creates function highlightCode
  var text = node.textContent;  // creates var text
  node.textContent = ""; // Clear the node

  var match, pos = 0; // sets var match to  pos gets 0 
  while (match = keywords.exec(text)) { // looks for a match from the keywords
    var before = text.slice(pos, match.index); // before is looking for text that matches index
    node.appendChild(document.createTextNode(before)); // adds a node to the children under parent before
    var strong = document.createElement("strong");// sets var strong to get document.createElement("Strong")
    strong.appendChild(document.createTextNode(match[0])); // trys to match node to document
    node.appendChild(strong);// adds a node to the end of the list of children under  parent strong
    pos = keywords.lastIndex; // identifies where to start the next match
  }
  var after = text.slice(pos); // var after slices the text where it last left off
  node.appendChild(document.createTextNode(after)); // adds a node to the end of the list of children under parent after
}

