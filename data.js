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


// Iteration 1: for...of loop
const getFirstNames = arr => {
  const userFirstNames = [];
  for(let user of arr){
    let firstName = user.firstName;
    userFirstNames.push(firstName);
  }

  console.log(userFirstNames)
  return userFirstNames; 
};

getFirstNames(usersArray);



// Iteration 2: for...of loop and ES6 string literals ${}
const getFullNames = arr => {
  const userFullName = [];
  for(let user of arr){
    let fullName = `${user.firstName} ${user.lastName}`;
    userFullName.push(fullName);
  }

  console.log(userFullName);
  return userFullNames;
};

getFullNames(usersArray)



// Iteration 3: ES6 destructuring, for of loop, object literal
const getUsersCreditDetails = arr => {
  const usersCreditDetails = [];
  for(let user of arr) {
    const {firstName,lastName,balance} = user;
    let userDetails = {firstName, lastName, balance};
    usersCreditDetails.push(userDetails);
  }

  console.log(usersCreditDetails);
  return usersCreditDetails;
};

getUsersCreditDetails(usersArray);




// Iteration 4: practice .filter() method and how to return two elements
const genderView = users => {
  const femaleUsers = []; 
  const maleUsers = []; 
  
  users.filter(user => {
    if(user.gender === 'female') {
      femaleUsers.push(`${user.firstName} ${user.lastName}`);
    } else {
      maleUsers.push(`${user.firstName} ${user.lastName}`);
    }
  });

  return {
    femaleUsers,
    maleUsers
  }
};

genderView(usersArray);



// Bonus - Iteration 5
const data = genderView(usersArray);

const genderCount = data => {
  // Your code goes here ...
  const {femaleUsers, maleUsers} = data;
  console.log(`Female: ${femaleUsers.length}`);
  console.log(`Male: ${maleUsers.length}`);
};

genderCount(data);




// Bonus - Iteration 6

const promo20 = users => {
  // Your code goes here ...
  users.map(user => {
    const userBalance = user.balance.replace('$', "").replace(',', "");
    const number = parseInt(userBalance);

    if (number > 20000) {
      console.log(`Dear ${user.firstName}, since your balance is ${user.balance}, you are eligible to apply for this awesome credit card.`);
    }
  });
};

promo20(usersArray);




// Bonus - Iteration 7

const addActive = users => {
  users.forEach(user => {
    user.isActive = true;
  })
  console.log(users[0]);
};

addActive(usersArray);