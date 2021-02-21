// This solution iterates thru the given arr 
// then compares it to our approved smilies.
// If there is a match then the counter gets bumped up and returned!

function countSmileys(arr) {
var faceArr = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
var counter = 0;

for (var i=0; i<arr.length; i++){
  for (var j=0; j<faceArr.length; j++){
    if (arr[i]===faceArr[j]){
      counter++;
    }
  }
  }
return counter;
}


// Test Cases
console.log(countSmileys([])) // Expected Answer: 0
console.log(countSmileys([':)', ';(', ';}', ':-D'])) // Expected Answer: 2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) // Expected Answer: 1
console.log(countSmileys([':)',':(',':D',':O',':;'])) // Expected Answer: 2
console.log(countSmileys([':-)',';~D',':-D',':_D'])) // Expected Answer: 3
console.log(countSmileys([':---)','))',';~~D',';D'])) // Expected Answer: 1
console.log(countSmileys([';~)',':)',':-)',':--)'])) // Expected Answer: 3
console.log(countSmileys([':o)',':--D',';-~)'])) // Expected Answer: 0