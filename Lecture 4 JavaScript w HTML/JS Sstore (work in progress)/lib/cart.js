(function (store) {

	var items = []

    function load() {
    	var table = document.querySelector('#cart_items')
    	var tbody = table.querySelector('tbody')
    	var template = tbody.querySelector('template')
    	var fragment = document.createDocumentFragment()
    	tbody.innerHTML = template.outerHTML

    	items.forEach(item => {
    		var clone = template.content.cloneNode(true)
    		var a = clone.querySelector('td:first-child a')
    		a.innerText = item.name
    		a.onclick = () => {
    			store.productDetails.load(item.itemId)
    		}
    		clone.querySelector('td:last-child').innerText = item.price
    		fragment.appendChild(clone)
    	})

    	table.style.display = items.length ? 'table' : 'none'
    	var clear = document.querySelector('#cart_clear')
    	clear.style.display = items.length ? 'inline' : 'none'

    	tbody.appendChild(fragment)

        store._changeView('cart');
    }


    const addToCart = product => {
    	items.push(product)
    	document.querySelector('#cartCount').innerText = items.length
    	load()
    }

    const clear = () => {
    	items.length = 0
    	document.querySelector('#cartCount').innerText = items.length
    	load()
    }

    store.cart = {
        load: load,
        addToCart: addToCart,
        clear: clear
    }

})(store || (store = {}));