// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************
console.log("===== Iteration 1 ====== ");
const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    // Your code goes here ...
    userFirstNames.push(user.firstName);
  }
  return userFirstNames;
};

console.log(getFirstNames(usersArray));
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************
console.log("===== Iteration 2 ====== ");
const getFullNames = arr => {
  const userFullNames = [];
  // Your code goes here ...
  for (let user of arr) {
    userFullNames.push(user.firstName + " " + user.lastName);
  }
  return userFullNames;
};

console.log(getFullNames(usersArray));
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************
console.log("===== Iteration 3 ====== ");
// const getUsersCreditDetails = arr => {
//   // Your code goes here ...
//   let usersCreditDetails = [];
//   for (let user of arr) {
//     let obj = {};
//     obj.firstname = user.firstName;
//     obj.lastName = user.lastName;
//     obj.balance = user.balance;
//     usersCreditDetails.push(obj);
//   }
//   return usersCreditDetails;
// };
const getUsersCreditDetails = arr => {
  // Your code goes here ...
  let usersCreditDetails = [];
  for ({
      firstName,
      lastName,
      balance
    } of arr) {
    // let  {firstname,lastName,balance} = user;

    usersCreditDetails.push({
      firstName,
      lastName,
      balance
    });

  }
  return usersCreditDetails;
};
console.log(getUsersCreditDetails(usersArray));
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
console.log("===== Iteration 4 ====== ");
const genderView = users => {
  // Your code goes here ...
  let femaleUsers = users.filter((user) => {
    if (user.gender === 'female') {
      return user;
    }
  }).map(user => {
    return (user.firstName + " " + user.lastName);
  });

  let maleUsers = users.filter((user) => {
    if (user.gender === 'male') {
      return user;
    }
  }).map(user => {
    return (user.firstName + " " + user.lastName);
  });

  let gendersObj = {};
  gendersObj.femaleUsers = femaleUsers;
  gendersObj.maleUsers = maleUsers;
  return gendersObj;
};

console.log(genderView(usersArray));
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************
console.log("===== Iteration 5 ====== ");
const data = genderView(usersArray);

const genderCount = data => {
  // Your code goes here ...
  console.log(`Female: ${data.femaleUsers.length}`);
  console.log(`Male: ${data.maleUsers.length}`);
};

genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************
console.log("===== Iteration 6 ====== ");
const promo20 = users => {
  // Your code goes here ...
  users.forEach(user => {
    let bal = user.balance.replace('$', "").replace(',', "");
    if (bal > 20000) {
      console.log(`Dear ${user.firstName},, since your balance is ${user.balance}, you are eligible to apply for this awesome credit card.`);
    }
  });
};

promo20(usersArray);

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************
console.log("===== Iteration 7 ====== ");
const addActive = users => {
  // Your code goes here ...
  [...users].forEach(user => {
    user.isActive = true;
    // user.isActive2 = true;
  })
  console.log(users);
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