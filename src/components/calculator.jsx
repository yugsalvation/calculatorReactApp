import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./calculator.css";
class Calculator extends Component {
  state = {};
  styles = {};
  inputRef = React.createRef();
  inputRef2 = React.createRef();
  operation = "";
  val1 = 0;
  val2 = 0;

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="verticalcenter"></div>
        </div>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <table className="table table-dark tablealign">
              <tbody>
                <tr>
                  <td colspan="3" align="center">
                    <h1>Calculator</h1>
                  </td>
                </tr>
                <tr>
                  <td colspan="3" align="center">
                    <div className="form-group">
                      <label for="value"></label>
                      <input
                        type="text"
                        className="form-control"
                        id="value"
                        placeholder="enter value"
                        ref={this.inputRef}
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary btn-lg"
                      onClick={this.additions}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary btn-lg"
                      onClick={this.subtractions}
                    >
                      -
                    </button>
                  </td>
                  <td rowspan="2">
                    <button
                      type="button"
                      class="btn btn-primary tdalign btn-lg"
                      onClick={this.equals}
                    >
                      =
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary btn-lg"
                      onClick={this.multiplications}
                    >
                      *
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary btn-lg"
                      onClick={this.deletions}
                    >
                      /
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-sm-4"></div>
        </div>
      </div>
    );
  }

  additions = () => {
    this.val1 = Number(this.inputRef.current.value);
    //this.inputRef.current.value = "";
    //this.inputRef2.current.value = this.val1;
    this.operation = "+";
  };
  subtractions = () => {
    this.val1 = Number(this.inputRef.current.value);
    // this.inputRef.current.value = "";
    //this.inputRef2.current.value = this.val1;
    this.operation = "-";
  };
  deletions = () => {
    this.val1 = Number(this.inputRef.current.value);
    this.inputRef2.current.value = this.val1;
    this.inputRef.current.value = "";
    this.operation = "/";
  };
  multiplications = () => {
    this.val1 = Number(this.inputRef.current.value);
    // this.inputRef.current.value = "";
    //this.inputRef2.current.value = this.val1;
    this.operation = "*";
  };
  equals = () => {
    this.val2 = Number(this.inputRef.current.value);
    let op = this.operation;
    if (op === "+") {
      this.inputRef.current.value = this.val1 + this.val2;
      // this.inputRef2.current.value = this.inputRef.current.value;
    } else if (op === "-") {
      this.inputRef.current.value = this.val1 - this.val2;
      //this.inputRef2.current.value = this.inputRef.current.value;
    } else if (op === "/") {
      this.inputRef.current.value = this.val1 / this.val2;
      // this.inputRef2.current.value = this.inputRef.current.value;
    } else if (op === "*") {
      this.inputRef.current.value = this.val1 * this.val2;
      // this.inputRef2.current.value = this.inputRef.current.value;
    } else {
      this.inputRef.current.value = this.val1;
      //this.inputRef2.current.value = this.inputRef.current.value;
    }
  };
}

{
  /* <tr>
                  <td></td>
                  <td colspan="1">
                    <div className="form-group">
                      <label for="oldvalue">Old value</label>
                      <input
                        type="text"
                        className="form-control"
                        id="oldvalue"
                        placeholder="older value"
                        ref={this.inputRef2}
                        readonly="readonly"
                      />
                    </div>
                  </td>
                  <td></td>
                </tr> */
}
export default Calculator;
