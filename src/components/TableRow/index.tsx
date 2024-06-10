import SupplierImpl, { Endereco} from "../../usercases/Supplier";
import { Button, Typography } from "@material-tailwind/react";
import { fetchTrue, fetchFalse } from "../../redux/slices/fetchSlice";
import { useDispatch } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
type props = {
    id: number | undefined,
    nome: string | undefined,
    cnpj: string | undefined,
    endereco: Endereco | undefined,
    classes: string | undefined
}


const TableRow = ({id, nome, cnpj, endereco, classes}: props) => {
    const supplier = new SupplierImpl({id,nome,cnpj,endereco});
    const dispatch = useDispatch();
    const deleteFn = async() => {
        await supplier.delete()
        dispatch(fetchTrue());
    }
    
    return (
        <tr key={id}>
          <td className={classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {id}
            </Typography>
          </td>
          <td className={classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {nome}
            </Typography>
          </td>
          <td className={classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {cnpj}
            </Typography>
          </td>
          <td className={classes}>
            <Typography
              as="a"
              href="#"
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              {endereco.estado}
            </Typography>
          </td>
          
          <td className={classes}>
            <Button 
            color="blue" 
            size="sm"
            onClick={deleteFn}
            >
                <FaRegEdit/>
            </Button>
          </td>
          <td className={classes}>
            <Button 
            color="red" 
            size="sm"
            onClick={deleteFn}
            >X</Button>
          </td>
        </tr>
      );
}

export default TableRow;