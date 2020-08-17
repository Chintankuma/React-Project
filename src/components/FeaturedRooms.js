import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    // const { name, greeting } = this.context;
    const { featuredRooms: rooms } = this.context;
    console.log(rooms);
    return (
      <div>
        from featured room
        <Room></Room>
        <Loading></Loading>
      </div>
    );
  }
}
