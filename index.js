// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************
let usersArray = require('./data.js');

const getFirstNames = arr => {
  let userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName);
  }
  return userFirstNames;
};

getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  let userFullNames = []
  for (let user of arr){
    userFullNames.push(`${user.firstName} ${user.lastName}`)
  }
  return userFullNames;
};

getFullNames(usersArray);
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  let usersCreditDetails =  []
  for (let user of arr) {
    const { firstName , lastName, balance} = user
    const userDetails = {
      firstName,
      lastName,
      balance
    };
    usersCreditDetails.push(userDetails);
  }
  return usersCreditDetails;
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
  const femaleUsers = users.filter(user => user.gender == "female");
  const maleUsers = users.filter(user => user.gender == "male");

  let females = femaleUsers.map((user) => {
    return `${user.firstName} ${user.lastName}`
  });
  let males = maleUsers.map((user) => {
    return `${user.firstName} ${user.lastName}`
  });

  const result = {
    femaleUsers: females,
    maleUsers: males
  }
  return result
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
  let female = data.femaleUsers.length;
  let male = data.maleUsers.length
  return `Female: ${female} ; Male: ${male}`
};

genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  let greaterBalance = users.filter((user) => {
    let n = user.balance.slice(1)
    let numbers = n.split(",").join("");
      return numbers > 20000
  });
  let result = greaterBalance.map((user) =>{
    return `Dear ${user.firstName}, since your balance is  ${user.balance}, you are eligible to apply for this awesome credit card.`
  })
  return result
}

promo20(usersArray)

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  let obj = {
    isActive:true
  }
  let newArr = users.map((user) => {
    const newObj ={...user, ...obj};
    return newObj
  });
  return newArr
}

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
