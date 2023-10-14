import ProductFactory from "./ProductFactory";

const factory = new ProductFactory();

const product1 = factory.createProduct("Product1");
if (product1) {
    console.log(product1.getName()); // Ürün 1
}

const product2 = factory.createProduct("Product2");
if (product2) {
    console.log(product2.getName()); // Ürün 2
}