import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import {resultObjTemplate,
  } from './js/data.js';

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
      resultObj: resultObjTemplate,
    };
  }


  showFile = () => {
    if (window.File 
        && window.FileReader 
        && window.FileList 
        && window.Blob) {

         const scope = this;   

         var file = document.querySelector('input[type=file]').files[0];
         var reader = new FileReader()

         var textFile = /text.*/;

         if (file.type.match(textFile)) {
            
            reader.onload = function (event) {
              
              const _data = event.target.result;

              scope.state.resultObj[0].result = WordCount(_data);
              scope.state.resultObj[1].result = LineCount(_data);
              scope.state.resultObj[2].result = MeanCalculate(_data);
              scope.state.resultObj[3].result = ModeCalculate(_data);
              scope.state.resultObj[4].result = MedianCalculate(_data);
              scope.state.resultObj[5].result = MostCommonLetter(_data);

              scope.setState({
                ...scope.state,
              })

            }
         } else {
            console.log("Error - Please make sure it is a .txt file");
         }
         reader.readAsText(file);

   } else {
      alert("This browser does not support HTML5!");
   }
  }  

  render() {

    return (
        <div className="App">
          <Helmet>
                <title>Statistical Analysis</title>
            </Helmet>
          <Container className="p-3 text-left">
            <Jumbotron
              className="App-header"
            >
              <img
                className="App-logo"
                src={logo}
                alt="Riverford Logo"
              />
              <h1 className="font-weight-light">Text file Statistical Analysis</h1>
              <p className="font-weight-light">This app will calculate and display statistics about text files submitted to it.<br/>See 'readme' for more information</p>
              <p className="font-weight-light text-left" >Please choose a .txt file:</p>
              <div
                className="mb-3 text-left"
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

