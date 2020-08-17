import React, { Component } from "react";
const RoomContext = React.createContext();
//with that we have access for two component
//1. provider: responsible for allowing for all components in the component tree to access it
//2. consumer: its for access the information
//its similar like service in angular ke aapde ak no ak data bije use krvano hoy to ae data ne ahi context ma nakhi devano jethi ae badhi jagya ye access kari aekiye
//its generally used to vermeide a props drilling
export default class RoomProvider extends Component {
  state = {
    greeting: "hello",
    name: "john",
  };
  render() {
    return (
      // ...this.state = make copy of this object
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomConsumer, RoomProvider, RoomContext };
