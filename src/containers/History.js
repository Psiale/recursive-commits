import React from 'react'
import { useHistory } from 'react-router-dom';

const History = () => {
const history = useHistory();
return (
    <>
    <p>Hello from History</p>
    <button onClick={() => history.push('/')}> home </button>
    <button onClick={() => history.push('/fun')}> fun </button>
    </>
    )
}

export default History;
