import './ToolBar.css'

function ToolBar() {
    return(
        <div className='tool-bar'>
            <input type='text' className='search' />
            <button type='button' className='sort'></button>
            <button type='button' className='idiom'> Идиомы </button>
        </div>
    );
}

export default ToolBar;