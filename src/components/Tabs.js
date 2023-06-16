import React from 'react'
import { TABS } from '../redux/actions/type'
import { changeTabs } from '../redux/actions'
import { useDispatch } from 'react-redux'
import '../styles/Tabs.css'
const Tabs = ({currentTab}) => {
    const dispatch = useDispatch();


    return (
        TABS.map(tab => (
            <button
                className={tab === currentTab ? 'tab-btn selected' : 'tab-btn'}
                onClick={()=>dispatch(changeTabs(tab))}
                >
                {tab}
            </button>
        ))
    )
}

export default Tabs