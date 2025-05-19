import './sidebar.css'

export const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='skeleton-container'>
                <div className='skeleton'></div>
            </div>
            <div className='list-menu'>
                <p style={{color: 'white'}}><span className='square' style={{border: '1px solid white'}}> </span>Home</p>
                <p><span className='square'> </span>My Files</p>
                <p><span className='square'> </span>Recent Files</p>
                <p><span className='square'> </span>Shared Filed</p>
                <p><span className='square'> </span>File Request</p>
                <p><span className='square'> </span>Trash</p>
            </div>
            <div className='button-container'>
                <div className="idea-container">
                    <div className='list-container'>
                        <p><span className='square2'> </span>Upload files</p>
                        <p><span className='square2'> </span>Upload folder</p>
                        <p><span className='square2'> </span>New folder</p>
                        <p><span className='square2'> </span>More</p>                            
                    </div>
                    <div className="tail"></div>
                </div>
                <button className='create-button'><span className='button-text'>Create New</span> <span className='plus-sign'>+</span></button>
            </div>
            
        </div>
    )
}