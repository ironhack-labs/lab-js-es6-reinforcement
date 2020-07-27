// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    // Your code goes here ...
    userFirstNames.push(user.firstName)
  }
  return userFirstNames;
};

getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getusers = arr => {
  // Your code goes here ...
  const userusers = [];
  for (let user of arr) {
    let firstName = user.firstName;
    let lastName = user.lastName;
    let user = firstName + ' ' + lastName;
    userusers.push(user);
  }
  return userusers;
};

getusers(usersArray);
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
    let {firstName, lastName,  balance} = user;
    const userDetails = {
      firstName,
      lastName,
      balance
    }
    usersCreditDetails.push(userDetails)
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

const genderView = users => {
  // Your code goes here ...
  
  let femaleUser = users
    .filter(function(user) {
      return user.gender == 'female';
    })
    .map(function(user) {
      return user.firstName + ' ' + user.lastName;
    })
  let maleUser = users
    .filter(function(user) {
      return user.gender == 'male';
    })
    .map(function(user) {
      return user.firstName + ' ' + user.lastName;
    })

  let obj = {maleUser, femaleUser}
  return obj;
  
};

console.log(genderView(usersArray));
// // expected output:
// // {
// //    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
// //    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// // }

// // ***************************************************************************
// // Bonus - Iteration 5
// // ***************************************************************************

const data = genderView(usersArray);

const genderCount = data => {
  // Your code goes here ...
  let malesCount = 0;
  let femalesCount = 0;
  
  let males = data.maleUser;
  for (let male of males) {
    malesCount += 1;
  }
  let females = data.femaleUser;
  for (let female of females) {
    femalesCount += 1;
  }
  
  console.log(`Male: ${malesCount}`)
  console.log(`Female: ${femalesCount}`)
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
  
  let balanceArr = users.filter(function(user) {
    let balances = user.balance
    let newBalance = balances.replace('$', '')
    let newBalanceTwo = newBalance.replace(',', '')
    return newBalanceTwo > 20000;
  })
  let [{firstName: name, balance: sum}, {firstName: secondName, balance: sumTwo}] = balanceArr;
  console.log(`Dear ${name}, since your balance is ${sum}, you are eligible to apply for this awesome credit card.`)
  console.log(`Dear ${secondName}, since your balance is ${sumTwo}, you are eligible to apply for this awesome credit card.`)
};

promo20(usersArray);

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  // Your code goes here ...
  for (let user of users) {
    let userNames = {...user};
    userNames.isActive = true;
  }
  
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