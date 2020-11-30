import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import R from 'ramda';
import styled from 'styled-components';
import HorseProfile from './HorseProfile';
import { loadHorses } from '../actions';
import { connect } from 'react-redux';

const HorseListContainer = styled.div`
  /* display: flex;
  align-content: center; */
`;

export const limitedHorseList = (horses = [], limitDataSetLength) => {
  if (Array.isArray(horses)) {
    return horses.slice(0, limitDataSetLength);
  }

  if (typeof horses === 'object') {
    return Object.keys(horses).slice(0, limitDataSetLength).map(key => horses[key]);
  }

  return horses;
};

class HorseList extends Component {
  componentDidMount() {
    this.props.loadHorses();
  }

  render() {
    const { horses } = this.props;
    const horseList = limitedHorseList(horses, 10);
    return (
      <>
        <HorseListContainer>
          {horseList.length < 1 && <div>There is no horse data...</div> }
          {horseList.length > 0 && R.map(horse => (
            <HorseProfile key={`${uuidv4()}_${horse.id}`} {...{horse}} />
          ))(horseList)}
        </HorseListContainer>
      </>
    )
  }
}

const mapStateToProps = state => {
  return ({ horses: state.horses });
}

export default connect(
  mapStateToProps,
  {
    loadHorses
  }
)(HorseList);
