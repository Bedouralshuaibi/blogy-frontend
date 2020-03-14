import React from 'react';
import Article from './article';
import {getAllArticles, deleteArticleByID } from '../api';


class Articles extends React.Component {
    componentDidMount(){
        //make api call
        /*  index, show , destroy, update , create 
        */
       getAllArticles()
       .then((response)=>{
           this.props.setArticles(response.data.articles)
       })
       .catch((error)=>{
           console.log(`API ERROR:`, error)
       })

    }
    //////////////////////////// delete /////////////
    deleteArticle = (id)=>{
        console.log('the article id delete', id);
        deleteArticleByID(id)
        .then((response)=>{
            console.log(`the Article with the ${id} has been delete`)
            // to deleted it from screen //
            const newArticlesList = this.props.articles.filter((article)=>{
              return article._id !== id
            });
            this.props.setArticles(newArticlesList)
        }).catch((error)=>{
            console.log('api error :', error)
        })
    }
    render(){
        let allArticles = <h4>no Articles</h4>
          if (this.props.articles.length > 0) {
        allArticles = this.props.articles.map((article, index)=>{
            return <Article title={article.title}
                            author = {article.author}
                            content = {article.content}
                            id={article._id}
                            deleteArticle={this.deleteArticle}
                            key = {index} />
        });
    }
        return(

            <>
            <h3>All Articles</h3>
            {allArticles}
            <Article/>
            </>
        );
    }
}

export default Articles;