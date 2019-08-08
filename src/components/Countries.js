import React from "react";

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { counties } = this.props;
    return (
      <ul>
        {counties.map(countie => {
          return (
            <li key={countie.alpha2Code} onClick={this.props.getCoutieDetails}>
              {countie.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Countries;
