import Book from 'Book';
import BookShelf from 'BookShelf';
import Iterator from 'Iterator';

class Main {
    constructor() {
        const bookShelf: BookShelf = new BookShelf();
        bookShelf.appendBook(new Book("hoge"));
        bookShelf.appendBook(new Book("fuga"));
        bookShelf.appendBook(new Book("fooo"));
        bookShelf.appendBook(new Book("hoga"));
        bookShelf.appendBook(new Book("hoge"));
        bookShelf.appendBook(new Book("fuga"));
        bookShelf.appendBook(new Book("fooo"));
        bookShelf.appendBook(new Book("hoga"));
        bookShelf.appendBook(new Book("hoge"));
        bookShelf.appendBook(new Book("fuga"));
        bookShelf.appendBook(new Book("fooo"));
        bookShelf.appendBook(new Book("hoga"));
        const it = bookShelf.iterator();

        while(it.hasNext()) {
            const book = it.next() as Book;
            console.log(book.getName());
        }
    }
}

new Main();