function DataInput ({placeholder, value, onChange, name}){
    return(
        <input 
            type="text" 
            placeholder={placeholder} 
            name={name} 
            value={value} 
            onChange={onChange}
        />
    )
}

export default DataInput