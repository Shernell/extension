import './MainMenu.css';
import BookOpen from "../images/BookOpen.svg";
import FolderOpen from "../images/FolderOpen.svg";

const MainMenu = () => {
    return (
        <div className='main-menu'>
            <button title='Словарь' className='dict'
            style={{ backgroundImage: `url(${BookOpen})`}}></button>
            <button title='Категории' className='category'
            style={{ backgroundImage: `url(${FolderOpen})`}}></button>
        </div>
    );
}

export default MainMenu;