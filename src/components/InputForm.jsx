export const InputForm = ({name, placeholder, values, setValues, type}) => {
    const handleChange = (event) => {
        if(name==="flatsCount") return setValues({...values,order:{...values.order,[event.target.id]: event.target.value}});
        setValues({...values,user:{...values.user,[event.target.id]: event.target.value}})
    }
    return(
        <label htmlFor={name} className="window_form_label">
            <input 
                   type={type} 
                   id={name} 
                   className="window_form_input" 
                   placeholder="&nbsp;" 
                   value={values.name} 
                   onChange={handleChange}/>
            <span className="window_form_span">{placeholder}</span>
        </label>
    )
}