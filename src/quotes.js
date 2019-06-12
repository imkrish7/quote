import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class QuoteBox extends React.Component{

    constructor(props){
        super(props);
        this.state={
            quoteArray:[],
            colorArray: ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"],
            quote:'',
            author:'',
            color:''
        }
        this.getQuote=this.getQuote.bind(this);
    }

    componentDidMount = () => {
      fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc")
            .then(res=>res.json())
            .then((result) => {
              this.setState({
                  quoteArray:result.quotes
              });
          }, (error) => {
              console.error(error);
          }).then(this.getQuote);

    }
     getQuote() {
         var col = Math.floor(Math.random() * this.state.colorArray.length);
         var quot = Math.floor(Math.random() * this.state.quoteArray.length);
        //  console.log(this.state.quoteArray[quot].quote);
           this.setState({
               quote:this.state.quoteArray[quot].quote,
               author:this.state.quoteArray[quot].author,
               color:this.state.colorArray[col]

           })
           var button=this.refs.button;
           var writter=this.refs.writter;
           var quote=this.refs.quote;
           this.props.change(this.state.color);
           quote.style.color=this.state.color;
           writter.style.color=this.state.color;
           this.refs.linka.style.color=this.state.color;
           this.refs.linkb.style.color = this.state.color;
           button.style.color=this.state.color;
           button.style.border="2px solid"+this.state.color;
     }
    render(){

        return(
        <div id="quote-box" ref="box">
        <blockquote id="text" ref="quote">
        {this.state.quote}
        </blockquote>
        <div id="author" ref="writter">- {this.state.author}</div>
        <div>
        <a href="www.twitter.com" target="_blank"><button className = "social" ref ="linka" > < FontAwesomeIcon icon = {["fab", "twitter"]} /></button></a>
        <a href="www.tumblr.com" target="_blank"><button className="social" ref="linkb"><FontAwesomeIcon icon={["fab","tumblr"]}/></button></a>
        <button id="new-quote" onClick={this.getQuote} ref="button">New Quote</button>
        </div>
         <hr/>
         <footer>By <em>Krishna Kamal</em></footer>
        </div>
        )
    }
}

export default QuoteBox;
