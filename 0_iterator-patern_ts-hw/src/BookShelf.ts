import Book from 'Book';

export default class bookShelf implements Iterable<Book> {
    private books: Book[] = [];

    constructor() { }

    public getBookAt(index: number): Book {
        return this.books[index];
    }

    public appendBook(book: Book): void {
        this.books.push(book);
    }

    public getLength(): number {
        return this.books.length;
    }

    public *[Symbol.iterator](): IterableIterator<Book> {
        let index = 0;
        while (index < this.getLength()) {
            yield this.getBookAt(index);
            index++;
        }
    }
}