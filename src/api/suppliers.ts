import axios from "axios";
import { Supplier } from "../usercases/Supplier";

const request = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        "Content-Type": "application/sjon"
    }
})

export const getAllSuppliers = () => {
    const response = request.get("/suppliers");
    return response;
}

export const getSupplier = (id: number) => {
    const supplier = request.get(`/${id}`);
    return supplier
}

export const updateSupplier = (supplierData: Supplier) =>{
    const response = request.put(`/${supplierData.id}`, {
        nome: supplierData.nome,
        endereco: supplierData.endereco,
        cnpj: supplierData.cnpj
    })
    return response;
}

export const deleteSupplier = (id: number) => {
    const response = request.delete(`/suppliers/${id}`);
    return response
}
