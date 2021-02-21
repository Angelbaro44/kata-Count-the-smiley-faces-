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