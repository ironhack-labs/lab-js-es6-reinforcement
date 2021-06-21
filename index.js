// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

let usersArray = require('./data')

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName)
  }
  return userFirstNames
};

//getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  let fullName = []
  for (let user of arr) {
    fullName.push(`${user.firstName} ${user.lastName}`)
  }
  return fullName
};

//getFullNames(usersArray);
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  let usersDetails = []
  for (let user of arr) {
    let { firstName, lastName, balance } = user
    usersDetails.push(firstName, lastName, balance)
  }
  return usersDetails
};

//getUsersCreditDetails(usersArray);
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
  let femaleUsers = []
  let maleUsers = []
  let filteredArray = users.forEach((elem) => {
    if (elem.gender == "male") {
      maleUsers.push(elem.firstName)
    } else
      femaleUsers.push(elem.firstName)
  })
  let merge = { femaleUsers, maleUsers }
  return merge
};

//genderView(usersArray);
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
  console.log(`Female: ${data.femaleUsers.length}`)
  console.log(`Male: ${data.maleUsers.length}`)
};

//genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

//remover o dolar sign, split, and join.
const promo20 = users => {
  let clone = [...users]
  for (let elem of clone) {
    let balanceWithout$ = elem.balance.slice(1, elem.balance.length)
    let balanceSplit = balanceWithout$.split(",")
    let balanceJoin = balanceSplit.join('')
    let balanceNumber = Number(balanceJoin)
    elem.balance1 = balanceNumber
  }
  let filteredElements = clone.filter((elem1) => {
    return elem1.balance1 > 20000
  })
  filteredElements.forEach((elem2) => {
    console.log(`Dear ${elem2.firstName}, since your balance is ${elem2.balance}, you are eligible to apply for this awesome credit card.`)

  })
  return filteredElements
}

promo20(usersArray)

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  for (let elem of users) {
    elem.isActive = true
  }
  return users
};

//console.log(addActive(usersArray))

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
