class ProductManager {
    #products;

    constructor() {
        this.#products = [];
    }

    #getNextId() {
        if (this.#products.length === 0) {
            return 1;
        }
        return this.#products.at(-1).id + 1;
    }

    // existeCode(idEvento, idCode) {
    //     const evento = this.#products.find((evento) => evento.id === idEvento);
    //     if (!evento) {
    //         throw new Error("no se encontro nada");
    //     }

    //     const existeProd = evento.arrayP.some(
    //         (codigo) => codigo.code === idCode);
    //     if (existeProd) {
    //         throw new Error("Ya existe el codigo");
    //     }
    //     evento.arrayP.push(idCode);
    // }

    addProduct(title, description, price, thumbnail, code, stock, id) {
        const producto = {
            id: this.#getNextId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            arrayP: []
        }
        this.#products.push(producto);

    }

    getProducts() {
        return this.#products;
    }

    getProductById(id) {
        const product = this.#products.find(p => p.id === id)
        if (product) {
            return product;
        }
        else {
            console.error("Producto no encontrado");
        }
    }
}


const productManager = new ProductManager();
productManager.addProduct("Papa", "Papa americana", 20, "./papa.png", 100, 100);
productManager.addProduct("Tomate", "Tomate tipo bola", 30, "./tomate.png", 200, 60);
productManager.addProduct("Cebolla", "Cebolla amex", 15, "./cebolla.jpeg", 300,80);
//ticketManager.agregarEvento("Evento 1", "Lugar 1", 100);
//ticketManager.agregarEvento("Evento 2", "Lugar 2", 200);
//ticketManager.agregarEvento("Evento 3", "Lugar 3", 300);
//ticketManager.agregarUsuario(1, 1);
//ticketManager.agregarUsuario(1, 2);
//ticketManager.ponerEventoEnGira(1, "Lugar 4", new Date("2024-03-12"));
//console.log(ticketManager.getEventos());
console.log(productManager.getProducts())
console.log(productManager.getProductById(3));