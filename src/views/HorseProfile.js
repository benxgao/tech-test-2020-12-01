import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HorseProfile extends Component {
  render() {
    const { horse } = this.props;
    console.log('horse', horse);

    return (
      <div>
        {horse.id}
      </div>
    );
  }
};

HorseProfile.propTypes = {
  horse: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
