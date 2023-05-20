import './ToolBar.css'
import search from "../../images/search.svg";
import chevronDownAlt from "../../images/chevronDownAlt.svg";
import chevronUpAlt from "../../images/chevronUpAlt.svg";
import Eye from "../../images/Eye.svg";
import EyeClosed from "../../images/EyeClosed.svg";
import React, {useState} from 'react';

const ToolBar = () => {
    const [idiom, setIdiom] = useState(null);


    const idiomHendler = () => {
        setIdiom(current => !current);
    }
    return(
        <div className='tool-bar'>
            <input type='text' className='search' placeholder='Поиск'
            style={{ backgroundImage: `url(${search})`,
                    backgroundPosition: "right",
                    backgroundRepeat:"no-repeat",
                    backgroundSize: "24px"}} 
            />
            <button type='button' className='sort' >По алфавиту (A-Z)</button>
            <button type='button' className='idiom' 
            style ={{
                backgroundImage: idiom ? `url(${Eye}` : `url(${EyeClosed})`,
                backgroundPosition: "right",
                backgroundRepeat:"no-repeat",
                backgroundSize: "24px",
                color: idiom ? 'black' : 'gray'
            }} onClick={idiomHendler}> Идиомы </button>
        </div>
    );
}

export default ToolBar;