
import React from 'react';

const Topic = ({ match }) => (
    <div>
      {match.params.topicId}
    </div>
)

export default Topic;