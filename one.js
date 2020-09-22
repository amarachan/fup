// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /a*/; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line
// // console.log(result,result.length);
// let consantsRegex = /[a-z]/;
// console.log(result);

// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// let soc = soccerWord.match(goRegex); // Returns ["goooooooo"]
// let gph = gPhrase.match(goRegex); // Returns ["g"]
// let oph = oPhrase.match(goRegex); // Returns null
// console.log(soc,gph,oph);


// let users = {
//     Alan: {
//       age: 27,
//       online: true
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: true
//     },
//     Ryans: {
//       age: 19,
//       online: true
//     }
//   };
//   console.log(users.Sarah);
  
//   function isEveryoneHere(obj) {
//     // Only change code below this line
//     return ('Alan' in users ===true) ? true: false;
  
//     // Only change code above this line
//   }
  
//   console.log(isEveryoneHere(users));
//   let nuserOn=0;
//   for(let user in users){
//    if(users[user].online===true){
//     nuserOn++;
//    }
//   }
//   return console.log(nuserOn);





  


  // let user = {
  //   name: 'Kenneth',
  //   age: 28,
  //   data: {
  //     username: 'kennethCodesAllDay',
  //     joinDate: 'March 26, 2016',
  //     organization: 'freeCodeCamp',
  //     friends: [
  //       'Sam',
  //       'Kira',
  //       'Tomo'
  //     ],
  //     location: {
  //       city: 'San Francisco',
  //       state: 'CA',
  //       country: 'USA'
  //     }
  //   }
  // };
  
  // function addFriend(userObj, friend) {
  //   // Only change code below this line
  //   userObj.data.friends.push(friend);
  //   return userObj.data.friends;
  //   // Only change code above this line
  // }
  
  // console.log(addFriend(user, 'Pete'));
  
  let doge = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function(){return console.log("This dog has "+ this.numLegs +" legs.")} 
  };
  
  doge.sayLegs();

  // function Bird(){
  //   this.name = "Garuda";
  //   this.color = "multicolor";
  //   this.numLegs= 2;
  // }
  // OR
  class Bird {
    constructor() {
      this.name = "Garuda";
      this.color = "multicolor";
      this.numLegs = 2;
    }
  }
  let arr = ["arr","adfa","ff"];
  arr[100]=3;
  console.log(arr.length)


  function Build(name, color){
    this.name =name;
    this.color = color;
  
  }
  Build.prototype.numLogs = 1;



  let buildStatus = new Build();
  let oldBuildStatus = new Build();
  buildStatus.name = "version 1.1";
  console.log(buildStatus.name, "testing");
  let ownProp =[];
  let prototypeProp =[];

for(let property in buildStatus){
  if(buildStatus.hasOwnProperty(property)){
    ownProp.push(property);
  }else{
    prototypeProp.push(property);
  }
}

console.log(ownProp,prototypeProp)

