import './MainMenu.css';
import BookOpen from "../images/BookOpen";
import FolderOpen from "../images/FolderOpen";

function MainMenu() {
    return (
        <div className='main-menu'>
            <button className='dict'
            style={{ backgroundImage: `url(${BookOpen})`}}></button>
            <button className='category'
            style={{ backgroundImage: `url(${FolderOpen})`}}></button>
        </div>
    )
}