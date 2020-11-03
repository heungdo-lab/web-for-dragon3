import React from "react";

const Person = id => {
  console.log(this.props);
};

const PersonList = () => (
  <section>
    <Person>Hello</Person>
  </section>
);

const App = () => <PersonList />;

export default App;
