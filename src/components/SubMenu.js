import "./SubMenu.css";
import SetingsAlt from "./images/SetingsAlt.svg"
import Download from "./images/Download.svg"

function SubMenu(){
    return(
        <div className="sub-menu">
            <div title="Настройки" className="icon"
            style={{ backgroundImage: `url(${Download})`}}></div>
            <div title="Скачать в формате pdf" className="icon"
            style={{ backgroundImage: `url(${SetingsAlt})`}}></div>
        </div>
    );
}

export default SubMenu;