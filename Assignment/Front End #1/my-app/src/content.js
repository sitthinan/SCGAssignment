import React, { Component } from 'react';
import { Button } from 'reactstrap';
class Content extends Component {
 
    render() {
      return (
        <div>
          <h3>Assignment #1</h3>
          <h3>-X, 5, 9, 15, 23, Y, Z</h3>
           <Button color="success" onClick={this.cal}>Click</Button>

          <span>{this.anwser}</span>
        </div>
      );
    }

    cal(x){
        let array = ["X", "5", "9", "15", "23", "Y", "Z"]

        let anwser = "";
        array.forEach(element => {
            if(!Number(element)){
                anwser = anwser + element + " "
            }    
        });
           alert(anwser)
    }
 
  }
  export default Content;
