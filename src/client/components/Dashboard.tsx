import React from 'react'
import * as actions from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../types';

const Dashboard = () => {
    const counter = useSelector((store: RootState) => store.calculation.counter);
    const dispatch = useDispatch<AppDispatch>();

    const clickedAdd = () => {
        // console.log("Add was clicked!")
        dispatch(actions.addCounter())
    }

    const clickedSubtract = () => {
        // console.log("Subtract was clicked!")
        dispatch(actions.subtractCounter())
    }


    return (
        <div>
    <div className='dashboard'> DASHY DASHBOARD : {counter} </div>
        <div className= {'button-container'}>
            <button className={'dash-button'} onClick={clickedAdd}>Add</button>
            <button className={'dash-button'} onClick={clickedSubtract}>Subtract</button>
        </div>
    </div>
    )
}

export default Dashboard;