(function(store) {
    store._changeView = function(viewId) {
        document.querySelectorAll('main > .active')
            .forEach(function(actveView) {
                actveView.classList.remove('active');
            });
        document.querySelector('#' + viewId).classList.add('active');
    };
})(store || (store = {}));