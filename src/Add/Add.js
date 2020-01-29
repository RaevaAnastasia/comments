import React,  {useRef, useState} from 'react';
import './Add.css';

function Add (props) {
    let author = useRef();
    let text = useRef();
    let agree = useRef();
    let button = useRef();
    let [isDisabled, setIsDisabled] = useState(true);
    let [isAuthor, setIsAuthor] = useState(true);
    let [isText, setIsText] = useState(true);

    function onFieldChange (setter, e) {
        e.target.value.trim().length > 0 ? setter(false) : setter(true);
    }

    function showValue(e) {
        e.preventDefault();
        let item = [{
            author: author.current.value,
            text: text.current.value,
            bigText: '...'
        }];
        
        props.updateNews(item, props.data);
    }

    function onCheck (e) {
       setIsDisabled(!isDisabled);
    }

    return (<form className="add">
            <input className="add__author-field" 
            type="text" 
            defaultValue="" 
            placeholder="Ваше имя" 
            ref={author}
            onChange={onFieldChange.bind(this, setIsAuthor)}/>
            <textarea className="add__text" 
            defaultValue=""
            placeholder="Ваш комментарий"
            ref={text}
            onChange={onFieldChange.bind(this, setIsText)}></textarea>
            <div className="add__wrap">
                <input className="add__check" 
                type="checkbox" 
                id="agree"
                defaultChecked={false}
                ref={agree}
                onChange={onCheck}/>
                <label className="add__label" for="agree">Я согласен с правилами сообщества</label>
            </div>
            <button className="add__button" 
            onClick={showValue} 
            ref={button} 
            disabled={isDisabled || isAuthor || isText}>Добавить комментарий</button>
        </form>
    );
}

export default Add;