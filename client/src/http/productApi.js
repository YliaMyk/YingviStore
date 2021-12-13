import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";
import CreateMaster from "../components/Models_admin/CreateMaster";


export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async (categoriesId) => {
    const {data} = await $host.get('api/type', {params:{
            categoriesId
        }})
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/categories')
    return data
}

export const createProduct = async (type) => {
    const {data} = await $authHost.post('api/product', type)
    return data
}

export const fetchProduct = async ( typeId, brandId, page, limit) => {
    const {data} = await $host.get('api/product', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}

export const createMaster = async (master) => {
    const {data} = await $authHost.post('api/master', master)
    return data
}

export const fetchMaster = async () => {
    const {data} = await $host.get('api/master')
    return data
}

export const fetchOneMaster = async (id) => {
    const {data} = await $host.get('api/master/' + id)
    return data
}

export const createBasket = async (userId, productId) => {
    const {data} = await $authHost.post('api/basket',
        {params: {userId, productId}})
    return data
}

export const fetchBasket = async (userId) => {
    const {data} = await $host.get('api/basked', {params: {userId}})
    return data
}