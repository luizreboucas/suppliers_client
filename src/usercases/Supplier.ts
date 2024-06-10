import { deleteSupplier, getAllSuppliers, getSupplier, updateSupplier } from "../api/suppliers"; 
export type Endereco = {
    estado: string,
    cidade: string,
    logradouro: string,
    numero: string
}
export interface Supplier {
    id: number | undefined,
    nome: string | undefined,
    cnpj: string | undefined,
    endereco: Endereco | undefined
}

export default class SupplierImpl implements Supplier{
    id;
    nome;
    cnpj;
    endereco;

    constructor({id,nome,cnpj,endereco}: Supplier){
        this.id = id;
        this.nome = nome;
        this.cnpj = cnpj;
        this.endereco = endereco;
    }

    static getSuppliers = async() => {
        const response = await getAllSuppliers();
        return response.data;
    }

    public getOneSupplier = async() => {
        if(!this.id){
            throw new Error("id de fornecedor não fornecido")
        }
        const response = await getSupplier(this.id);
        return response.data;
    }

    public update = async() => {
        const response = await updateSupplier(this);
        return response.data
    }

    public delete = async() => {
        if(!this.id){
            throw new Error('fornecedor não encontrado')
        }
        const response =  await deleteSupplier(this.id);
        return response.data.content;
    }
}