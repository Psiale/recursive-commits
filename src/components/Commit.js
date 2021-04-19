import React from "react";
import PropTypes from "prop-types";
import Moment from 'react-moment';

const Commit = ({ commit }) => {
  const dateToFormat = new Date(commit.commit.author.date)
  return  (
    <div key={commit.commit.id}>
      <p>{commit.commit.message}</p>
      <Moment date={dateToFormat} format="dddd hh: mm"/>
  
    </div>
  );
  
}
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
