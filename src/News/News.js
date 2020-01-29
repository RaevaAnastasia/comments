import React from 'react';
import Article from '../Article/Article.js';
import './News.css';

function News(props) {
    let data = props.data;
    let newsList = data.map(function(elem, index) {
            return ( < Article key = { index } data = { elem }/>);
            });

    let noNews = function() {
        return ( <div className = "news__no" >
            <p > К сожалению, новостей нет </p>  
            </div>
        );
    }

    return ( <div className = "news"> 
        { data.length === 0 ? noNews() : newsList }
        <strong> Всего комментариев: { data.length } </strong>  
        </div>
    );
}

export default News;