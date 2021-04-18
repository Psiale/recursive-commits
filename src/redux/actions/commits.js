import { getRequest } from '../../api/helpers';
import SHOW_COMMITS from '../constants/commits'
import setError from './error';
import setFetching from './fetching';

const showCommits = commits => ({
    type: SHOW_COMMITS,
    commits,
});

const getCommits = endpoint => async dispatch => {
    setFetching(true)
    try {
        const result = await getRequest(endpoint)
        dispatch(showCommits(result.data))
    } catch (error) {
        dispatch(setError(error.message))
    }
} 

export default getCommits