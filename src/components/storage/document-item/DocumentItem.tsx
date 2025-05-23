import type { DocumentItemProps } from '../../../types/types'
import './documentitem.css'

export const DocumentItem = ({iconColor, title, files, size, isLast}: DocumentItemProps) => {
    return (
       <div className='document-item' style={isLast ? {borderBottom: 'none'}: {borderBottom: '1px solid #E0E7F1'}}>
            <span className='document-icon' style={{backgroundColor: iconColor}}> </span>
            <div className='document-info'>
                <p className='document-title'>{title}</p>
                <p className='files'>{files}</p>
            </div>
            <p className='size'>{size}</p>
        </div>
    ) 
}