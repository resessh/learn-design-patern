import Book from 'Book';
import BookShelf from 'BookShelf';

const bookShelf = new BookShelf();
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

Array.from(bookShelf).forEach((book) => console.log(book.getName()));