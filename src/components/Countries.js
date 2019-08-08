import React from "react";

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { countries } = this.props;
    return (
      <ul>
        {countries.map(countie => {
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
