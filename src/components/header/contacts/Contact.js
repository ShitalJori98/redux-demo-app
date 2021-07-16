import React from 'react'

const Contact = ({contact}) => {
const {name,phone,email}=contact
    return (
        <tr>
                                <td>
                                <div className="custom-control custom-checkbox">
                                    <input
                                       
                                        type="checkbox"
                                        className="custom-control-input"
                                                />
                                    <label className="custom-control-label"></label>
                                </div>
                                </td>
                                <td>{contact.name}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td>
                                    <a href='#'>
                                        <span className="material-icons">edit</span></a>
                                    <a href='#'>
                                    <span className="material-icons">delete</span></a>
                                </td>
                            </tr>
    )
}

export default Contact
