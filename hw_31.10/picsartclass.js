
class ClassRoom {
    #list;

    constructor(roomNumber) {
        this.roomNumber = roomNumber;
        this.#list = new Array();
    }
    addStudent(name) {
        this.#list.push(name);
    }
    listStudents() {
        for (let i = 0; i < this.#list.length; ++i) {
            console.log(this.#list[i]);
        }
    }
};
class Library {
    constructor(books) {
        this.books = new Array();
    }
    addBooks(title, author) {
        const book = new Book(title, author);
        this.books.push(book);
    }
    listBooks() {
        for (let i = 0; i < this.books.length; ++i) {
            console.log(this.books[i]);
        }
    }
};

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    info() {
        return `${this.title} by ${this.author}`;
    }
}

class Kitchen {
    constructor() {
        this.staff = new Array();
    }
    addWorker(name) {
        this.staff.push(name);
    }
    listWorkers() {
        for (let i = 0; i < this.staff.length; ++i) {
            console.log(this.staff[i]);
        }
    }
};

class PicsartAcademy {
    constructor(classroom, library, kitchen) {
        this.classroom = new ClassRoom(1001);
        this.library = new Library();
        this.kitchen = new Kitchen();
    }
    showInfo() {
        console.log('Picsart Class Info:');
        console.log(this.classroom, this.library, this.kitchen);
    }
}

let picsartclass = new PicsartAcademy();

picsartclass.classroom.addStudent("Alice");
picsartclass.library.addBooks("Clean Code", "Robert C. Martin");
picsartclass.kitchen.addWorker("Chef Bob");
picsartclass.showInfo();
