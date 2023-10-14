import Product from "./Product";

class ConcreteProduct2 implements Product {
    getName(): string {
        return "Ürün 2";
    }
}

export default ConcreteProduct2;