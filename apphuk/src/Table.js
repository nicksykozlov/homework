
function Table(props){
    const users = props.users;
    return(
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>adress</th>
                </tr>
            </thead>
            <tbody> 
                {users.map(user=>(
                    <tr
                    className={props.selectedUserId === user.id ? 'selected': ''}
                    key={user.id}
                    onClick = {()=>props.onSelectUser(user.id)}
                    >
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.adge}</td>
                        <td>{user.address.address}{user.address.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};
export default Table