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
  };

  //getData

  componentDidMount() {
    //this.getData
    let rooms = this.formateData(items);
    console.log(rooms);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    // console.log(featuredRooms);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
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

  render() {
    return (
      // ...this.state = make copy of this object
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomConsumer, RoomProvider, RoomContext };
