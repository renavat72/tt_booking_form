import React from 'react'
import failIcon from "../../img/fail.svg";
import successIcon from "../../img/success.svg";

export const ResultWindow = ({error}) => {
  return(
        <div className="window">
            {error ? 
            <div className="window_result">
                <img alt="minus" src={failIcon} className="window_icon"/>
                <div className="window_result_text">Ошибка. Попробуйте позже</div> 
            </div> 
               :
             <div className="window_result">
                <img alt="minus" src={successIcon} className="window_icon"/>
                <div className="window_result_text">Ваша заявка отправлена</div> 
            </div>
            }
        </div>
    )
}