import fs, { copyFileSync } from 'fs'


class ProductService {

    public createProduct(product) {


        const data = JSON.stringify(product)
        
        fs.writeFile('products.json', data, (err) => {
            if(err){
                throw err;
            }
            else{
                console.log("Dados gravados com sucesso!")
            }
        
        })

    }   

    
    public getAll() {

         const conteudo = fs.readFileSync('products.json')
         return JSON.parse(conteudo)

    }

    public getStock() {
        const products = fs.readFileSync('products.json')
        const jsondata = JSON.parse(products);
        let stock = jsondata.map((product) => ({
            nome: product.nome,
            qtde: product.qtde,
            preco: product.preco,
            valor_estoque: product.qtde * product.preco
    }))
    return stock
}

    public getStockPrice() {
        const products = fs.readFileSync('products.json')
        const jsondata = JSON.parse(products);
        let stock = jsondata.reduce((aux, product) => {
            const stock_value = product.qtde * product.preco
            return aux + stock_value
    }, 0)
    return ({ValorTotalEstoque: stock})
    }

}
export default new ProductService