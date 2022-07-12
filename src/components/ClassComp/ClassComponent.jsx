import React, { Component } from "react";
import ClassCounter from "../ClassCounter/ClassCounter";

import "./index.css";

class ClassComponent extends Component {
  render() {
    //Destructuring props
    const { firstname, lastname, ...exampleProps } = this.props.exampleProps;

    let year = new Date().getFullYear() - exampleProps.age;
    let carPosesion = exampleProps.hasCar ? "owns" : "does not have";

    return (
      <>
        <h3 className="class-component">Class Component</h3>
        <h4>
          Name: {firstname} {lastname}{" "}
        </h4>
        {/* Interpolation */}
        <p>
          {`Was born in ${exampleProps.country} in ${year} and ${carPosesion} a car`}
        </p>
        <ClassCounter />
      </>
    );
  }
}

export default ClassComponent;
