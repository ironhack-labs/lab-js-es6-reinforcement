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

getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

///ALTERNATIVE
// const getFirstNames = arr => {
//   const userFirstNames = [];
//   for (let {firstName} of usersArray) {
//     // Your code goes here ...
//     userFirstNames.push(firstName)
//   }
// return userFirstNames
// };


// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
   const userFullName = [];
   for (let user of arr) {
     const fullName = `${user.firstName} ${user.lastName}`;
     userFullName.push(fullName);
   }
   return userFullName;
};

getFullNames(usersArray);
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  let userCreditDetails = [];
  for (let user of arr) {
    const { firstName, lastName, balance } = user;
    const userDetails = { firstName, lastName, balance };
    userCreditDetails.push(userDetails);
  }
  return userCreditDetails;
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
const femaleUsers = [...users]
  .filter((user) => user.gender === "female")
  .map((elem) => `${elem.firstName} ${elem.lastName}`);

const maleUsers = [...users]
  .filter((user) => user.gender === "male")
  .map((elem) => `${elem.firstName} ${elem.lastName}`);

return { femaleUsers, maleUsers };
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
return `Female: ${data.femaleUsers.length}
Male: ${data.maleUsers.length}`;
};

genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  // Your code goes here ...
  const eligible = [...users]
    .map(user => user.balance.substring(1))
    .map(string => string.replace(",", ""))
    .map(str => parseFloat(str))
    .filter(sum => sum > 20000);
};

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
 [...users].map(user => user.isActive = "true");
 return users;
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
