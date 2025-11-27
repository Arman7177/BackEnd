const { User, validateUser, ROLES } = require('./serviceUser');

const user1 = new User("Arman", "armanabrahamyan33@gmail.com", "Arman.7177", "admin");
const user2 = new User("Ani", "ani@gmail.com", "Ani.1234", "student");
const user3 = new User("Karen", "karen@gmail.com", "Karen.9999", "manager"); 
const user4 = new User("", "", "", "admin"); 

console.log("User 1:", user1);
console.log("Is valid:", validateUser(user1));
console.log("----------------------");

console.log("User 2:", user2);
console.log("Is valid:", validateUser(user2));
console.log("----------------------");

console.log("User 3:", user3);
console.log("Is valid:", validateUser(user3));
console.log("----------------------");

console.log("User 4:", user4);
console.log("Is valid:", validateUser(user4));
