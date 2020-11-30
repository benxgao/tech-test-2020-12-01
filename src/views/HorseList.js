import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import R from 'ramda';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HorseProfile from './HorseProfile';
import { loadHorses } from '../actions';
import { connect } from 'react-redux';

const HorseListContainer = styled.div`
  /* display: flex;
  align-content: center; */
`;

class HorseList extends Component {
  componentDidMount() {
    this.props.loadHorses();
  }

  render() {
    const { horses } = this.props;
    return (
      <>
        <HorseListContainer>
          {horses && Object.keys(horses).map(horseKey => {
            const horse = horses[horseKey];
            return (
              <HorseProfile key={`${uuidv4()}_${horse.id}`} {...{horse}} />
            );
          })}
        </HorseListContainer>
      </>
    )
  }
}

// HorseList.propTypes = {
//   horses: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// }

const mapStateToProps = state => {
  return ({ horses: state.horses });
}

export default connect(
  mapStateToProps,
  {
    loadHorses
  }
)(HorseList);
