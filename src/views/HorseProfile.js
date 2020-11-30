import React, { Component } from 'react';
import R from 'ramda';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HorseCard = styled.div`
  margin: 1rem;
  padding: 1rem;
  max-width: 20rem;
  max-height: 20rem;
`;

const HorseName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;
const HorseDetails = styled.div`
  margin: 1px 0;
`;

export default class HorseProfile extends Component {
  render() {
    const { horse } = this.props;
    const horseFavouriteFood = R.pathOr('unknown', ['profile', 'favouriteFood'])(horse);
    const horseHeight = R.pathOr('unknown', ['profile', 'physical', 'height'])(horse);
    const horseWeight = R.pathOr('unknown', ['profile', 'physical', 'weight'])(horse);

    return (
      <HorseCard>
        <HorseName>{horse.name}</HorseName>
        <HorseDetails>
          <div>Favourite Food: {horseFavouriteFood}</div>
          <div>Height: {horseHeight}</div>
          <div>Weight: {horseWeight}</div>
        </HorseDetails>
      </HorseCard>
    );
  }
};

HorseProfile.propTypes = {
  horse: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
