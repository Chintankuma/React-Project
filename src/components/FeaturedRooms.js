import React, { Component } from "react";
import { RoomContext } from "../context";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { featuredRooms: rooms } = this.context;
    console.log(rooms);
    const { name, greeting } = this.context;
    return (
      <div>
        {name} {greeting} from featured room
      </div>
    );
  }
}
