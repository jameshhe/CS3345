var accounts

(() => {
	function Account(name, amount){
		this.name = name
		this.amount = amount
	}

	const getAccounts = () => {
		return [
			new Account('John', 12),
			new Account('Sam', 50),
			new Account('Mary', 25),
			{
				name: 'Fred',
				amount: 15
			}
		]
	}

	const bindTable = () => {
		// get the tbody, which has id 'accounts'
		var tbody = document.getElementById('accounts')
		// this puts this line on debugger
		// debugger
		var rows = accounts.map(account => {
			return `<tr><td>${account.name}</td><td>${account.amount}</td></tr>`
		})
		tbody.innerHTML = rows.join('')
	}

	const addAccount = () => {
		var nameInput = document.getElementById('name')
		var amountInput = document.getElementById('amount')

		if(!nameInput.value){
			alert('Invalid name')
			return
		}

		if(isNaN(amountInput.valueAsNumber)) {
			alert('Invalid amount')
			return
		}

		var account = new Account(nameInput.value, amountInput.valueAsNumber)
		accounts.push(account)
		bindTable()

		nameInput.value = ""
		amountInput.value = ""
	}

	window.onload = () => {
		accounts = getAccounts()
		bindTable()
		document.getElementById('addAccount').onclick = addAccount
	}
}) ()