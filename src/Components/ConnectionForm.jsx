import React from "react";
import { Peer } from "peerjs";
import CreateRoomForm from "./CreateRoomForm";

export default function ConnectionForm({
	peerObject,
	setPeerObject,
	roomName,
	setRoomName
}) {
	const [connectionId, setConnectionId] = React.useState("");
	const setPeerObjectToRoomName = (name) => setPeerObject(new Peer(name));
	const setPeerObjectToClear = () => setPeerObject(new Peer());
	const [inCreatedRoom, setInCreatedRoom] = React.useState(false);

	function handleConnection(e) {
		e.preventDefault();
		const connection = peerObject.connect(connectionId);
		connection.on("open", function () {
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
			{inCreatedRoom ? null : (
				<form onSubmit={(e) => handleConnection(e)}>
					<label className="label">
						<span className="label-text">Set your username</span>
					</label>
					<input
						type="text"
						placeholder="Attempt to Connect"
						className="input input-bordered w-full max-w-xs"
						value={connectionId}
						onChange={(e) => setConnectionId(e.target.value)}
					/>
					<button
						className="btn"
						type="submit"
					>
						Attempt to Connect
					</button>
				</form>
			)}
		</div>
	);
}
