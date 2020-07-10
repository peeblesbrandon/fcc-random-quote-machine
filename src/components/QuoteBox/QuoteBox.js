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
        const tweetURL = `https://twitter.com/intent/tweet?text="${this.state.quote}" - ${this.state.author}`;
        return (
            <div id="container" className="container-xs d-flex justify-content-center align-items-center vh-100 mt-md-3 overflow-auto">
                <div id="quote-box" className="col-md-6 p-4 d-flex flex-column text-info">
                    <h2 id="text" className="d-block text-left"><i className="fa fa-quote-left" />{this.state.quote}</h2>
                    <p id="author" className="align-self-end font-italic">- {this.state.author}</p>
                    <div className="d-flex justify-content-center btn-group">
                        <a className="btn btn-info font-weight-bold col-6" id="tweet-quote" rel="noopener noreferrer" target="_blank" href={tweetURL}><i className="fa fa-twitter" /> Share this quote</a>
                        <button onClick={this.handleClick} className="btn btn-info font-weight-bold col-6" variant="light" id="new-quote"><i className="fa fa-random" /> New quote</button>
                    </div>
                </div>
            </div>  
        );
    }
}

export default QuoteBox;