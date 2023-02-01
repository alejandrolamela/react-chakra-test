import { Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import './Login.css'
import { useForm } from "react-hook-form";

const Login = () => {

    const {register, handleSubmit} = useForm();

    const login = (datos) => {
        console.log(datos);
    }

  return (
    // Box funciona como los div normals y flex es como box pero incluye el display flex
    <Flex w="100%" minH="100vh" h="100%" justify="center" align="center">
    {/* La funcion handlesubmit es una funcion propia de useform y se encarga de controlar el onsubit y entre parentesis
    le decimos lo que queremos qu ehaga, en este caso imprimir por consola */}
    <form onSubmit={handleSubmit(login)}>
    <FormLabel>INTRODUCE TU USUARIO: </FormLabel>
    {/* Register es una funcion que lo que hace es recoger los valores de los input con el nombre que queramos, en este
    caso es username y password */}
        <Input
          h="30px"
          w='50%'
          borderRadius="4px"
          backgroundColor='white'
          p="2px"
          {...register('username')}
          border="none"
          placeholder="Username"
        />

        <FormLabel>INTRODUCE TU CONTRASEÑA:</FormLabel>
        <Input
          h="30px"
          w='50%'
          borderRadius="4px"
          backgroundColor='white'
          p="2px"
          {...register('password')}
          border="none"
          placeholder="Password"
          type='password'
        />

        <Button
          h="34px"
          borderRadius="4px"
          border="none"
          p="10px"
          colorScheme="red"
          type="submit"
        >
          Enviar
        </Button>
      
    
    </form>
      </Flex>
        
  );
};

export default Login;
