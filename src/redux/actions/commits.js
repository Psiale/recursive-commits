import SHOW_COMMITS from '../constants/commits'

const showCommits = commits => ({
    type: SHOW_COMMITS,
    commits,
});

export default showCommits