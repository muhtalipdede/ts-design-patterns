import Product from "./Product";

class ConcreteProduct1 implements Product {
    getName(): string {
        return "Ürün 1";
    }
}

export default ConcreteProduct1;