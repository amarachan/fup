const prepareTea = ()=>'greentea';

const getTea = (numOfCups)=>{
    const teaCups =[];
    for(let cups = 0;cups<numOfCups;cups++){
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return console.log(teaCups,numOfCups,":rocket:");
}

getTea(40);


// Function that returns a string representing a cup of green tea
const preparegreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const gettingTea = (prepareingTea, numCups) => {
  const teaCup = [];

  for(let ncups = 0; ncups < numCups; ncups++) {
    const diffTeaCups = prepareingTea();
    teaCup.push(diffTeaCups);
  }

  return teaCup;
};

// Only change code below this line
const tea4GreenTeamFCC = gettingTea(preparegreenTea,27);
console.log(tea4GreenTeamFCC)
const tea4BlackTeamFCC = gettingTea(prepareBlackTea,13);
console.log(tea4BlackTeamFCC)
// Only change code above this line