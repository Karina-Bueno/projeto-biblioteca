//Importando a parte do backend 
import axios from "axios";

const livrosApi = axios.create({ baseURL: "http://localhost:8000/livros" }); //criando a API

async function getLivros() { //informamos que a função vai ter códigos assincronos que trabalham em tempos diferentes
	const response = await livrosApi.get("/")

	return response.data;
} //vai ser retornado todos os livros que fizermos a requisição

export {
	getLivros,
}