// Let’s build a simple points distribution program. We have 300 points to distribute randomly among 150 users. Complete the distributePoints function below to distribute these points with the following constraints:
// I. All 150 users must have at least 0.1 points.
// II. No user should have more than 10 points.
// III. The entire 300 points must be shared at the end of the distribution.
// IV. You are allowed an error margin of only ±2 on the total distributed points. That means, at the end of the distribution, the total distributed can be >=298 or <=302.
// *

async function distributePoints() {
  const maxDistributed = 300;
  const numOfUsers = 150;
  
  let totalDistributed = 0;
  // const distributedList: { userIndex: number, points: number }[] = []
  const distributedList = [];

  // distribute the least points to every user first
  for(let userIndex = 1; userIndex <= numOfUsers; userIndex++){
    const points = 0.1;
    distributedList.push({userIndex, points})
    totalDistributed += points;
  }

  // distribute the remaining points 
  let remainingPoints = maxDistributed - totalDistributed;
  while(remainingPoints != 0){
    // get users at random
    const userIndex = Math.floor(Math.random() * numOfUsers)
    // get random point
    let points = Math.floor(Math.random() * 9.9);

    while((points + totalDistributed) > 300){
      points = Math.floor(Math.random() * 9.9);
    }
    if((distributedList[userIndex].points + points) > 10){
      continue; 
    } else {
      distributedList[userIndex].points += points;
    }

    if((totalDistributed + points) >= 300){
      totalDistributed += points;
      break;
    }
    totalDistributed += points;
  }

  return { totalDistributed, distributedList };
}

distributePoints()
  .then((res) => {
    console.log(`Total Distributed: ${res.totalDistributed}`);
    res.distributedList.forEach((item) => {
      console.log(`User ${item.userIndex} received => ${item.points} points`);
    });
  })
  .catch((error) => console.error("Error occurred:", error.message));

// Please do not spend so much time on this exercise. You may submit your answer even if
// all the above constraints were not achieved. Your approach and coding style will be considered.
