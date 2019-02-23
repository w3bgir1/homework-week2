class ShoppingCart {
    constructor(){
        this.items = []
    }

    getItems() {
        return this.items
    }

    addItem(itemName, quantity, price) {
        this.items.push({
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        })
    }

    clear() {
        this.items = []
    }
    
    total() {
        return this.items.reduce((sum, item) => {
            return sum += item.quantity * item.pricePerUnit
        }, 0)
    }
}

module.exports = ShoppingCart