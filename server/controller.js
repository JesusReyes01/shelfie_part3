

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
        // console.log(name)
        db
        .addProduct([name, price, img])
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))

    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params;

        db.deleteProduct(id)
        .then(product => res.status(200).send("ALL GOOD"))
        .catch(err => res.status(500).send(err))
    }
}