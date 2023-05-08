import ListUser from './components/ListUser/LIstUser';

import './ListUsers.css'

function ListUsers({users, handleRemov}) {

    const elementRenderUsers=()=>{
       return users.map((user, index)=>{
            return(
                <ListUser
                    key={user.id}
                    id={user.id}
                    index={index}
                    name={user.name}
                    username={user.username}
                    phone={user.phone}
                    onChange={handleRemov}
                />)
        })
    }
    return(
        <div className="wrap_table">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ім'я</th>
                        <th scope="col">Прізвище</th>
                        <th scope="col">Телефон</th>
                        <th scope="col"></th>
                    </tr>    
                </thead>
                <tbody>
                    {elementRenderUsers()}
                </tbody>
            </table>
        </div>
              
    )
}
export default ListUsers
  