import React from "react";
import { Peer } from "peerjs";

export default function ConnectionForm({ peerObject, setPeerObject }) {
	const [roomName, setRoomName] = React.useState("");
	const setPeerObjectToRoomName = (name) => setPeerObject(new Peer(name));

	function handleNameSubmit(e) {
		e.preventDefault();
		setPeerObjectToRoomName(roomName);
	}

	return (
		<form
			className="form-control h-96 bg-grey"
			onSubmit={(e) => handleNameSubmit(e)}
		>
			<label className="label">
				<span className="label-text">Set your username</span>
			</label>
			<input
				type="text"
				placeholder="Enter a Username"
				className="input input-bordered w-full max-w-xs"
				value={roomName}
				onChange={(e) => setRoomName(e.target.value)}
			/>
		</form>
	);
}
