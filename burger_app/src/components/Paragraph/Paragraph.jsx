function Paragraph({text, result, currency, className}) {
    return(
        <p className={className}>{text}{result}{currency}</p>    
    )
}
export default Paragraph