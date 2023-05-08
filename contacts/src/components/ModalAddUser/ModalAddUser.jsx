import { useState } from "react";

import ClickButton from "../ui/ClickButton/ClickButton";
import DataInput from "../ui/DataInput/DataInput";

// import * as z from "zod";

import "./ModalAddUser.css";

// const schemaValidation = z.object({
//   name: z.string().regex(/^[a-zA-Zа-яА-Я]{2,}$/).min(2, {
//     message: "Имя должно содержать не менее 2 символов",
//   }),
//   username: z.string().regex(/^[a-zA-Zа-яА-Я]{3,}$/).min(3, {
//     message: "Имя должно содержать не менее 3 символов",
//   }),
//   phone: z.string().regex(/^(\+38)?0\d{9}$/, {
//     message: "Номер телефона должен содержать не менее 10 цифр",
//   }),
// });

function ModalAddUser({ closeModal, handleAdd }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
//   const [validationErrors, setValidationErrors] = useState({});

  function handleValue(event) {
    const value = event.target.value;
    const name = event.target.name;
    if (name === "name") {
      setName(value);
    } else if (name === "username") {
      setUsername(value);
    } else if (name === "phone") {
      setPhone(value);
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    // const valueInput = { name, username, phone };
    // const validationValueInput = schemaValidation.safeParse(valueInput);
    // if (!validationValueInput.success) {
    //     // console.log(validationValueInput.error.flatten());
    //   setValidationErrors(validationValueInput.error.flatten());
    //   return;
      
    // } else {
      handleAdd(name, username, phone);
      setName("");
      setPhone("");
      setUsername("");
    // }
  }

    return (
        <div className="modal">
        <div className="modal-close" onClick={closeModal}>
            &#10005;
        </div>
        <form className="modal-content">
            <h2>Додати нового співробітника</h2>

            <DataInput
            placeholder="Ім'я"
            name="name"
            value={name}
            onChange={handleValue}
            />
{/* 
            {validationErrors.name && (
            <div className="error">{validationErrors.name}</div>
            )} */}

            <DataInput
            placeholder="Прізвище"
            name="username"
            value={username}
            onChange={handleValue}
            />

            {/* {validationErrors.username && (
            <div className="error">{validationErrors.username}</div>
            )} */}

            <DataInput
                placeholder={"Номер телефону"}
                name={"phone"}
                value={phone}
                onChange={handleValue}
            />

            {/* {validationErrors.phone && (
                <div className="error">{validationErrors.phone}</div>
            )} */}
            
            <div>
                <ClickButton
                    title={"Зберігти"}
                    handleClick={onSubmit}
                />
                <ClickButton
                    title={"Скасувати"}
                    handleClick={closeModal}
                />
            </div>
            </form>
        </div>
    )
}

export default ModalAddUser