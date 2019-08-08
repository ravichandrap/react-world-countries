import React from "react";
import CountrieDetails from "./CountrieDetails";

import Countries from "./Countries";

class WorldCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      isLoading: true,
      countrieDetails: []
    };
  }
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ countries: result, isLoading: true });
        },
        error => {
          this.setState({
            error,
            isLoading: true
          });
        }
      );
  }

  getCoutieDetails = e => {
    const fullName = e.target.innerHTML;

    fetch(`https://restcountries.eu/rest/v2/name/${fullName}?fullText=true`)
      .then(res => res.json())
      .then(countrieDetails => {
        this.setState({ countrieDetails });
      });
  };

  render() {
    return (
      <div>
        <div> Wordl Countries</div>
        <table
          style={{
            width: "100%",
            height: "180px",
            border: 1,
            left: "10px",
            bottom: "10px",
            overflowY: "scroll"
          }}
          border={1}
        >
          <thead>
            <tr>
              <td>Countires</td>
              <td>Countire Details</td>
            </tr>
          </thead>
          <tr>
            <td style={{ width: "50%" }}>
              <Countries
                countries={this.state.countries}
                getCoutieDetails={e => this.getCoutieDetails(e)}
              />
            </td>

            <td style={{ width: "50%" }}>
              <CountrieDetails countrieDetails={this.state.countrieDetails} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default WorldCountries;
