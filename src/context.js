import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();

//with that we have access for two component
//1. provider: responsible for allowing for all components in the component tree to access it
//2. consumer: its for access the information
//its similar like service in angular ke aapde ak no ak data bije use krvano hoy to ae data ne ahi context ma nakhi devano jethi ae badhi jagya ye access kari aekiye
//its generally used to vermeide a props drilling
export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  //getData

  componentDidMount() {
    //this.getData
    let rooms = this.formateData(items);
    console.log("rooms", rooms);
    console.log(...rooms); //array hoy to ae ne
    let featuredRooms = rooms.filter((room) => room.featured === true);
    // console.log(featuredRooms);
    let maxPrice = Math.max(...rooms.map((item) => item.price));

    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice: maxPrice,
      maxSize: maxSize,
    });
  }

  formateData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let rooms = { ...item.fields, images, id };
      return rooms;
    });
    return tempItems;
  }
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
    console.log(type, name, value);
  };

  filterRooms = () => {
    console.log("hello");
  };

  render() {
    return (
      // ...this.state = make copy of this object
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value}></Component>}
      </RoomConsumer>
    );
  };
}

export { RoomConsumer, RoomProvider, RoomContext };
