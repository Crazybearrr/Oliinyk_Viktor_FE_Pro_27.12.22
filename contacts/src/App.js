import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ListUsers from './components/ListUsers/ListUsers';
import ClickButton from './components/ui/ClickButton/ClickButton';
import ModalAddUser from './components/ModalAddUser/ModalAddUser';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  function removUser(id) {
    setUsers((prevUsers)=>prevUsers.filter((user)=> user.id !== id))
  };

  function createUser(name, username, phone) {
    const newUser=  {
      "id": uuidv4(),
      "name": name,
      "username": username,
      "phone": phone,
    };
    setUsers((prevUsers)=>[...prevUsers, newUser]);
    // setOpen(false);
  };
 
  function openCloseModal() {
    if (!open) {
      setOpen(true)  
    }else{
      setOpen(false)
    }
  };

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
        if (!response.ok){
          throw new Error('Network response was not ok');
        } 
        return response.json();
        })
        .then(users=>setUsers(users))
        .catch(error=>setError(error))
  },[]);

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div className="App">
      <ListUsers
        users={users}
        handleRemov={removUser}
      />

      <div className="wrap_add_form">
        <ClickButton
          title={"Додати нового"}
          handleClick={openCloseModal}
        />
      </div>

      {open && (
          <ModalAddUser
            closeModal={openCloseModal}
            handleAdd={createUser}
          />
        )}
    </div>
  );
}

export default App;
