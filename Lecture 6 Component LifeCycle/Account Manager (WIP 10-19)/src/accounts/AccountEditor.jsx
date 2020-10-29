import React from 'react';
import { Department } from '../models/Department';
import { PhoneList } from './PhoneList';
import { PhoneEditor } from './PhoneEditor';
import { AccountRepository } from '../api/AccountRepository';

export class AccountEditor extends React.Component {
    accountsRepository = new AccountRepository();


    departments = [
        new Department(1, "Marketing"),
        new Department(2, "HR"),
        new Department(3, "IT"),
        new Department(4, "Accounting")
    ];

    state = {
        name: '',
        email: '',
        isEmployee: false,
        departmentId: 0,
        phoneNumbers: [
            { number: '214-555-1212', type: 'fax' }
        ]
    };

    addPhone(phone){
        var phoneNumbers = this.state.phoneNumbers;
        phoneNumbers.push(phone);
        this.setState({ phoneNumbers });
    }

    componentDidMount() {
        const accountId = 1
        this.accountsRepository.getAccount(accountId)
            .then(account => this.setState(account))
            

    }

    render() {
        return <form className="container">
            <h1>Account Editor</h1>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={this.state.name}
                    onChange={ event => this.setState({ name: event.target.value }) } />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={ event => this.setState({ email: event.target.value }) } />
            </div>

            <div className="form-group">
                <label htmlFor="isEmployee">
                    <input type="checkbox"
                        id="isEmployee"
                        name="isEmployee"
                        checked={this.state.isEmployee}
                        onChange={ event => this.setState({ isEmployee: event.target.checked }) } />
                        Is Employee
                    </label>
            </div>

            <div className="form-group">
                <label htmlFor="departmentId">Department</label>
                <select id="departmentId"
                    name="departmentId"
                    className="form-control"
                    value={this.state.departmentId}
                    onChange={ event => this.setState({ departmentId: event.target.value }) }>
                        <option></option>
                        {
                            this.departments.map(x => <option key={ x.id } value={ x.id }>{ x.name }</option>)
                        }
                </select>
            </div>

            <PhoneList phoneNumbers={ this.state.phoneNumbers } />
            <PhoneEditor onPhoneAdded={ phone => this.addPhone(phone) } />
            
        </form>;
    }
}