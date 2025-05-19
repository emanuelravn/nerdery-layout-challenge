import type { CardProps } from '../../../types/types'
import './card.css'

export const Card = ({icon, title, createdAt, hasMore, width, height, margins, dots, circleBorderColor, count}: CardProps) => {
    return (
        <div className='card' style={{width: width, height: height}}>
            <div className='card-header' style={{marginTop: margins?.marginTopHeader}}>
                {icon ? <img src={icon} alt="img" className='card-icon'/> : <img src="../src/assets/grupo5.png" alt="img" className='card-icon'/>}
                {hasMore ? <><span className='circle1-special' style={{marginLeft: margins?.marginLeftCircle, border: `1px solid ${circleBorderColor?.[0]}`}}> </span><span className='circle2-special' style={{border: `1px solid ${circleBorderColor?.[1]}`}}> </span><span className='circle3-special' style={{border: `1px solid ${circleBorderColor?.[2]}`}}>{count && `+${count}`}</span></>  : <><span className='circle1' style={{marginLeft: margins?.marginLeftCircle, border: `1px solid ${circleBorderColor?.[0]}`}}> </span><span className='circle2' style={{border: `1px solid ${circleBorderColor?.[1]}`}}> </span></> }
                {dots ? <img src="../src/assets/group2.png" alt="img" className='card-dots'/> : null}
            </div>
            <div className='card-body' style={{marginTop: margins?.marginTopBody}}>
                <h3 className='card-title'>{title}</h3>
                <p className='card-date' style={{marginTop: margins?.marginTopDate}} >Created: {createdAt}</p>
            </div>
        </div>
    )
}