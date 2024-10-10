//Importando a parte do backend 
import axios from "axios";

const favoritosApi = axios.create({ baseURL: "http://localhost:8000/favoritos" }); //criando a API

async function getFavoritos() { //informamos que a função vai ter códigos assincronos que trabalham em tempos diferentes
	const response = await favoritosApi.get("/")

	return response.data;
} //vai ser retornado todos os livros que fizermos a requisição

async function postFavorito(id) {
	await favoritosApi.post(`/${id}`);
}

async function deleteFavorito(id) {
	await favoritosApi.delete(`/${id}`);
}

export {
	getFavoritos,
	postFavorito,
	deleteFavorito,
}