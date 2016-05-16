<script>
"use strict"; 
var arrayOne = [1,2,3]; //creates array
var arrayTwo = []; // creating an empty array
var rotate = arrayOne.length - 2; //getting length of first var
for (var i = rotate; i < arrayOne.length; i++){  //for loop, assigning var i to rotate
	arrayTwo.push(arrayOne[i]);  //The .push adds new elements to the end of an array,returns the new length
	
}
for (i = 0; i < rotate; i++){ //for loop adding to length of new array. "1" writes now too
	arrayTwo.push(arrayOne[i]);
}
for (i = 0; i < arrayTwo.length; i++) { //for loop adds 5 to rotated array
	arrayTwo[i] += 5;
}
document.write(arrayTwo); //writes the array directly to html doc
</script>
<script>
var Github = require('github-api');
var detect = require('language-detect');

var github = new Github({
 token: "8013b4ee8623f34eccb3d5db570b5ba919c00594",
 auth: "oauth"
});


var repo = github.getRepo('nathangruber', 'kodeKiwi');


repo.read('master', 'github/kodeKiwi/rotate.js', function(err, data) {
   console.log(err);
   console.log(data);
});
repo.getTree('master', function(err, tree) {
   console.log(err);
   console.log(tree);
});
detect('master' + 'kodeKiwi/rotate.js', function (err, language) {
  console.log(err);      //=> null
  console.log(language); //=> "JavaScript"
});



</script>
​