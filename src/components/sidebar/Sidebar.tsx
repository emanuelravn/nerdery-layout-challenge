import { useState } from 'react'
import './sidebar.css'

const menuItems = ['Home', 'My Files', 'Recent Files', 'Shared Filed', 'File Request', 'Trash']

export const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState('Home')

    return (
        <div className='sidebar-container'>
            <div className='skeleton-container'>
                <div className='skeleton'></div>
            </div>
            <div className='list-menu'>
                {menuItems.map(item => (
                    <p
                        key={item}
                        className={`menu-item ${selected === item ? 'active' : ''}`}
                        onClick={() => setSelected(item)}
                        style={selected === item ? {color: 'white'} : {color: '#858A9D'}}
                    >
                        <span className='selector' />
                        <span className='square' style={selected === item ? {border: '1px solid white'} : {color: '1px solid #858A9D'}}/> 
                        <span className='menu-title'>{item}</span>
                    </p>
                ))}
            </div>
            <div className='button-container'>
                {open && (
                    <div className="idea-container">
                        <div className="list-container">
                            <p><span className="square2" />Upload files</p>
                            <p><span className="square2" />Upload folder</p>
                            <p><span className="square2" />New folder</p>
                            <p><span className="square2" />More</p>
                        </div>
                        <div className="tail" />
                    </div>
                )}
                <button onClick={() => setOpen(prev => !prev)} className='create-button'>
                    <span className='button-text'>Create New</span>
                    <span className='plus-sign'>+</span>
                </button>
            </div>
        </div>
    )
}
