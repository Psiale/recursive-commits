import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { commitsEndPoint } from '../redux/constants/index'
import PropTypes from "prop-types";
import getCommits from "../redux/actions/commits"

const History = ({ commits, getCommits }) => {
	useEffect(() => {
		getCommits(commitsEndPoint);
	}, [commits]);
  const history = useHistory();
  return (
    <>
      {(commits && commits.length > 0)
			? (commits.map((commit) => {
				return (
					<>
					<div className="">
						<p>{commit.message}</p>
					</div>
					</>
				)
			}))
			: (<p>no commits yet</p>)}
      <button onClick={() => history.push("/")}> home </button>
      <button onClick={() => history.push("/fun")}> fun </button>
    </>
  );
};

History.propTypes = {
  commits: PropTypes.array.isRequired,
	getCommits: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	commits: state.commitStore,
});

const mapDispatchToProps = dispatch => ({
	getCommits: () => dispatch(getCommits()),
})

export default connect(mapStateToProps, mapDispatchToProps)(History);
