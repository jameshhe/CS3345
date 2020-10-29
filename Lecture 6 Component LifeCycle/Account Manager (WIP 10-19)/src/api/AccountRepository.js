import axios from 'axios';

export class AccountRepository {
    url = 'https://api.johnlawrimore.com/directory/accounts'

    config = {
        headers: {
            Authorization: 'jlawrimore'
        }
    }

    getAccount(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${id}`, config)
                .then(res => resolve(res.data))
                .catch(err => {
                    alert(err)
                    reject()
                })
        })
        
    }
}