import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import { WordCount, 
         LineCount,
         MeanCalculate,
         ModeCalculate,
         MedianCalculate,
         MostCommonLetter,
       } from './js/functions.js';
import './App.css';

import logo from './img/riverford-transparent.png';

  class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "Text Analysis",
      resultArray:[1,2,3,4,5,],
      resultObj: [],
    };
  }


  showFile = () => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
         const scope = this;   

         var file = document.querySelector('input[type=file]').files[0];
         var reader = new FileReader()

         var textFile = /text.*/;

        

         if (file.type.match(textFile)) {
            
            reader.onload = function (event) {

              const _data = event.target.result;

              scope.setState({
                resultObj: [
                  {
                    "title": "Word Count ",
                    "result": WordCount(_data),
                  },
                  {
                    "title": "Line Count ",
                    "result": LineCount(_data),
                  },
                  {
                    "title": "Mean - Average number of letters per word: ",
                    "result": MeanCalculate(_data),
                  },
                  {
                    "title": "Mode - Most common number of letters per word: ",
                    "result": ModeCalculate(_data),
                  },
                  {
                    "title": "Median - Number of letters per word in middle of set: ",
                    "result": MedianCalculate(_data),// add more definition below text??
                  },
                  {
                    "title": "Most common letter ",
                    "result": MostCommonLetter(_data),
                  },
                ],
              });

            }
         } else {
            console.log("Error - Please make sure it is a .txt file");
         }
         reader.readAsText(file);

   } else {
      alert("Your browser is too old to support HTML5 File API");
   }
  }  

  render() {

    return (
        <div className="App">
          <Helmet>
                <title>Statistical Analysis</title>
            </Helmet>
          <Container className="p-3">
            <Jumbotron
              className="App-header"
            >
              <img
                className="App-logo"
                src={logo}
                alt="Riverford Logo"
              />
              <h1 className="bigTxt font-weight-lighter">Text file Statistical Analysis</h1>
              <h2 className="medTxt font-weight-light" >Please choose a .txt file:</h2>
              <div
                className="p-4"
              >
                  <input 
                    type="file" 
                    onChange={this.showFile} 
                    />
              </div>
              <div>
              <ul className="list-group list-group-flush">
                  {this.state.resultObj.map((obj,index) => 
                          <li 
                              key={index}
                              className="list-group-item "
                          >
                              <div
                                className="d-flex justify-content-between"
                              >
                                  <div
                                    className="smlTxt"
                                  >{obj.title}</div>
                                  <div className="text-danger smlTxt">{obj.result}</div>
                              </div>
                          </li>
                      )
                  }
              </ul>
              </div>
            </Jumbotron>
          </Container>
        </div>

      
    );
  }
    
  }

export default App;

