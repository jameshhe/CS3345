(store => {
    const load = () => {
        // Select the ul under product list
        var ul = document.createDocumentFragment('productList_products')
        // Now we need some products to bind to our ul
        // but we shouldn't store it right here
        var products = [{
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

        products.forEach(product => {
        	var li = document.createElement('li')
        	li.innerText = product.name
        	// add CSS class to it
        	li.classList.add('list-group-item')
        	li.onclick = () => {
        		store.productDetails.load()
        		ul.appendChild(li)
        	}
        })

        store._changeView('productList')
    }
    store.productList = {
        load: load
    }


})(store || store == {})