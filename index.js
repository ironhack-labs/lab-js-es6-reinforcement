// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************
const usersArray = [
  {
    firstName: 'Kirby',
    lastName: 'Doyle',
    id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
    isActive: false,
    balance: '$3,570.06',
    gender: 'male'
  },
  {
    firstName: 'Tracie',
    lastName: 'May',
    id: '1af0e9ee-66fc-4298-b8ce-5d99bcbaac05',
    isActive: false,
    balance: '$1,547.73',
    gender: 'female'
  },
  {
    firstName: 'Kendra',
    lastName: 'Hines',
    id: '5e92af3a-b08e-4689-bdeb-3226300470e3',
    isActive: true,
    balance: '$12,383.08',
    gender: 'female'
  },
  {
    firstName: 'Kinney',
    lastName: 'Howard',
    id: '0ad2388d-83e1-4831-9cc4-e3581f8edf36',
    isActive: false,
    balance: '$3,207.06',
    gender: 'male'
  },
  {
    firstName: 'Howard',
    lastName: 'Gilmore',
    id: '0719205d-c965-44cb-a128-708cf335b26c',
    isActive: true,
    balance: '$21,307.75',
    gender: 'male'
  },
  {
    firstName: 'Rachelle',
    lastName: 'Schneider',
    id: '04012184-651b-41eb-9642-d362fedff02f',
    isActive: true,
    balance: '$35,121.49',
    gender: 'female'
  },
  {
    firstName: 'Lizzie',
    lastName: 'Alford',
    id: '598ca7ec-888e-494d-ae94-c21ace3ffa52',
    isActive: false,
    balance: '$4,382.94',
    gender: 'female'
  }
];

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName)
  }
  return userFirstNames
};

console.log(getFirstNames(usersArray));
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  const userFullNames = [];
  for(let user of arr){
    userFullNames.push(`${user.firstName} ${user.lastName}`)
  }
  return userFullNames
};

console.log(getFullNames(usersArray));
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  const usersCreditDetails = []
  for(let user of arr){
    const {firstName, lastName, balance} = user
    const userDetails = {
      firstName,
      lastName,
      balance
    };
    usersCreditDetails.push(userDetails)
  }
  return usersCreditDetails
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
  return { femaleUsers: [...users].filter( user => user.gender === 'female'), maleUsers: [...users].filter( user => user.gender === 'male') }
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

const data = genderView(usersArray);

const genderCount = data => {
  console.log('Female: ', data.femaleUsers.length)
  console.log('Male: ', data.maleUsers.length)
};

genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  for (let user of users ){
    const {balance, firstName} = user
    balanceThousands = Number(balance.slice(balance.indexOf('$')+1, balance.indexOf(',')))
    if( balanceThousands > 20 ){
      console.log(`Dear ${firstName}, since your balance is ${balance}, you are eligible to apply for this awesome credit card.`)
    }
  }
};

promo20(usersArray)
// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  for(let index in users){
    users[index] = {...users[index], isActive2: true}
  }
};
//array already has isActive set, im using a new variable isActive2
addActive(usersArray);
console.log(usersArray)
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
