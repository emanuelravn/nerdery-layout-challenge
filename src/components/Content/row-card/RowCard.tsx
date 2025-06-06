import type { RowCardProps } from '../../../types/types'
import group8 from '../../../../src/assets/group8.png'
import './rowcard.css'

export const RowCard = ({iconColor, title, members, lastModified}: RowCardProps) => {
    return (
        <div className='row-card'>
            <span className='row-icon' style={{backgroundColor: iconColor}}> </span>
            <p className='row-card-title'>{title}</p>
            <p className='row-card-info'>{members}</p>
            <p className='row-card-info'>{lastModified}</p>
            <img src={group8} alt="dots" />
        </div>
    )
}