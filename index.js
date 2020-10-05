// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName)
  }
  return userFirstNames
};

console.log(getFirstNames(usersArray));

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  const userFullNames = [];
  for (let user of arr) {
    userFullNames.push(`${user.firstName} ${user.lastName}`)
  }
  return userFullNames
};

console.log(getFullNames(usersArray));


// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  const usersCreditDetails = [];
for (let user of arr){
  let {firstName} = arr;
  let {lastName} = arr;
  let {balance} = arr;
  const userDetails = {
    firstName: user.firstName,
    lastName: user.lastName,
    balance: user.balance
  };

  usersCreditDetails.push(userDetails)

}
return usersCreditDetails
};

console.log(getUsersCreditDetails(usersArray));


// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = users => {
  const femaleUsers = [];
  const maleUsers = [];
  let genderCheck = usersArray.filter((user) => {
     if(user.gender === 'female'){
       femaleUsers.push(`${user.firstName} ${user.lastName}`)
     } else{
       maleUsers.push(`${user.firstName} ${user.lastName}`)
     }
  })
  return {femaleUsers, maleUsers}
};

console.log(genderView(usersArray));



// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);
 
const genderCount = data => {

  let countFemale = data.femaleUsers.length;
  let countMale = data.maleUsers.length;
  return `Female:${countFemale} Male:${countMale}`

};

console.log(genderCount(data));

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
 
    let richOnes = users.filter((user) => {
    let balanceMoney = user.balance.substr(1).replace(",", "")
    let onlyMoney = Number(balanceMoney)
    if (onlyMoney > 20000){
      return true
    }
  }).forEach((rich)=>{
    console.log( `Dear ${rich.firstName}, since your balance is ${rich.balance}, you are eligible to apply for this awesome credit card.`)
  })
  return richOnes
};


console.log(promo20(usersArray))


// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  let newArr = [...usersArray]
  for (let i=0; i<newArr.length; i++){
    if(newArr[i].isActive === false){
      newArr[i].isActive = true;
    }
  }
  return newArr
};

console.log(addActive(usersArray));



