export default function CreateRoomForm({
	roomName,
	setRoomName,
	inCreatedRoom,
	setInCreatedRoom,
	setPeerObjectToClear,
	setPeerObjectToRoomName
}) {
	function handleNameSubmit(e) {
		e.preventDefault();

		if (roomName.length === 0) return;

		setPeerObjectToRoomName(roomName);
		setInCreatedRoom(true);
	}

	function handleClearRoom() {
		setRoomName("");
		setPeerObjectToClear();
		setInCreatedRoom(false);
	}

	return inCreatedRoom ? (
		<div className="flex flex-col justify-items-start border p-6">
			<div className="flex flex-row-reverse justify-between">
				<div
					className="tooltip"
					data-tip="Leave Room"
				>
					<button
						className="btn btn-square"
						onClick={handleClearRoom}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<p className="text-black text-xl text-left">
					You're now in Room:{" "}
					<span
						className="font-bold text-indigo-600/95"
						data-tip="Copy Text"
						onClick={(e) => navigator.clipboard.writeText(e.target.innerText)}
					>
						{roomName}
					</span>
				</p>
			</div>
			<p className="text-slate">
				Share this with your shredding partner so they can join!
			</p>
		</div>
	) : (
		<form
			onSubmit={(e) => handleNameSubmit(e)}
			className="flex p-6"
		>
			<label
				className="label"
				htmlFor="room"
			>
				<span className="label-text">Make a Room</span>
			</label>
			<input
				type="text"
				placeholder="Enter your Room Name"
				id="room"
				className="input input-bordered w-full sm:max-w-xs"
				value={roomName}
				onChange={(e) => setRoomName(e.target.value)}
				disabled={inCreatedRoom}
			/>
			<button className="btn">Create Room</button>
		</form>
	);
}
