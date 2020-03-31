import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      arr: [`a`, `b`, `c`, `d`, `e`, `f`],
      text: "",

      arrName: [],
      textName: "",
    }

  }


  Plus = () => {
    // console.log("Hello");    
    // console.log(this.state.value);
    this.state.value += 1
    return this.setState({ value: this.state.value });
  }

  Minus = () => {
    // console.log(`Minus run check ${this.state.value}`);
    this.state.value -= 1
    return this.setState({ value: this.state.value })
  }


  Reset = () => {
    // console.log(this.state.value);
    // {this.state.value -= this.state.value}
    this.state.value = 0
    // console.log(`Reset run is ${this.state.value}`);
    return this.setState({ value: this.state.value })
  }


  addList = () => {
    let text = prompt(`Input your text ???`);
    // ***** use array push *****//
    // let array = this.state.arr;
    // array.push(text)

    // ***** use spardy *****//
    let array = [...this.state.arr, text]
    // this.setState({array : []})
    console.log(array);
    this.setState({ arr: array })
  }




  //***  Kla code  ***//
  // addList = () => {
  //   let text = prompt("Fill in text box ")
  //   let array = [...this.state.arr, text]
  //   // array = ["a", "b", "c", "d"]
  //   // array.push(text)

  //   array.push(text)
  //   // array = ["a", "b", "c", "d"] <= [text]
  //   // array = ["a", "b", "c", text]
  //   this.setState({ arr : array })
  // }


  // *** P' Isa code ***//
  // addList = () => {
  //   let text = prompt("Type in your text");
  //   let array = [...this.state.arr, text]
  //   // array.push(text)
  //   this.setState({ arr: array})
  // }





  //***************************************************************************************************************** */
  // *** add list 1 by input text ***//

  addList1 = (e) => {
    e.preventDefault()
    let array = [...this.state.arr, this.state.text]
    this.setState({ arr: array, text: "" })
  }

  //*** Input  ***/

  input = (e) => {
    this.setState({ text: e.target.value })
  }

  //********************************************************************************************************************** */

  //*** inputName  ***/

  inputName = (event) => {
    event.preventDefault();
    let addName1 = event.target.value;
    // let addName2 = `Your name is ${addName1}`;
    this.setState({ textName: addName1 })
  }

  //*** add Name ***/

  addName = (event) => {
    event.preventDefault()
    let arrayName = [...this.state.arrName, this.state.textName]
    this.setState({ arrName: arrayName, textName: "" })
  }

  //****************************************************** Delete  **************************************************/


  delete = deleteindexfn => () => {
    let arrayName = this.state.arrName.filter((item,index)=>index != deleteindexfn)
    this.setState({ arrName: arrayName})

  } 





    //******************************************** Render Part *********************************************************/

    render() {
  return (
    <div className="App">
      {this.state.value}
      <br></br>
      <button onClick={this.Plus}>Plus</button>
      <button onClick={this.Minus}>Minus</button>
      <button onClick={this.Reset}>Reset</button>

      <br></br> <br></br>

      <button onClick={this.addList}>Add List</button>
      {/* <button onClick={this.addList}>Add List</button> */}

      <br></br> <br></br>

      <form>
        <input type="text" onChange={this.input} value={this.state.text}></input>
        <button onClick={this.addList1}> Add List </button>

      </form>




      <br></br><br></br>

      <form>

        <input type="text" onChange={this.inputName} value={this.state.textName}></input>
        <button onClick={this.addName}> Add YourName </button>

      </form>











      <ul>
        {this.state.arr.map((item) => <li>{item}</li>)}
      </ul>

      <ul>
        {this.state.arrName.map((item,index) => {
          return <li> Your name : {item} 
          <button onClick={this.delete(index)}>Delete</button>
          {/* <button onClick={this.edit(index)}>Edit</button> */}

          </li>
        })}
      </ul>

    </div>
  );
}

}

export default App;
