import React from 'react';

const OrderListDetail = props => {
    const { displayName, email, name, _id, status } = props.order;


    const handleStatus = (status, id) => {
        const newStatus = { status: `${status}` };
        fetch(`https://infinite-waters-92433.herokuapp.com/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newStatus)
        })
            .then(res => res.json())
            .then(data => {

            })
    }


    return (
        <tr>
            <td>{displayName}</td>
            <td>{email}</td>
            <td>{name}</td>
            <td><p style={{ display: "inline" }}>{status}</p></td>
            <td>
                <button className="btn btn-danger me-2" onClick={() => handleStatus("Pending", _id)}>Pending</button>
                <button className="btn btn-warning me-2" onClick={() => handleStatus("On Going", _id)}>On Going</button>
                <button className="btn btn-success me-2" onClick={() => handleStatus("Done", _id)}>Done</button>
            </td>
        </tr>
    );
};

export default OrderListDetail;