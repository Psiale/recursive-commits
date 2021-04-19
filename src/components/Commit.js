import React from "react";
import PropTypes from "prop-types";

const Commit = ({ commit }) => (

  <div key={commit.commit.id}>
    <p>{commit.commit.message}</p>
    <p>{commit.commit.author.date}</p>

  </div>
);

Commit.propTypes = {
  commit: PropTypes.shape({
    commit: PropTypes.shape({
      id: PropTypes.number,
      message: PropTypes.string,
      author: PropTypes.shape({
        date: PropTypes.string
      })
    })
  }).isRequired
}

export default Commit;
