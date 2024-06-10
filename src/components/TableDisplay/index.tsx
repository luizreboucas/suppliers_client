import { Card, Typography } from "@material-tailwind/react";
import { Supplier } from "../../usercases/Supplier";
import TableRow from "../TableRow";

 
export function DefaultTable({t_heads, t_rows}) {
  return (
    <Card className=" max-w-screen-xl h-full w-full overflow-scroll">
      <table className="w-full max-w- min-w-max table-auto text-left">
        
        <thead>
          <tr>
            {t_heads.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">editar</th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">excluir</th>
          </tr>
        </thead>
        <tbody>
          {t_rows.map(({ id, nome, cnpj, endereco }: Supplier, index) => {
            const classes = "p-4 border-b border-blue-gray-50";
            
            return (
              <TableRow
                nome={nome}
                id={id}
                cnpj={cnpj}
                endereco={endereco}
                classes={classes}
              />
            )
          })}
        </tbody>
      </table>
      
    </Card>
  );
}