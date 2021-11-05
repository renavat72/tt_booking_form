import { useEffect, useState } from "react";

export const Theme = ({children}) => {
    const [night, setNight] = useState(false);
    const Time = new Date().getHours();
    useEffect(()=>{
      Time > 18|| Time < 6 ? setNight(true) : setNight(false)
    },[Time]);
    const backgroundImage = night ? 
            "https://0.pik.ru.cdn.pik-service.ru/undefined/2020/07/21/dsc06845_481909dfb262bfdcb554e38bd110c38f_eZGKKhSFQDqht6yz.jpg"
            : "https://0.pik.ru.cdn.pik-service.ru/undefined/2021/08/03/dji_0093.rev00_wj16guVhKoupGK8K.jpg"   
    return(
        <div className="App" style={{background:`center no-repeat url(${backgroundImage})`}}>
          {children}
        </div>
    )
  }