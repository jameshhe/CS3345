(store => {
    let items = [];

    let load = () => {
        let table = document.querySelector("#cart_items");
        let tbody = table.querySelector("tbody");
        let template = tbody.querySelector('template');
        tbody.innerHTML = template.outerHTML;

        let fragment = document.createDocumentFragment();
        items.forEach(product => {
            let clone = template.content.cloneNode(true);
            let a = clone.querySelector('td:first-child a')
            a.innerText = product.name;
            a.onclick = () => {
                store.productDetails.load(product.itemId);
            }
            clone.querySelector('td:last-child').innerText = product.price;
            fragment.appendChild(clone);
        });

        table.style.display = items.length
            ? "table"
            : "none";

        let clear = document.querySelector('#cart_clear');
        clear.style.display = items.length
            ? "inline"
            : "none";

        tbody.appendChild(fragment);

        store._changeView('cart');
    }

    let addToCart = (product) => {
        items.push(product);
        document.querySelector('#cartCount').innerText = items.length;
        load();
    }

    let clear = () => {
        items.length = 0;
        document.querySelector('#cartCount').innerText = items.length;
        load();
    }

    store.cart = {
        load,
        addToCart,
        clear
    };

})(store || (store = {}));