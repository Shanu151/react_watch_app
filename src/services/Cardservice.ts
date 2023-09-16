import { env } from "../../env"

export const cardservice =async () =>{
    const url=env.url
    // let response;
   return await  fetch(url)   
    }