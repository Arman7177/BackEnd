const members = [];
const books = [];

function addBook(book) {
    const exists = books.some(b => b.title === book.title);

    if (exists) {
        return `Book with id ${book.title} already exists`;
    }

    books.push(book);
    return `The book "${book.title}" was added to the library successfully`;
}

function addMember(member) {
    const exists = members.some(m => m.memberId === member.memberId);

    if (exists) {
        return `Member with id ${member.memberId} already exists`;
    }

    members.push(member);
    return `Member "${member.name}" was added successfully`;
}

function findBook(title) {
    return books.find(b => b.title === title) || null;
}

function findMember(id) {
    return members.find(m => m.memberId === id) || null;
}

function borrow(title, memberId) {
    const book = findBook(title);
    if (!book) {
        return 'Book not found';
    }
    const member = findMember(memberId);

    if (!member) {
        return 'Member not found';
    }
    return member.borrowBook(book);
}


function returnBook(title, memberId) {
    const book = findBook(title);
    
    if (!book) {
        return 'Book not found';
    }
    const member = findMember(memberId);
    
    if (!member) {
        return 'Member not found';
    }
    return member.returnBook(book);
}
function getInfoMembers() {
    return members;
}
function getInfoBooks() {
    return books;
}

module.exports = {addBook,addMember,findBook,findMember,borrow, returnBook,getInfoMembers,getInfoBooks}