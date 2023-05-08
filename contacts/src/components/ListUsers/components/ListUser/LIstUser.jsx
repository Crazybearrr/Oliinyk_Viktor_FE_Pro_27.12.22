import "@fortawesome/fontawesome-free/css/all.css";

function ListUser({name, username, phone, onChange, id, index}) {
    return(
        <>
            <tr>
                <td>{index+1}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{phone}</td>
                <td className="fas fa-trash-alt" onClick={()=>onChange(id)}></td>
            </tr>
        </>
    )
}
export default ListUser