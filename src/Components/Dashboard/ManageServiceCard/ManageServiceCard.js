import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageServiceCard = props => {
    const { name, charge, _id } = props.service

    const deleteService = id => {
        fetch(`https://infinite-waters-92433.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("A service has been successfully deleted.")
                }
            })
    }

    return (
        <tr>
            <td className="text-start">{name}</td>
            <td><span className="money-icon">${charge}</span></td>
            <td onClick={() => deleteService(_id)} style={{ cursor: 'pointer' }}><span className="delete-icon"><FontAwesomeIcon icon={faTrashAlt} /></span></td>
        </tr>
    );
};

export default ManageServiceCard;