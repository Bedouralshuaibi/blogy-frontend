import React from 'react';
import './App.css';
import Articles from './articles/components/articles'
import apiURL from './apiConfig';
import NewArticle from './articles/components/newArticle';
import {addNewArticle} from './articles/api';
// import NewArticle from './articles/components/newArticle';
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      articles: [
        // {title: 'T1', author: 'A1', content: 'C1'},
        // {title: 'T2', author: 'A2' , content: 'C2'},
        // {title: 'T3', author: 'A3', content: 'C3'},
        // {title: 'T4', author: 'A4', content: 'C4'},
      ],
      
      title:"",
      author:'',
      content:[]
    
    };
    console.log('MY API URL is :', apiURL)
  }
  /// this function called when delete article to deleted it also from screen
  setAeticles = (articles)=>{
    this.setState({articles: articles})
  }
  //create new arrticle 
  handleAddtitle = (e)=>{
    // console.log(e.target.value)
    this.setState({title:e.target.value})
    console.log(this.state.title);

  }
  handleAuthour = (e)=>{
    this.setState({author:e.target.value})
    console.log(this.state.author);
  }
  handlecontent = (e)=>{
    this.setState({content:e.target.value})
    
  }
  submition = (e)=>{
    // this.setState({ 
    //   articles: [
    //     ...this.state.articles,
    //     {
    //       title: this.state.title,
    //       author: this.state.author,
    //       content:this.state.content
    //     }
    //   ],
    //   title:"",
    //   author:'',
    //   content:''

    // })
    console.log(`the article created`);
    addNewArticle()
    .then((response)=>{
      this.setState({ 
        articles: [
          ...this.state.articles,
          {
            title: this.state.title,
            author: this.state.author,
            content:this.state.content
          }
        ],
        title:"",
        author:'',
        content:''
  
      })
    }).catch((error)=>{
      console.log('api add new article error :', error)
  })
  }
  render(){
    return(
      
      <div className = "App">
        <header className="App-header">
           <p>Welcom to blogy</p>
        </header>
        <Articles 
        articles = {this.state.articles} 
        setArticles={this.setAeticles}/>
        <hr/>
        {/** create new blog */}
        <NewArticle 
         title= {this.state.title}
         author = {this.state.author}
         content = {this.state.content}
         handleAddtitle  = {this.handleAddtitle }
         submition = {this.submition}
         handleAuthour = {this.handleAuthour}
         handlecontent = {this.handlecontent}
         />
        </div>
       
      
      
      
    );
  }
}

export default App;

