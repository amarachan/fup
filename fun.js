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

  return (teaCup);
};

// Only change code below this line
const tea4GreenTeamFCC = gettingTea(preparegreenTea,27);
console.log(tea4GreenTeamFCC)
const tea4BlackTeamFCC = gettingTea(prepareBlackTea,13);
console.log(tea4BlackTeamFCC)
// Only change code above this line

const array = ["testing",1,2,3,4,5,6,7,8,9];
console.log(array.slice(2));
console.log(array)


// understand the hazards of using Imperative code

// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  // Only change code below this line

  var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);


