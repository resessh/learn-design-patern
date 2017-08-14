import Book from 'Book';
import BookShelf from 'BookShelf';
import Iterator from 'Iterator';

export default class BookShelfIterator implements Iterator {
    private bookShelf: BookShelf;
    private index: number;

    constructor(bookshelf: BookShelf) {
        this.bookShelf = bookshelf;
        this.index = 0;
    }

    public hasNext(): boolean {
        return (this.index < this.bookShelf.getLength());
    }

    public next(): Object {
        const book: Book = this.bookShelf.getBookAt(this.index);
        this.index++;
        return book;
    }
}