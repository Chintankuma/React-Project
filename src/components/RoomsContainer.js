import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <RoomsFilter rooms={rooms}></RoomsFilter>
      <RoomsList rooms={sortedRooms}></RoomsList>
    </>
  );
}

export default withRoomConsumer(RoomContainer);

//other methon in this method we dont ned to passed the withRoomConsumer in context class
// import React from "react";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         // console.log("value: ", value);   je function component ma aapde context aufruf ktavano hoy to aa rite mathof pass karvi pade  in detween <RoomConsumer/>
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading></Loading>;
//         }
//         return (
//           <div>
//             <RoomsFilter rooms={rooms}></RoomsFilter>
//             <RoomsList rooms={sortedRooms}></RoomsList>
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
