import FunctionalCounter from "../FunctionalCounter/FunctionalCounter";

function FunctionalComponent({ exampleProps }) {
  // Destructuring props
  const { firstname, lastname } = exampleProps;

  let year = new Date().getFullYear() - exampleProps.age;
  let carPosesion = exampleProps.hasCar ? "owns" : "does not have";

  return (
    <div>
      <h3>Functional Component</h3>
      <h4>
        Name: {firstname} {lastname}
      </h4>
      {/* Interpolation */}
      <p>
        {`Was born in ${exampleProps.country} in ${year} and ${carPosesion} a car`}
      </p>
      <FunctionalCounter />
    </div>
  );
}

export default FunctionalComponent;
