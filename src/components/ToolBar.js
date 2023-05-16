import './ToolBar.css'

function ToolBar() {
    return(
        <div className='tool-bar'>
            <button className='search'></button>
            <button className='sort'></button>
            <button className='idiom'> Идиомы </button>
        </div>
    );
}

export default ToolBar;