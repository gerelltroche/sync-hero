export default function CreateRoomForm({
	roomName,
	setRoomName,
	hasPeerBeenSet,
	setHasPeerBeenSet,
	setPeerObjectToRoomName
}) {
	function handleNameSubmit(e) {
		e.preventDefault();

		if (roomName.length === 0) return;

		setPeerObjectToRoomName(roomName);
		setHasPeerBeenSet(true);
	}

	return hasPeerBeenSet ? (
		<div className="flex flex-col justify-items-start border p-6">
			<p className="text-black text-xl text-left">
				You're now in Room:{" "}
				<span className="font-bold text-indigo-600/95">{roomName}</span>
			</p>
			<p className="text-slate">
				Share this with your shredding partner so they can join!
			</p>
		</div>
	) : (
		<form
			onSubmit={(e) => handleNameSubmit(e)}
			className="flex p-6"
		>
			<label className="label">
				<span className="label-text">Create a Room</span>
			</label>
			<input
				type="text"
				placeholder="Enter your Room Name"
				className="input input-bordered w-full sm:max-w-xs"
				value={roomName}
				onChange={(e) => setRoomName(e.target.value)}
				disabled={hasPeerBeenSet}
			/>
			<button className="btn">Set Room Name</button>
		</form>
	);
}
