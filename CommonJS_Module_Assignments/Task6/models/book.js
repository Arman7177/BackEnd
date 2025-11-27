class Book {
    constructor(title,author,year,isBorrowed = false) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isBorrowed = isBorrowed;
    }
    borrow() {
        if (this.isBorrowed) {
            return 'Already Borrowed'
        }
        return this.isBorrowed = true;
    }
    returnBook() {
        this.isBorrowed = false;
    }
}


module.exports = Book;