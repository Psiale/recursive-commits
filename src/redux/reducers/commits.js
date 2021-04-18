import SHOW_COMMITS from '../constants/commits'

const initialState = []

const commitsReducer = (state = initialState, action) => {
    if (action.type === SHOW_COMMITS) {
        return action.commits
    }
    return state;
}

export default commitsReducer