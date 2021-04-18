import React from 'react'
import { useHistory } from 'react-router-dom';

const Fun = () => {
const history = useHistory();
return (
    <>
    <p>Hello from Fun</p>
    <button onClick={() => history.push('/')}> home </button>
    <button onClick={() => history.push('/commit-history')}> history </button>
    </>
    )
}

export default Fun;
