public class Main {
    public static void main(String[] args) {
        BookShelf bookShelf = new BookShelf();
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
        Iterator it = bookShelf.iterator();

        while (it.hasNext()) {
            Book book = (Book)it.next();
            System.out.println(book.getName());
        }
    }
}