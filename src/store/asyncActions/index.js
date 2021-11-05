import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, POST_DATA_SUCCESS, POST_DATA_ERROR, POST_DATA, FETCH_DATA } from "../types";

export const fetchData = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_DATA });
          await fetch('https://api.pik.ru/v2/offer/special?types=1,2&locations=2,3')
                .then(response => {
                    return response.json();
                })
                .then(responseJson =>{
                    dispatch({
                      type:FETCH_DATA_SUCCESS,
                      payload: responseJson,
                    });
                })
      } catch (e) {
        dispatch({
          type: FETCH_DATA_ERROR,
          payload: "Loading is error",
        });
      }
}
export const postData = (value) => async (dispatch) => {
    try {
        dispatch({ type: POST_DATA }); 
        await fetch('https://strapi.pik.ru/front-tests',{
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'
            },
            body: JSON.stringify(value)
          })
                .then(response => {
                    return response.json();
                })
                .then(responseJson =>{
                  setTimeout(()=>{
                    dispatch({
                    type:POST_DATA_SUCCESS,
                    payload: responseJson,
                  });
                },1000)  // Исскуственная задержка
                })
      } catch (e) {
        setTimeout(()=>{
          dispatch({
            type: POST_DATA_ERROR,
            payload: true,
          });
        },1000) // Исскуственная задержка
        
      }
}