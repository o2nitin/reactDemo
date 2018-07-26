import React from 'react';
export default class UserListElement extends React.Component
{
    render()
    {
        const user = this.props.user;
        return(
            <tr>
                <td className="text-danger">#{user.id}</td>
                <td>{user.username}</td>
                <td>{user.job}</td>
                <td>
                    <a href={'/user-edit/' + user.id} className="btn-success">
                        Edit
                    </a>
                </td>
                <td>
                    <button className="btn-danger" data-id={user.id}>Delete</button>
                </td>
            </tr>
        );
    }
}

