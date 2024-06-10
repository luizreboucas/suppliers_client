
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
   
  const Adicionar = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <Card color="transparent" shadow={false} className="mt-8">
                <Typography variant="h4" color="blue">
                    Novo Fornecedor
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Adicione as informações do novo fornecedor abaixo.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Nome
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Cnpj
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Estado
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Logradouro
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Número
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Password
                    </Typography>
                    <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                </div>
                <Checkbox
                    label={
                    <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center font-normal"
                    >
                        I agree the
                        <a
                        href="#"
                        className="font-medium transition-colors hover:text-gray-900"
                        >
                        &nbsp;Terms and Conditions
                        </a>
                    </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6" fullWidth color="blue">
                    Adicionar
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Não quer adicionar?{" "}
                    <Link to={"/"} reloadDocument={true}>
                    Voltar
                    </Link>
                </Typography>
                </form>
            </Card>
        </div>
    );
  }

  export default Adicionar;