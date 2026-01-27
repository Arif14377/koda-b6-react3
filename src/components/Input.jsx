function Input(props) {
    const {id, label, name, icon, alt, placeholder} = props
    return (
        <form>
            <label htmlFor={id}>{label}</label>
            <div>
                <img src={icon} alt={alt} />
                <input type="text" id={id} name={name} placeholder={placeholder} />
            </div>
        </form>
    )
}

export default Input