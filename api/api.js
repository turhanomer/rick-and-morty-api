import axios from "axios";

// API için temel URL oluştur
const api = axios.create({
  baseURL:"https://rickandmortyapi.com/api" 
});

export const getCharacters = (page = 1, filters = {}) => {
  const params = {page, ...filters}; // Sayfaya filtre parametreler ekle
  return api.get("/character", {params}); // istek yap
}