import './App.css'
import { Button, IconButton } from '@material-tailwind/react'
import { DefaultTable } from './components/TableDisplay'
import { useEffect, useState } from 'react'
import SupplierImpl, { Supplier } from './usercases/Supplier'
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFalse, fetchTrue } from './redux/slices/fetchSlice'
import { Link } from 'react-router-dom'

function App() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([])
  const dispatch = useDispatch();
  const fetch = useSelector(state => state.fetch);
  
  useEffect(() => {
    const getAll = async() => {
      const suppliersFromDb = await SupplierImpl.getSuppliers();
      setSuppliers(suppliersFromDb.content);
      console.log(suppliers)
    }

    if(fetch){
      getAll()
      .then(()=>{
        dispatch(fetchFalse());
      })
    }
    

  },[fetch])

  return (
    <div className='flex flex-col gap-8 items-center'>
      <Header/>
      <div className='max-w-screen-xl ml-2 md:ml-0 md:h-full md:w-full'>
        <Button color='blue'>
          <Link to={"/adicionar"}>Adicionar Fornecedor</Link>
        </Button>
      </div>
      <DefaultTable t_heads={["id","nome", "cnpj", "estado"]} t_rows={suppliers}/>
    </div>
  )
}

export default App
