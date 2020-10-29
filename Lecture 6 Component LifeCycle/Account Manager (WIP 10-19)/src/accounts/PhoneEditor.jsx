import React from 'react';

export class PhoneEditor extends React.Component {
    phoneTypes = [
        'fax',
        'mobile',
        'home',
        'landline'
    ];

    state = {
        type: '',
        number: ''
    };

    onAddClick() {
        this.props.onPhoneAdded({
            type: this.state.type,
            number: this.state.number
        });

        this.setState({
            type: '',
            number: ''
        });
    }

    render() {
        return <>
           <div className="row mt-4 mb-4">
                <div className="col-3">
                    <select
                        name="newPhone_type"
                        id="newPhone_type"
                        className="form-control"
                        value={this.state.type}
                        onChange={event => this.setState({ type: event.target.value })}>
                        <option></option>
                        {
                            this.phoneTypes.map((x, i) =>
                                <option key={i}>{ x }</option>)
                        }
                    </select>
                </div>
                <div className="col-6">
                    <input
                        type="text"
                        name="newPhone_number"
                        id="newPhone_number"
                        className="form-control"
                        value={this.state.number}
                        onChange={event => this.setState({ number: event.target.value })} />
                </div>
                <div className="col-3">
                    <button
                        type="button"
                        className="btn btn-success btn-block"
                        onClick={ () => this.onAddClick() }>
                        Add
                        </button>
                </div>
            </div> 
        </>
    }
}