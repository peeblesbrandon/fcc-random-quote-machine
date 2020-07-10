import React from 'react';
import './QuoteBox.css';
import QuotesList from '../QuoteBox/QuotesList.json';

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        let initialQuote = this.randomQuote();
        this.state = {
            quote: initialQuote.quote,
            author: initialQuote.author
        };
        this.handleClick = this.handleClick.bind(this);
    }
    // get a random quote
    randomQuote() {
        let randomIndex = Math.floor(Math.random() * QuotesList.length);
        return QuotesList[randomIndex];
    }
    // handle clicks
    handleClick() {
        let newQuote = this.randomQuote();
        this.setState({
            quote: newQuote.quote,
            author: newQuote.author
        });
    }
    // render the final quote box
    render () {
        return (
            <div id="container" className="container-xs d-flex justify-content-center align-items-center vh-100 bg-info">
                <div id="quote-box" className="col-10 p-4 d-flex flex-column text-info">
                    <h1 id="text" className="d-block text-left">"{this.state.quote}"</h1>
                    <p id="author" className="align-self-end font-italic">- {this.state.author}</p>
                    <div className="d-flex justify-content-between">
                        <a className="btn btn-info" id="tweet-quote" href="www.twitter.com/intent/tweet"><i className="fa fa-twitter fa-2x" /></a>
                        <button onClick={this.handleClick} className="btn btn-info font-weight-bold" variant="light" id="new-quote">New quote</button>
                    </div>
                </div>
            </div>  
        );
    }
}

export default QuoteBox;