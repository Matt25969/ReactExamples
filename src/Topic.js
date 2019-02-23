
import React, { Component } from 'react';

function Topic({ match }) {
    return (
      <div>
        <h2>Topic.js</h2>
        <h3>{match.params.topicId}</h3>
      </div>
    );
  }  

export default Topic;