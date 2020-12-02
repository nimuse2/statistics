import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

import { resultObjTemplate } from "./js/data.js";
import { isEmpty } from "./js/utilities.js";

import {
  WordCount,
  LineCount,
  MeanCalculate,
  ModeCalculate,
  MedianCalculate,
  MostCommonLetter,
} from "./js/functions.js";
import "./App.css";

import logo from "./img/riverford-invert-transparent.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Text Analysis",
      resultObj: resultObjTemplate,
    };
  }

  showFile = () => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      var scope = this;

      scope.StateCopy = Object.assign({}, this.state);

      var file = document.querySelector("input[type=file]").files[0];
      var reader = new FileReader();

      var textFile = /text.*/;

      if (file.type.match(textFile)) {
        reader.onload = function (event) {
          const _data = event.target.result;

          if (!isEmpty(_data)) {
            scope.StateCopy.resultObj[0].result = WordCount(_data);
            scope.StateCopy.resultObj[1].result = LineCount(_data);
            scope.StateCopy.resultObj[2].result = MeanCalculate(_data);
            scope.StateCopy.resultObj[3].result = ModeCalculate(_data);
            scope.StateCopy.resultObj[4].result = MedianCalculate(_data);
            scope.StateCopy.resultObj[5].result = MostCommonLetter(_data);
          } else {
            scope.StateCopy.resultObj[6].result = "Error - Empty file";
          }
          scope.setState({
            ...scope.StateCopy,
          });
        };
      } else {
        scope.StateCopy.resultObj[6].result =
          "Error - Please make sure it is .txt file ";
        scope.setState({
          ...scope.StateCopy,
        });
      }
      reader.readAsText(file);
    } else {
      alert("This browser does not support HTML5!");
    }
  };

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Text Analysis</title>
        </Helmet>
        <nav className="navbar-header navbar-dark bg-dark text-white">
          <div className="text-left">
            <img
              className="App-logo mr-3 ml-3"
              src={logo}
              alt="Riverford Logo"
            />
            Text file statistical Analysis v1.0
          </div>
        </nav>
        <Container className="p-3 text-left">
          <Jumbotron className="App-header">
            <div>
              <h1 className="font-weight-light">
                Text file Statistical Analysis
              </h1>
              <p className="font-weight-light mb-3">
                This app will calculate and display statistics about text files
                submitted to it.
                <br />
                See 'readme' for more information
              </p>
              <p className="font-weight-normal text-left text-success">
                Please choose a .txt file:
              </p>
            </div>
            <div className="mb-3 text-left">
              <input type="file" onChange={this.showFile} />
            </div>
            <div>
              <ul className="list-group list-group-flush">
                {this.state.resultObj.map((obj, index) => (
                  <li key={index} className="list-group-item">
                    <div className="d-flex justify-content-between">
                      <div className="smlTxt">{obj.title}</div>
                      <div className="text-danger smlTxt">{obj.result}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mt-3 small">&copy; N.S. Walters 27|11|20</p>
            </div>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default App;
