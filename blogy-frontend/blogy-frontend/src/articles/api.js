import apiURL from '../apiConfig';
import axios from 'axios';

// index, show, create , update, destroy
//get All Articles
const getAllArticles = ()=>{
    return axios.get(`${apiURL}/articles`)

};

// Delete Article by ID
const deleteArticleByID = (id) => {
    return axios.delete(`${apiURL}/articles/${id}`);
  }

  // add new article
  const addNewArticle = ()=>{
    return axios.post(`${apiURL}/articles`);
}
  export { getAllArticles, deleteArticleByID, addNewArticle };

  