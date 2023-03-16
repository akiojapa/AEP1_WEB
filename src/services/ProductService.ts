import fs from 'fs'


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
        return jsondata.map((product) => ({
            nome: product.nome,
            qtde: product.qtde,
            preco: product.preco,
            valor_estoque: product.qtde * product.preco
    }))
}

}
export default new ProductService