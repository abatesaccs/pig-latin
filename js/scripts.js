
var piglatin = function(string){
  // var regex = /[a-z]/ig;
  // var tester = string.match(regex);
  var final = [];
  var words = string.split(" ");
  var qUArray = ['q','Q','u','U']
  var vowels = ['a','A','e','E','o','O','i','I','u','U','y','Y'];
  console.log(words);
  for(var i = 0; i < words.length; i++){
    var tempString = words[i];
    var tempArray = tempString.split('');
    var arrayLength = tempArray.length;
    var done = false;

    for(var j = 0; j < arrayLength; j++){
        var cons = false;
          for(var k = 0; k < vowels.length; k++){
            if (!done){
              console.log(vowels.length);
              if(tempArray[j] === vowels[k]){
                if(j === 0 && !(k === 10 || k === 11)){
                  tempArray.push("way");
                  var vowelWord = tempArray.join('');
                  final.push(vowelWord);
                  done = true;
                } else if (j === 0 && (k === 10 || k === 11)){
                  if (k === 10){
                    k++;
                  }
                } else {
                  tempArray.splice(0, j);
                  tempArray.push("ay");
                  var consonantWord = tempArray.join('');
                  console.log(consonantWord);
                  final.push(consonantWord);
                  done = true;
                }
              }
              if (k === 11){
              cons = true;
              }
            }
          }
      if (cons === true){
        // if (tempArray[j] === qUArray[0] || qUArray[1]) {
        //   if (tempArray[j+1] === qUArray[1] || qUArray[2]) {
        //     tempArray.push(tempArray[j]);
        //     tempArray.push(tempArray[j+1]);
        //     j++;
        //     cons = false;
        //   } else {
        //     tempArray.push(tempArray[j]);
        //     cons = false;
        //   }
        // } else if (tempArray[j] != "q"||"Q") {
          tempArray.push(tempArray[j]);
          cons = false;
        }
      }
    }
    console.log(final);
}



$(document).ready(function() {
  $("form#input-string").submit(function(event) {
    event.preventDefault();
    var string = $("input#inputString").val();
    var result = piglatin(string);



    $("#result").show();
  });
});
