import React, { Component, PropTypes } from 'react';

export class App extends Component {
  render() {
    return (
			<div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
