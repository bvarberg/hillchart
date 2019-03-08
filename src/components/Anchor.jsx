import React from 'react';
import PropTypes from 'prop-types';

class Anchor extends React.Component {
  render() {
    const { fill } = this.props;

    return (
      <circle cx='50' cy='50' r='10' stroke='green' stroke-width='2' fill={fill} />
    );
  }
}

Anchor.propTypes = {
  fill: PropTypes.string,
};

Anchor.defaultProps = {
  fill: '#cccccc',
};

export default Anchor;