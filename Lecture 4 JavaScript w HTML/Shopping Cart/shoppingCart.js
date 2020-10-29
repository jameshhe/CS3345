(store => {
	store.changeView = (viewId) => {
		// main, one level down, active class
		var active = document.querySelectorAll('main > .active')
		active.forEach(activeView => {
			activeView.c
		})
		var view = document.querySelector('#' + viewId)
		view.classList.add('active')
	}
})(store || store = {})