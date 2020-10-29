(function (store) {

    function load(itemId) {
    	var product = store.inventory.getProduct(itemId)

    	document.querySelector('#productDetails_name').innerText = product.name
    	document.querySelector('#productDetails_description').innerText = product.description
    	document.querySelector('#productDetails_price').innerText = product.price

    	store.productDetails.product = product
        store._changeView('productDetails');
    }

    store.productDetails = {
        load: load
    }

})(store || (store = {}));