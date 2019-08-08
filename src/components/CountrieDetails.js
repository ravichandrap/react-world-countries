import React from "react";
class CountrieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { countrieDetails } = this.props;
    return (
      <div>
        {countrieDetails.map(item => {
          return (
            <table keay={item.alpha2Code}>
              <tr>
                <td>Name: {item.name}</td>
              </tr>
              <tr>
                <td>Code: {item.alpha2Code}</td>
              </tr>

              <tr>
                <td>capital: {item.capital}</td>
              </tr>

              <tr>
                <td>Region: {item.region}</td>
              </tr>

              <tr>
                <td>Numeric Code: {item.numericCode}</td>
              </tr>
            </table>
          );
        })}
      </div>
    );
  }
}

export default CountrieDetails;
