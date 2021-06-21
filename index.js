// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************
let usersArray = require('./data.js')

/// ******** Partnered with Ellen ******** ///

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName)
  }
  return userFirstNames
};

getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
    const fullName = [];
    for (let user of arr) {
      fullName.push(`${user.firstName} ${user.lastName}`)
    }
    return fullName
};

getFullNames(usersArray);
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
 const usersCreditDetails = [];
 for (let user of arr) {
  const {firstName, lastName, balance} = user
   usersCreditDetails.push({firstName, lastName, balance})
 }
 return usersCreditDetails
};

getUsersCreditDetails(usersArray);
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
  const females = users.filter((user) => {
    return user.gender === 'female' 
  })
  femaleUsers = getFullNames(females)

  const males = users.filter((user) => {
    return user.gender === 'male';
  })
  maleUsers = getFullNames(males)
  return [{femaleUsers, maleUsers}]
};

genderView(usersArray);
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
  return `
  Female: ${femaleUsers.length}
  Male: ${maleUsers.length}`
};

genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************
const promo20 = users => {
  const hvc = users.filter((user) => {
    return (user.balance.length > 9 && +(user.balance.charAt(1)) > 1)
  })
  for (let client of hvc) {
    console.log(`Dear ${client.firstName}, since your balance is ${client.balance}, you are eligible to apply for this awesome credit card`)
    }
};
// promo20(usersArray)

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

// Create a function addActive() which should loop through the usersArray
// add a new property isActive with a value true to all users 
// hint: each user in the usersArray is represented with object and you could use ... with objects 😉

const addActive = users => {
  for (let user of users) {
    user.isActive = true;
  }
};

addActive(usersArray);
console.log(usersArray)
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
