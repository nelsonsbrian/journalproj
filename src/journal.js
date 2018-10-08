export function getTeaser(body) {
  var output = "";
  var bodyarray = body.split(" ");
  for (var i = 0; i < 8; i++) {
    output += bodyarray[i] + " ";
  }
  return output;
}

export function getVowelsCount(text) {
  var vowels = ["a", "o", "u", "i", "e"];
  var count = 0;
  for(var i = 0; i < text.length - 1; i++) {
    if(vowels.includes(text[i])) {
      count ++;
    }
  }
  return count;
}

export function getConsonantsCount(text) {
  var vowels = ["a", "o", "u", "i", "e"];
  var count = 0;
  for(var i = 0; i < text.length - 1; i++) {
    if(!vowels.includes(text[i]) && text[i] !== " " && text[i] !== ".") {
      count ++;
    }
  }
  return count;
}