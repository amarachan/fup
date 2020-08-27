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