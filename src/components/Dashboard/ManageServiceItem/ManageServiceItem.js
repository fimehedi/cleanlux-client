import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ManageServiceItem = ({ service: { _id, title, serviceCost }, handleDelete }) => {
    return (
        <tr>
            <td>{title}</td>
            <td className="text-center">${serviceCost}</td>
            <td className="text-right">
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(_id)}>
                    <FontAwesomeIcon icon={faTrash} /> <span className="ml-2">Delete</span>
                </button>
            </td>
        </tr>
    );
};

export default ManageServiceItem;