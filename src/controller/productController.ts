import { Request, Response } from 'express'
import productService from '../services/ProductService';


class ProductController{    

    public async createProduct(req, res) {
        const product = [
            { "nome": "Caneta", "qtde": 10, "preco": 7.99, "data_compra": "2023-03-15", "data_entrega": "2023-04-25" },
            { "nome": "Impressora", "qtde": 0, "preco": 649.50, "data_compra": "2023-03-17", "data_entrega": "2023-05-26" },
            { "nome": "Caderno", "qtde": 4, "preco": 27.10, "data_compra": "2023-03-10", "data_entrega": "2023-03-12" },
            { "nome": "Lapis", "qtde": 3, "preco": 5.8, "data_compra": "2023-03-02", "data_entrega": "2023-04-20" },
            { "nome": "Tesoura", "qtde": 1, "preco": 19.99, "data_compra": "2023-03-25", "data_entrega": "2023-04-13" }
        ];
        productService.createProduct(product);
        res.status(201).json({message: 'product created sucessfully'});
    }

    public async getAllProducts(req, res) {
        const products = productService.getAll();
        res.json(products)
    }

    public async getStock(req, res) {
        const stock = productService.getStock()
        res.status(200).json(stock)
    }

}

export default new ProductController()