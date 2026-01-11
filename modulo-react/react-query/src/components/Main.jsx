import { useQuery } from "@tanstack/react-query";

export const Main = () => {
  const fetchData = async () => {
    const response = await fetch("https://viacep.com.br/ws/01001000/json/");
    return await response.json();
  };

  const data = useQuery('cep', fetchData)
console.log(data);

  return (
    <>

    </>
  )
};
