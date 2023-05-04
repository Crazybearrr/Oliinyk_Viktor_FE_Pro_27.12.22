

function InputItem({type, title, name, price, calories, value, icon, onChange}) {
    return(

        <div>
            <input 
                type={type} 
                value={value} 
                name={name} 
                id={value} 
                onChange={onChange}/>
            <label 
                htmlFor={value}>
                {title} {icon} {price} тугриків {icon} {calories} калорій
            </label>
        </div>
    )
}

export default InputItem