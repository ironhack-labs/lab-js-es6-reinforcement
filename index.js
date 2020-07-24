// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    // Your code goes here ...
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
  // Your code goes here ...
const userfullNames = [];
for(let user of arr) {
  userfullNames.push(`${user.firstName} ${user.lastName}`)
}
// console.log(userfullNames)
return userfullNames
};


// getFullNames(usersArray)
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  // Your code goes here ...
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

// getUsersCreditDetails(usersArray)

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
let females = users.filter((female) => {
	return female.gender === "female";
});

let males = users.filter((male) => {
	return male.gender === "male";
});

return {femaleUsers: getFullNames(males), maleUsers: getFullNames(females)}
};

genderView(usersArray)


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


// genderCount(data);

// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  // Your code goes here ...
  const qualify = [];

  //get users with balance above 20000 and push to qualify array
  for(let user of users){
    let str = user.balance
    //convert string to number
    let num = parseInt(str.replace(/[^\d\.\-]/g, ""))
    //check if greater than 20000
    if(num > 20000){
      qualify.push(user)
    }
  }

  //destructure array of objects to obtain firstName and balance
for (const {firstName, balance} of qualify) {
  return `Dear ${firstName}, since your balance is ${balance}, you are eligible to apply for this awesome credit card.`
}
};


// promo20(usersArray)

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  return users.map(user => {
  return {
  ...user, //here you are getting the whole user object copied
  isActive: true
  }
  })
  }

// addActive(usersArray);

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
