import React from 'react'
import * as actions from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

const Dashboard = () => {
    const counter = useSelector(store => store.test.counter);
    const dispatch = useDispatch();

    const clickedAdd = () => {
        console.log("Add was clicked!")
        dispatch(actions.addCounter())
    }

    const clickedSubtract = () => {
        console.log("Subtract was clicked!")
        dispatch(actions.subtractCounter())
    }



    return (
    <div>
        DASHY DASHBOARD : {counter}
        <div>
            <button onClick={clickedAdd}>Add</button>
            <button onClick={clickedSubtract}>Subtract</button>
        </div>
    </div>
    )
}

export default Dashboard;