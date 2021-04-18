import React from 'react'
import { useHistory } from 'react-router-dom';

const Home = () => {
const history = useHistory();
return (
    <>
    <p>Hello from home</p>
    <button onClick={() => history.push('/commit-history')}> history </button>
    <button onClick={() => history.push('/fun')}> fun </button>
    </>
    )
}

export default Home;
