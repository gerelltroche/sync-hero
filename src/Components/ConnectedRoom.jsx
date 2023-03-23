import React from "react";

export default function ConnectedRoom({ roomName, peerObject }) {
  const connection = peerObject.connect(roomName);

  return (
    <section>
      You are now connected to <p className="text-purple-700">{roomName}</p>
    </section>
  );
}
