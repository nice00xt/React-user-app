import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';

export class App extends Component {
  render() {
    return (
			<div>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <br/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
