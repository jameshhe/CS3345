(store => {
    const load = () => {

        var loaded = false

        const load = () => {
            if(!loaded){
                var products = store.inventory.getProducts()
                // Select the ul under product list
                var fragment = document.createDocumentFragment()
                // Now we need some products to bind to our ul
                // but we shouldn't store it right here

                products.forEach(product => {
                    var li = document.createElement('li')
                    li.innerText = product.name
                    // add CSS class to it
                    li.classList.add('list-group-item')
                    li.onclick = () => {
                        store.productDetails.load(product.itemId)
                    }
                    fragment.appendChild(li)
                })
                document.querySelector('#productList')
                loaded = true
            }

            store._changeView('productList')
        }

        store.productList = {
            load: load
        }
    }

})(store || (store = {}))