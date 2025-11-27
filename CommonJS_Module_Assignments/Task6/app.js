const book = require('./models/book');
const member = require('./models/members');
const {addBook,addMember,findBook,findMember,borrow, returnBook,getInfoMembers,getInfoBooks} = require('./services/libraryService');

const book1 = new book('One Hundred Years of Solitude','Gabriel García Márquez',1967,false)
const book2 = new book('To Kill a Mockingbird','Harper Lee',1960,false)
const book3 = new book('The Great Gatsby','F. Scott Fitzgerald',1925,false)
const book4 = new book('Pride and Prejudice','Jane Austen',1813,false)
const book5 = new book("The Hitchhiker's Guide to the Galaxy",'Douglas Adams',1979,false)

addBook(book1)
addBook(book2)
addBook(book3)
addBook(book4)
addBook(book5)

console.log(getInfoBooks());
/*
[
  Book {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    year: 1967,
    isBorrowed: false
  },
  Book {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    isBorrowed: false
  },
  Book {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    isBorrowed: false
  },
  Book {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    isBorrowed: false
  },
  Book {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    isBorrowed: false
  }
]
*/

const member1 = new member('Arman',1)
const member2 = new member('Petros',2)
const member3 = new member('Gayane',3)
const member4 = new member('Ashot',4)
const member5 = new member('Lilit',5)

addMember(member1)
addMember(member2)
addMember(member3)
addMember(member4)
addMember(member5)

console.log(getInfoMembers());
/*
[
  Member { name: 'Arman', memberId: 1, borrowedBooks: [] },
  Member { name: 'Petros', memberId: 2, borrowedBooks: [] },
  Member { name: 'Gayane', memberId: 3, borrowedBooks: [] },
  Member { name: 'Ashot', memberId: 4, borrowedBooks: [] },
  Member { name: 'Lilit', memberId: 5, borrowedBooks: [] }
]
*/

member1.borrowBook(book1)
member2.borrowBook(book2)
member3.borrowBook(book3)
member4.borrowBook(book4)
member5.borrowBook(book5)

console.log(getInfoMembers());
/*
[
  Member { name: 'Arman', memberId: 1, borrowedBooks: [ [Book] ] },
  Member { name: 'Petros', memberId: 2, borrowedBooks: [ [Book] ] },
  Member { name: 'Gayane', memberId: 3, borrowedBooks: [ [Book] ] },
  Member { name: 'Ashot', memberId: 4, borrowedBooks: [ [Book] ] },
  Member { name: 'Lilit', memberId: 5, borrowedBooks: [ [Book] ] }
]
*/

console.log(findMember(member1.memberId));
/*
Member {
  name: 'Arman',
  memberId: 1,
  borrowedBooks: [
    Book {
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel García Márquez',
      year: 1967,
      isBorrowed: true
    }
  ]
}
*/

console.log(findBook(book2.title));
/*
Book {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 1960,
  isBorrowed: true
}
*/

returnBook(book3.title,member3.memberId);
returnBook(book2.title,member2.memberId);

console.log(getInfoMembers());
/*
[
  Member { name: 'Arman', memberId: 1, borrowedBooks: [ [Book] ] },
  Member { name: 'Petros', memberId: 2, borrowedBooks: [] },
  Member { name: 'Gayane', memberId: 3, borrowedBooks: [] },
  Member { name: 'Ashot', memberId: 4, borrowedBooks: [ [Book] ] },
  Member { name: 'Lilit', memberId: 5, borrowedBooks: [ [Book] ] }
]
*/




console.log(getInfoBooks());
console.log(getInfoMembers());
/*
[
  Book {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    year: 1967,
    isBorrowed: true
  },
  Book {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    isBorrowed: false
  },
  Book {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    isBorrowed: false
  },
  Book {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    isBorrowed: true
  },
  Book {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    isBorrowed: true
  }
]
[
  Member { name: 'Arman', memberId: 1, borrowedBooks: [ [Book] ] },
  Member { name: 'Petros', memberId: 2, borrowedBooks: [] },
  Member { name: 'Gayane', memberId: 3, borrowedBooks: [] },
  Member { name: 'Ashot', memberId: 4, borrowedBooks: [ [Book] ] },
  Member { name: 'Lilit', memberId: 5, borrowedBooks: [ [Book] ] }
]
*/






