import ConcreteProduct1 from "./ConcreteProduct1";
import ConcreteProduct2 from "./ConcreteProduct2";
import Product from "./Product";

class ProductFactory {
    createProduct(type: string): Product | null {
        if (type === "Product1") {
            return new ConcreteProduct1();
        } else if (type === "Product2") {
            return new ConcreteProduct2();
        }
        return null;
    }
}

export default ProductFactory;