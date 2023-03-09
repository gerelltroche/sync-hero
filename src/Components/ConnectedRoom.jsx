import React from "react";
export default function ConnectedRoom({ roomName }) {
  console.log(roomName);
  return (
    <section>
      You are now connect to <p className="text-purple-700">{roomName}</p>
    </section>
  );
}
