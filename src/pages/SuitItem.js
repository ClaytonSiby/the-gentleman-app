import React from 'react';
import { useSelector } from 'react-redux';

const SuitItem = () => {
    const suitItemData = useSelector(state => state.suitItem )
    return (
        <div>
            {
                JSON.stringify(suitItemData)
            }
        </div>
    )
}

export default SuitItem
