// Iteration 1

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName)
  }
  return userFirstNames;
};

getFirstNames(usersArray);

// Iteration 2

const getFullNames = arr => {
  let userFullNames = [];
  for (let user of arr) {
    userFullNames.push(`${user.firstName} ${user.lastName}`)
  }
  return userFullNames
};

getFullNames(usersArray);

// Iteration 3

const getUsersCreditDetails = arr => {
  let usersCreditDetails = [];
  for (let user of arr) {
    const {firstName, lastName, balance} = user;
    const userDetails = {firstName, lastName, balance};
    usersCreditDetails.push(userDetails)
  }
  return usersCreditDetails;
};

getUsersCreditDetails(usersArray);

// Iteration 4

const genderView = users => {
  const femaleUsers = users.filter(user => user.gender === 'female').map((user) => {
    const { firstName, lastName } = user;
    return {firstName, lastName};
  });
  const maleUsers = users.filter(user => user.gender === 'male').map((user) => {
    const { firstName, lastName } = user;
    return {firstName, lastName};
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
  const {femaleUsers, maleUsers} = data;
  console.log('Female: ', femaleUsers.length)
  console.log('Male: ', maleUsers.length)
};

genderCount(data);

// Bonus - Iteration 6

const promo20 = users => {
  for (let user of users) {
    const number = Number(user.balance.substring(1).replace(',', ''));
  if (number >= 20000) {
    console.log(`Dear ${user.firstName}, since your balance is ${user.balance}, you are eligible to apply for this awesome credit card.`)
  }
}
};

// Bonus - Iteration 7

const addActive = users => {
  users.forEach((user) => {
    user.isActive = true;
  })
  return users;
};

addActive(usersArray);
