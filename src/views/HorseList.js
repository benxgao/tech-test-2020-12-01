import React, { Component } from 'react';
import R from 'ramda';
import PropTypes from 'prop-types';
import HorseProfile from './HorseProfile';
import { loadHorses } from '../actions';
import { connect } from 'react-redux';

class HorseList extends Component {
  componentDidMount() {
    this.props.loadHorses();
  }

  render() {
    const { horses } = this.props;
    console.log('horses', horses);
    return (
      <div>
        <h3>horses</h3>
        {horses && horses.foreach(horse => {
          console.log('horse', horse);
          return (
            <HorseProfile key={horse.id} {...{horse}} />
          );
        })}
      </div>
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
