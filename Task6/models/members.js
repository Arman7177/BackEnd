class Member {
    constructor(name,memberId) {
        this.name = name;
        this.memberId = memberId;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        if (book.isBorrowed) {
            return 'Already Borrowed'
        }
        book.isBorrowed = true;
        this.borrowedBooks.push(book);

        return `${this.name} borrowed "${book.title}"`;
    }
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);

        if (index === -1) {
            return 'This book is not borrowed by this member';
        }

        this.borrowedBooks.splice(index,1);
        book.isBorrowed = false

        return `${this.name} returned "${book.title}"`;
    }
}


module.exports = Member;