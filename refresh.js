// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Only change code below this line
  // for(let i = 0; i<this.length;i++){
  //   newArray.push(callback(this[i]));

  // }
  this.forEach(function(eachNum){
    return newArray.push(callback(eachNum))
  })
  // Only change code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
console.log(new_s)


var x = 0;
for(;x<=20;x+=2){
    console.log(x)
}
var v=0;
while (v<=5) {
  console.log(v)
}
