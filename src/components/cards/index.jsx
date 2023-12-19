import React from 'react';
import { map } from 'lodash';
import moment from 'moment';
import './style.scss';

const Cards = ({ data, handleCardEdit }) => {
    const cardData = map(data, (item, index) => {
        return <div className="card-blk" key={index} onClick={() => handleCardEdit(item)}>
            <div className='card-blk__title'>
                <h6>Universal Bank
                    <span>{item?.id}</span>
                </h6>
                <span className='card-blk__logo'>&#9752;</span>
            </div>
            <div className='card-blk__content'>
                <h2>&#8377; {item?.amount}</h2>
            </div>
            <div className='card-blk__title'>
                <h6>{item?.name}
                    <small>Valid {moment(item?.expiry).format('MM/YYYY')}</small>
                </h6>
                <strong>VISA</strong>
            </div>
        </div>
    })

    return <>
        {data?.length > 0 ? cardData : <div className='no-card'>No Card is added</div>}
    </>
}

export default React.memo(Cards);