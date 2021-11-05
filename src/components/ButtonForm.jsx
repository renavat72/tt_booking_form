import { useEffect, useState } from "react";

export const ButtonForm = ({values, setValues, validate, loading}) => {
    const [status, setStatus] = useState();
    var unix = Math.round(+new Date()/1000);
    useEffect(()=>{
        if(values.order.flatsCount <=1 ) return setStatus(`Забронировать ${values.order.flatsCount || ''} помещение`);
        if(values.order.flatsCount >= 2){ 
            if(values.order.flatsCount >= 5)return setStatus(`Забронировать ${values.order.flatsCount} помещений`)
            return setStatus(`Забронировать ${values.order.flatsCount} помещения`)
        }
    }, [values.order.flatsCount])
    const handleSubmit = () => {
        setValues({...values, order:{...values.order, time: unix}})
    }
    return(
        <button className="window_form_btn" type="submit" onClick={handleSubmit} disabled={!validate}>
            {!loading ? status : "Loading..."}
        </button>
    )
}