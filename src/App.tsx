import './App.css'
import { Button } from '@material-tailwind/react'
import { DefaultTable } from './components/TableDisplay'
import { useEffect, useState } from 'react'
import SupplierImpl, { Supplier } from './usercases/Supplier'

function App() {
  const [suppliers, setSuppliers] = useState<Supplier[]>()

  useEffect(() => {
    const getAll = async() => {
      const suppliersFromDb = await SupplierImpl.getSuppliers();
      setSuppliers(suppliersFromDb);
    }

  },[])

  return (
    <>
      <h2 className='text-3xl text-slate-500'>teste</h2>
      <Button>Aperte aqui</Button>
      <DefaultTable t_heads={["id","nome", "cnpj", "cidade"]} t_rows={suppliers}/>
    </>
  )
}

export default App
