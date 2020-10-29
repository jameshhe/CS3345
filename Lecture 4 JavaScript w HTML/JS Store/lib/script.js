(store => {
    store._changeView = viewId => {
        document.querySelectorAll('main > .active')
            .forEach(actveView => {
                actveView.classList.remove('active');
            });
        document.querySelector('#' + viewId).classList.add('active');
    };
})(store || (store = {}));