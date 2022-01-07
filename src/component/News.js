import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loder from './Loder';


export class News extends Component {
    
    constructor (){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
    hendleprevious= async()=>{
        console.log("pre");
        console.log("next");
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ff0e9c1da7e345c9b2c5e4131a5c8a70&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data =  await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles
        })
    }
    hendlenext= async()=>{
        console.log("next");
        if( this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ff0e9c1da7e345c9b2c5e4131a5c8a70&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            let data =  await fetch(url);
            let parsedData = await data.json()
            
            this.setState({
                page:this.state.page+1,
                articles:parsedData.articles
            })
        }
    }
     async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ff0e9c1da7e345c9b2c5e4131a5c8a70&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
     }
    render() {
        
        return (
            <div className="container my-5">
                <Loder/>
                <h3>News - Headline</h3>
                
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4 h-full my-3" key={element.url}>
                            <Newsitem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,90):""} imageurl={element.urlToImage} newsUrl={element.url} />
                        </div>
                        
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} onClick={this.hendleprevious} className="btn btn-sm btn-dark" >&larr;Previous</button>
                    <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.hendlenext} className="btn btn-sm btn-dark" >Next&rarr;</button>
                </div>
                
            </div>
        )
    }
}
 
export default News
