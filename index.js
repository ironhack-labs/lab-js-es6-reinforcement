// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

const { usersArray } = require("./data");

console.log("Users array: ", usersArray);

const getFirstNames = (arr) => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName);
  }
  console.log("First names: ", userFirstNames);
};

getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  const fullNames = [];
  for (let user of arr) {
    fullNames.push(`${user.firstName} ${user.lastName}`)
  }
  console.log("Full names: ", fullNames);
  return fullNames;
};

getFullNames(usersArray);
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  const getUsersCreditDetails = [];
  let firstName, lastName, balance;
  let userDetails = {};
  for (let user of arr) {
    ({firstName, lastName, balance} = user); 
    userDetails = {firstName, lastName, balance};
    getUsersCreditDetails.push(userDetails);
  }
  console.log("getUsersCreditDetails: ", getUsersCreditDetails);
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
  const femaleUsers = getFullNames(users.filter((e)=> e.gender === "female"));
  const maleUsers = getFullNames(users.filter((e)=> e.gender === "male"));
  
  return {femaleUsers, maleUsers};
};

console.log("Genderview(usersArray): ", genderView(usersArray));
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
  const { femaleUsers, maleUsers } = data;
  const count = {Female: femaleUsers.length, Male: maleUsers.length};
  console.log("Count object: ", count);
  console.log("Female: ", count.Female); 
  console.log("Male: ", count.Male);
  return count;
};

genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  const richUsers = users.filter((e)=> getNumber(e.balance) > 20000);
  const messagesToRichUsers = richUsers.map(e => `Dear ${e.firstName}, since your balance is ${e.balance}, you are eligible to apply for this awesome credit card.`);
  for (let message of messagesToRichUsers) {
    console.log(message);
  }
  return messagesToRichUsers;
};

function getNumber(string) {
  const characters = string.split("");
  let numString = "";
  for (let char of characters) {
    if(char !== "$" && char !== ",") {
      numString += `${char}`;
    }
  }
  const number = Number(numString);
  return number;
}

getNumber('$12,383.08');


promo20(usersArray);


// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  for (let user of users) {
    user.isActive = true;
  }
  console.log("users with new property: ", users);
  return users
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
