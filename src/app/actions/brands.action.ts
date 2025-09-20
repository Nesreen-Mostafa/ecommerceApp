"use server"

import axios from "axios"


async function getBrand() {

try {

    const response = await axios.get("https://ecommerce.routemisr.com/api/v1/brands");

    return {

        data : response?.data.data,
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

async function getBrandDetails(id:string) {

try {

    const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);

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

export {
     getBrand, getBrandDetails
}