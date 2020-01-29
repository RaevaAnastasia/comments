import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Article(props) {
    let [visible, setIsVisible] = useState(false);

    function onClickReadmore(e) {
        e.preventDefault();
        setIsVisible(true);
    }

    return ( <div className = "news__wrap">
            <p className = "news__author" > { props.data.author } </p>  
            <p className = "news__text" > { props.data.text } </p>  
            <button className = { "news__readmore " + (visible ? "none" : "") }
            onClick = { onClickReadmore } > Подробнее </button>  
            <p className = { "news__text " + (visible ? "" : "none") } > { props.data.bigText } </p> 
        </div>
    );
}

Article.propTypes = {
    data: PropTypes.shape({
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired
    })
}

export default Article;