// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName);
  }
  return userFirstNames;
};

console.log (getFirstNames(usersArray));


// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  const userfullNames = [];
  for (let user of arr) {
  userfullNames.push(`${user.firstName} ${user.lastName}`)
  }
  return userfullNames;
};

console.log (getFullNames(usersArray));
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  // Your code goes here ...
  let usersCreditDetails = [];
  for (let user of arr) {
    let obj = {};
  const {firstName, lastName, balance} = user;
  const userDetails = {
    firstName,
    lastName,
    balance
  }
  usersCreditDetails.push(userDetails);
}
return usersCreditDetails;
};

console.log (getUsersCreditDetails(usersArray));
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = users => {
  const femaleUsers = [];
  const maleUsers = [];

  let femaleTotal = users.filter((female) => {
    return femaleTotal.gender === "female";
  });
  
  for(let {firstName, lastName} of femaleTotal){
    femaleUsers.push(`${firstName} ${lastName}`)
  };

  let maleTotal = users.filter((male) => {
    return maleTotal.gender === "male";
  });
  
  for(let {firstName, lastName} of maleTotal){
    maleUsers.push(`${firstName} ${lastName}`)
  };
  let gendersObj = {};
  gendersObj.femaleUsers = femaleUsers;
  gendersObj.maleUsers = maleUsers;
  return gendersObj;
};

console.log (genderView(usersArray));
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);

const genderCount = data => {
  // Your code goes here ...
  const {femaleUsers, maleUsers} = data;
  const femaleCount = femaleUsers.length;
  const maleCount = maleUsers.length;

  return `Female: ${femaleCount} Male: ${maleCount}`
};

console.log (genderCount(data));

// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  const money = [];
  for(let user of users){
    let str = user.balance
    let num = parseInt(str.replace(/[^\d\.\-]/g, ""))
    
    if(num > 2000){
      money.push(user)
    }
  }
  for (const {firstName, balance} of money) {
    return `Dear ${firstName}, since your balance is ${balance}, you are eligible to apply for this awesome credit card.`
}
};
console.log(promo20(usersArray));

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  // Your code goes here ...
};

addActive(usersArray);
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
