import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { postData } from '../../store/asyncActions';
import { ButtonForm } from '../ButtonForm';
import { InputForm } from '../InputForm';
import './index.css'

export const FormWindow = ({loading}) => {
    const [validate, setValidate] = useState(false);
    const dispatch = useDispatch();
    const [values, setValues] = useState({
    user:{
        firstName:'',
        lastName:'',
        mail:'',
        phone:''
    },
    order:{
        flatsCount:0,
        time: 0,
    }
});
    useEffect(()=>{
        if(values.user.firstName && values.user.lastName && values.user.mail && values.user.phone && values.order.flatsCount){
            setValidate(true)
        }
    },[values])
    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(postData(values))
        console.log(values)
    }
    return(
        <div className="window">
            <div className="window_title">
                Добрый вечер
            </div>
            <div className="window_description">
                Для бронирования помещений заполните форму
            </div>
            <form noValidate onSubmit={onSubmit}>
                <div className="window_form">
                    <div>
                        <div>
                            <InputForm name="firstName" placeholder="Ваше имя" type="text" values={values} setValues={setValues}/>
                        </div>
                        <div>
                            <InputForm name="lastName" placeholder="Ваша фамилия" type="text" values={values} setValues={setValues}/>
                        </div>
                    </div>
                    <div>
                        <InputForm name="phone" type="number" placeholder="Телефон" values={values} setValues={setValues}/>
                        <InputForm name="mail" placeholder="E-mail" type="text" values={values} setValues={setValues}/>
                        <InputForm name="flatsCount" placeholder="Количество помещений"type="number" values={values}setValues={setValues}/>
                        <ButtonForm values={values} setValues={setValues} validate={validate} loading={loading}/>
                    </div>
                </div>
            </form>
                <div className="window_subtitle">
                   Это дисклеймер, который есть во всех формах
                </div>
       </div>
    )
}