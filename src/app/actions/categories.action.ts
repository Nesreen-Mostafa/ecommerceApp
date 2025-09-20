"use server"

import axios from "axios"


async function getCategories() {

try {

    const response = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");

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

async function getCategoryDetails(id:string) {
    

try {

    const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);


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

async function getSubCategory(categoryID:string) {

try {

    const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${categoryID}/subcategories`);

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

async function getSpecificSubCategory(categoryID:string) {

try {

    const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/subcategories/${categoryID}`);

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

export {
    getCategories,getCategoryDetails,getSubCategory,getSpecificSubCategory
}