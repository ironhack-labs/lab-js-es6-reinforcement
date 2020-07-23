
// Iteration 1 
const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName)
  }
    return userFirstNames
};
getFirstNames(usersArray);

// Iteration 2 
const getFullNames = arr => {
  const userfullNames = [];
for(let user of arr) {
  userfullNames.push(`${user.firstName} ${user.lastName}`)
}
return userfullNames
};
getFullNames(usersArray);

// Iteration 3 
const getUsersCreditDetails = arr => {
  const usersCreditDetails = [];
  for(let {firstName, lastName, balance} of arr){
    const userDetails = {
      firstName,
      lastName,
      balance
    }
    usersCreditDetails.push(userDetails)
  }
  return usersCreditDetails
};	
getUsersCreditDetails(usersArray);

// Iteration 4 
const genderView = users => {
  const femaleUsers = users.filter((user) => user.gender === "female");
  const maleUsers = users.filter((user) => user.gender === "male");
  return femaleUsers;
};
genderView(usersArray);


// Bonus - Iteration 5


// Bonus - Iteration 6

// Bonus - Iteration 7
