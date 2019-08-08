import React from "react";
import CountrieDetails from "./CountrieDetails";

import Countries from "./Countries";

class WorldCounties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counties: [],
      isLoading: true,
      countieDetails: []
    };
  }
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ counties: result, isLoading: true });
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
      .then(countieDetails => {
        this.setState({ countieDetails });
      });
  };

  render() {
    return (
      <div>
        <div> Wordl Counties</div>
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
              <td>Countie Details</td>
            </tr>
          </thead>
          <tr>
            <td style={{ width: "50%" }}>
              <Countries
                counties={this.state.counties}
                getCoutieDetails={e => this.getCoutieDetails(e)}
              />
            </td>

            <td style={{ width: "50%" }}>
              <CountrieDetails countieDetails={this.state.countieDetails} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default WorldCounties;
