function Input(props) {
    const {id, label, name, icon, alt, placeholder, onInput, value} = props
    return (
        <form>
            <label htmlFor={id}>{label}</label>
            <div>
                <img src={icon} alt={alt} />
                <input type="text" id={id} name={name} placeholder={placeholder} onInput={onInput} value={value}/>
            </div>
        </form>
    )
}

export default Input