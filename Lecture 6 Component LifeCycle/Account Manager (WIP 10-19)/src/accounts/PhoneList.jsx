import React from 'react';

export const PhoneList = props => <>
    <ul className="list-group">
        <li className="list-group-item bg-info text-white">Phone Numbers</li>
        {
            props.phoneNumbers.map((x, i) =>
                <li className="list-group-item" key={i}>
                    {x.number}
                    <span className="badge badge-info float-right">{x.type}</span>
                </li>)
        }
    </ul>
</>;