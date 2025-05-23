import { CircularStorage } from './circular-storage/CircularStorage'
import { DocumentItem } from './document-item/DocumentItem'

import './storage.css'

export const Storage = () => {
    return (
        <div className='storage-container'>
            <div className='storage-header'>
                <span className='storage-icon-1'> </span>
                <span className='storage-icon-2'> </span>
                <p className='storage-name'>Name</p>
                <span className='storage-icon-3'> </span>
            </div>
            <div className='storage-body'>
                <h2 className='storage-title'>Storage</h2>
                <CircularStorage
                size={145}
                strokeWidth={7}
                gapPercent={4}
                segments={[
                    { percent: 15, color: '#4AC29D' },
                    { percent: 35, color: '#FF9F00' },
                    { percent: 20, color: '#BCBECA' },
                    { percent: 30, color: '#689FF8' },
                ]}
                centerText="85%"
                subText="420.2 GB of 500 GB used"
                />
                <div className='storage-files'>
                    <DocumentItem iconColor={'#FF9F00'} title={'Documents'} files={'720 files'} size={'200 GB'} />
                    <DocumentItem iconColor={'#689FF8'} title={'Documents'} files={'720 files'} size={'125 GB'} />
                    <DocumentItem iconColor={'#4AC29D'} title={'Documents'} files={'720 files'} size={'75 GB'} />
                    <DocumentItem iconColor={'#BCBECA'} title={'Documents'} files={'720 files'} size={'50 GB'} isLast={true} />
                </div>
                <div className='buy-storage'>
                    <div className='buy-skeleton-container'>
                        <div className='buy-skeleton'></div>
                    </div>
                    <div className='buy-titles-container'>
                        <p className='buy-title'>Buy more space now!</p>
                        <p className='buy-subtitle'>Upgrade to cloud premium</p>
                    </div>
                    <button className='update-button'>Upgrade Account!</button>
                </div>
            </div>
        </div>
    )
}