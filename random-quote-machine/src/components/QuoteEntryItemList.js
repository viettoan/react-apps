import React from "react";
import { connect } from 'react-redux';
import './QuoteEntryItemList.css';
import { addQuote, changeQuote } from "../actions";

const mapStateToProps = state => {
    return {
        quotes: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddQuote: quote => {
            dispatch(addQuote((quote)));
        },
        onChangeQuote: id => {
            dispatch(changeQuote((id)));
        },
    }
}

class QuoteEntryItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuoteId: 0
        }
        if (this.props.quotes.list.length === 0) {
            const items = [
                {id: 0, content: "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.", author: 'Unknown', color: "39, 174, 96"},
                {id: 1, content: "When I let go of what I am, I become what I might be.", author: 'Lao Tzu', color: "189, 187, 153"},
                {id: 2, content: "The question isn’t who is going to let me; it’s who is going to stop me.", author: 'Ayn Rand', color: "39, 174, 96"},
                {id: 3, content: "You miss 100% of the shots you don’t take.", author: 'Wayne Gretzky', color: "231, 76, 60"},
                {id: 4, content: "I would rather die of passion than of boredom.", author: 'Vincent van Gogh', color: "39, 174, 96"},
                {id: 5, content: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author: 'Maya Angelou', color: "155, 89, 182"},
                {id: 6, content: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.", author: 'Jesus', color: "243, 156, 18"},
                {id: 7, content: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: 'Amelia Earhart', color: "39, 174, 96"},
                {id: 8, content: "Strive not to be a success, but rather to be of value.", author: 'Albert Einstein', color: "231, 76, 60"},
                {id: 9, content: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", author: 'Aristotle', color: "243, 156, 18"},
                {id: 10, content: "Everything you’ve ever wanted is on the other side of fear.", author: 'George Addair', color: "231, 76, 60"},
            ];

            items.forEach(item => {
                this.props.onAddQuote({
                    id: item.id,
                    content: item.content,
                    author: item.author,
                    color: item.color
                })
            })
        }
    }

    handleChange = (e) => {
        this.props.onChangeQuote(this.autoIncrementQuoteId())
    }

    autoIncrementQuoteId() {
        return this.props.quotes.currentQuoteId + 1 > this.props.quotes.list.length - 1 ? 0 : this.props.quotes.currentQuoteId + 1;
    }

    getQuote() {
        return this.props.quotes.list.find(item => item.id === this.props.quotes.currentQuoteId);
    }

    render() {
        const quote = this.getQuote();
        document.body.style.backgroundColor = `rgb(${quote?.color})`;
        document.body.style.color = `rgb(${quote?.color})`;

        return (
            <div id="wrapper" style={{color: `rgb(${quote?.color})`, backgroundColor: `rgb(${quote?.color})`}}>
                <div id="quote-box">
                    <div className="quote-text" style={{opacity: 1}}>
                        <i className="fa fa-quote-left"> </i><span id="text">{ quote?.content }</span>
                    </div>
                    <div className="quote-author" style={{opacity: 1}}>- <span id="author">{ quote?.author}</span></div>
                    <div className="buttons">
                        <a className="button" id="tweet-quote" title="Tweet this quote!" target="_top"
                           href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Everything%20you%E2%80%99ve%20ever%20wanted%20is%20on%20the%20other%20side%20of%20fear.%22%20George%20Addair"
                           style={{backgroundColor: `rgb(${quote?.color})`}}>
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank"
                           href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=George%20Addair&amp;content=Everything%20you%E2%80%99ve%20ever%20wanted%20is%20on%20the%20other%20side%20of%20fear.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
                           style={{backgroundColor: `rgb(${quote?.color})`}}>
                            <i className="fa fa-tumblr"></i>
                        </a>
                        <button className="button" id="new-quote" style={{backgroundColor: `rgb(${quote?.color})`}} onClick={(e) => this.handleChange(e)}>
                            New quote
                        </button>
                    </div>
                </div>
                <div className="footer">by <a href="https://codepen.io/hezag/">Viet Toan</a></div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuoteEntryItemList);