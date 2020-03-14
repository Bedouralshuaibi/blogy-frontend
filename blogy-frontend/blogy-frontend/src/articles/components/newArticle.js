import React from 'react';


class NewArticle extends React.Component {
    
    render(){
        return(
            <>
            {/** create new blog */}
        <h3>create new blog</h3>
        <label>Blog Title: </label>
        <input onChange={this.props.handleAddtitle}
            value = {this.props.title}></input><br/>
        <label>Author: </label>
        <input onChange={this.props.handleAuthour}
        value = {this.props.author}></input><br/>
        <label>content: </label><br/>
        <textarea onChange={this.props.handlecontent}
            value= {this.props.content}
        /> <br/>
        <button onClick={this.props.submition}>Submit</button><br/>
        <br/><br/>
        </>
            
           
        
        )}
}

export default NewArticle;