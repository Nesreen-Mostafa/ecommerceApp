"use server"

import { getUserToken } from "@/lib/token.utils";
import axios from "axios"



async function getuserCart() {

try {

    const token = await getUserToken();

    const response = await axios.get("https://ecommerce.routemisr.com/api/v1/cart" , {
        headers : {
            token :  token as string , 

        }
    });

    return {

        data : response?.data,
        status : response.status,
        message : response?.data.message

    }
    
} catch (error : unknown) {
    if(axios.isAxiosError(error)){

        return {

        data : [],
        status : error.response?.status,
        message : error.response?.data.message || "An error has occured"
    }
    }
   
    
}
}

async function addProductToCart(productId : string) {

try {

    const token = await getUserToken();

    const response = await axios.post("https://ecommerce.routemisr.com/api/v1/cart" ,{productId},
         {
        headers : {
            token :  token as string , 

        }
    });

    return {

        data : response?.data,
        status : response.status,
        message : response?.data.message

    }
    
} catch (error : unknown) {
    if(axios.isAxiosError(error)){

        return {

        data : [],
        status : error.response?.status,
        message : error.response?.data.message || "An error has occured"
    }
    }
   
    
}
}

async function removeProduct(productId : string) {

try {

    const token = await getUserToken();

    const response = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
         {
        headers : {
            token :  token as string , 

        }
    });

    return {

        data : response?.data,
        status : response.status,
        message : response?.data.message

    }
    
} catch (error : unknown) {
    if(axios.isAxiosError(error)){

        return {

        data : [],
        status : error.response?.status,
        message : error.response?.data.message || "An error has occured"
    }
    }
   
    
}
}

async function updateProduct(productId : string , count : number) {

try {

    const token = await getUserToken();

    const response = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {count},
         {
        headers : {
            token :  token as string , 

        }
    });

    return {

        data : response?.data,
        status : response.status,
        message : response?.data.message

    }
    
} catch (error : unknown) {
    if(axios.isAxiosError(error)){

        return {

        data : [],
        status : error.response?.status,
        message : error.response?.data.message || "An error has occured"
    }
    }
   
    
}
}

export { getuserCart , addProductToCart , removeProduct , updateProduct}