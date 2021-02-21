# kata-Count-the-smiley-faces

Description:
-
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

    Valid smiley face examples: :) :D ;-D :~)
    Invalid smiley faces: ;( :> :} :]
   Example:
   -
    countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
    countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
    countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
    
    
    
  Test Cases:
  -
  
    Test.describe("Testing", function() {
      it("Basic tests", _ => {
        Test.assertEquals(countSmileys([]), 0);
        Test.assertEquals(countSmileys([':)', ';(', ';}', ':-D']), 2);
        Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
        Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
        Test.assertEquals(countSmileys([':-)',';~D',':-D',':_D']), 3);
        Test.assertEquals(countSmileys([':---)','))',';~~D',';D']), 1);
        Test.assertEquals(countSmileys([';~)',':)',':-)',':--)']), 3);
        Test.assertEquals(countSmileys([':o)',':--D',';-~)']), 0);
      });
      it("Should work for random tests", _ => {
        function smileOrSad() {
          let t = Math.random() < 0.5;
          return ':;'[Math.round(Math.random())] + (t ? '-~o'[Math.round(Math.random() * 2)] : '') + 'D)>('[Math.round(Math.random() * 3)];
        }
        function getArr() {
          return Array.from(Array(7)).map(a=>smileOrSad());
        }
        function solution(s) {
          return s.map(a=>/^[:;][-~]?[)D]$/.test(a) ? 1 : 0).reduce((a,b)=>a+b,0);
        }
        for(let i = 0; i < 100; i++) {
          let arr = getArr();
          console.log("Testing for: " + arr.join(' , '));
          Test.assertEquals(countSmileys([...arr]), solution(arr));
        }
      });
      console.log("<font size='5'>Great work!</font>");
    });
