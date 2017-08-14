import Aggregate from 'Aggregate';
import Book from 'Book';
import Iterator from 'Iterator';
import BookShelfIterator from 'BookShelfIterator';

export default class BookShelf implements Aggregate {
    private books: Book[] = new Array<Book>();

    constructor() {}

    public getBookAt(index: number): Book {
        return this.books[index];
    }

    public appendBook(book: Book): void {
        this.books.push(book);
    }

    public getLength(): number {
        return this.books.length;
    }

    public iterator(): BookShelfIterator {
        return new BookShelfIterator(this);
    }
}