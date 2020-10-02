
module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        // console.log(db)

        db.getInventory()
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    }
}