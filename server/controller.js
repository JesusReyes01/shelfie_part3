

module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
    
        db
        .getInventory()
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    },  
     addProduct: (req, res) => {
        const db = req.app.get('db')
        // console.log(req.body)
        const{name,price,img} = req.body;
        console.log(name)
        db
        .addProduct([name, price, img])
        .then(product => res.status(200).send('added new product'))
        .catch(err => res.status(500).send(err))

    },
    // addProduct: (req, res) => {
    //     const db = req.app.get('db')
    //     // console.log(req.body)
    //     const{name,price,img} = req.body;
    //     // console.log(name)
    //     console.log ({name, price, img})
    //     db
    //     .addProduct([name, price, img])
    //     .then(product => res.status(200).send('added new product'))
    //     .catch(err => res.status(500).send(err))
    // },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params;
        console.log ({id})
        db
        .deleteProduct(id)
        .then(product => res.status(200).send("product deleted"))
        .catch(err => res.status(500).send(err))
    },
    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params;
        const { name, price, img} = req.body;
        console.log ({id,name, price, img})
        db
        .updateProduct([id, name, price, img])
        .then(product => res.status(200).send('product updated'))
        .catch(err => res.status(500).send(err))
    },
    getProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params;
        console.log('get single product')
        db
        .getProduct(id)
        .then(product => {
            console.log(product)
            res.status(200).send(product)})
        .catch(err => res.status(500).send(err))
    }
}