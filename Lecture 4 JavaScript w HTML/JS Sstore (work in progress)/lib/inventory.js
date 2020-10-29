(store => {
    var _products = [{
            "itemId": 1,
            "name": "Foo (12 pack)",
            "description": "Lorem ipsum dolor sit amet, at dictum, donec urna elementum, eget curabitur wisi nam, ultrices felis eleifend, sit aliquet libero quis lacus.",
            "price": 12.99
        },
        {
            "itemId": 2,
            "name": "Bag o'' Bar",
            "description": "Lorem ipsum dolor sit amet, at dictum, donec urna elementum, eget curabitur wisi nam, ultrices felis eleifend, sit aliquet libero quis lacus.",
            "price": 19.99
        },
        {
            "itemId": 3,
            "name": "Foo + Bar Combo",
            "description": "Lorem ipsum dolor sit amet, at dictum, donec urna elementum, eget curabitur wisi nam, ultrices felis eleifend, sit aliquet libero quis lacus.",
            "price": 25.99
        },
        {
            "itemId": 4,
            "name": "Baz - New & Improved!",
            "description": "Lorem ipsum dolor sit amet, at dictum, donec urna elementum, eget curabitur wisi nam, ultrices felis eleifend, sit aliquet libero quis lacus.",
            "price": 10.99
        }
    ];

    const getProducts = () => {
        return _products
    }

    const getProduct = itemId => {
        // .find() returns the first find and .filter() returns all finds
        return _products.find(product => {
            return product.itemId == itemId
        })
    }

    store.inventory = {
        // 2 methods
        getProducts: getProducts,
        getProduct: getProduct
    }

})(store || (store = {}))