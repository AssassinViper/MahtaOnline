import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { persianNumber } from '../utils/persian';
import { leftArrow, rightArrow } from '../utils/assets';

export default class MonthsViewHeading extends Component {
  static propTypes = {
    year: PropTypes.object.isRequired,
    onNextYear: PropTypes.func.isRequired,
    onPrevYear: PropTypes.func.isRequired
  };

  static contextTypes = {
    styles: PropTypes.object
  };

  render() {
    const { year, styles } = this.props;

    return (
        <div className={"calendarContainer heading"}>
        <span className={"calendarContainer heading title"}>
          { persianNumber(year.format('jYYYY')) }
        </span>
          <button
            type="button"
            title="سال قبل"
            style={styles.navButton}
            className={"calendarContainer heading prev"}
            onClick={this.props.onPrevYear}
            dangerouslySetInnerHTML={rightArrow}
            />
          <button
            type="button"
            title="سال بعد"
            style={styles.navButton}
            className={"calendarContainer heading next"}
            onClick={this.props.onNextYear}
            dangerouslySetInnerHTML={leftArrow}
            />
        </div>
    );
  }
}
