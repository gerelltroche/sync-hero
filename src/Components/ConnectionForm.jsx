import React from "react";
import { Peer } from "peerjs";
import CreateRoomForm from "./CreateRoomForm";
import ConnectedRoom from "./ConnectedRoom";

export default function ConnectionForm({
  peerObject,
  setPeerObject,
  roomName,
  setRoomName,
}) {
  const [connectionId, setConnectionId] = React.useState("");
  const setPeerObjectToRoomName = (name) => setPeerObject(new Peer(name));
  const setPeerObjectToClear = () => setPeerObject(new Peer());
  const [inCreatedRoom, setInCreatedRoom] = React.useState(false);
  const [isConnected, setIsConnected] = React.useState(false);

  function handleConnection(e) {
    e.preventDefault();
    const roomName = e.target[0].value;
    setConnectionId(roomName);
    const connection = peerObject.connect(roomName);
    connection.on("open", function () {
      setIsConnected(true);
      connection.send("hi");
    });
  }
  return (
    <div className="form-control h-96 bg-grey">
      <CreateRoomForm
        roomName={roomName}
        setRoomName={setRoomName}
        inCreatedRoom={inCreatedRoom}
        setInCreatedRoom={setInCreatedRoom}
        setPeerObjectToRoomName={setPeerObjectToRoomName}
        setPeerObjectToClear={setPeerObjectToClear}
      />
      {isConnected ? (
        <ConnectedRoom roomName={connectionId} peerObject={peerObject} />
      ) : null}
      {inCreatedRoom ? null : (
        <form
          id="peer-form"
          onSubmit={(e) => handleConnection(e, connectionId)}
        >
          <label className="label">
            <span className="label-text">Set your username</span>
          </label>
          <input
            id="peer-id"
            type="text"
            placeholder="Attempt to Connect"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn" type="submit">
            Attempt to Connect
          </button>
        </form>
      )}
    </div>
  );
}
