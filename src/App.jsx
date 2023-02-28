import React from "react";
import "./App.css";
import Hero from "./Components/Hero";
import { Peer } from "peerjs";
import ConnectionForm from "./Components/ConnectionForm";

function App() {
	const [folders, setFolders] = React.useState([]);
	const [connectionId, setConnectionId] = React.useState("");
	const [peerObject, setPeerObject] = React.useState(new Peer());

	React.useEffect(() => {
		peerObject.on("connection", function (conn) {
			console.log(conn);
			conn.on("data", function (data) {
				console.log(data);
			});
		});
	}, [peerObject]);

	function handleConnection(e) {
		e.preventDefault();
		const connection = peerObject.connect(connectionId);
		connection.on("open", function () {
			connection.send("hi");
		});
	}

	async function getFolders() {
		const newFolders = [];
		try {
			const directoryHandle = await window.showDirectoryPicker();
			for await (const [name, fileHandle] of directoryHandle) {
				if (fileHandle.kind === "directory") {
					newFolders.push(name);
				}
			}
			setFolders([...newFolders]);
		} catch (e) {
			console.error(e);
		}
	}

	async function handleChange() {
		setFolders([]);
		getFolders();
	}

	return (
		<>
			<div className="h-96 w-full">
				<form onSubmit={(e) => handleConnection(e)}>
					<label>hi</label>
					<input
						value={connectionId}
						onChange={(e) => setConnectionId(e.target.value)}
					></input>
				</form>
				<ConnectionForm
					peerObject={peerObject}
					setPeerObject={setPeerObject}
				/>
				<Hero
					purpleText="Shred together, faster!"
					title="SyncHero"
					tagLine="Quickly identify and sync songs between players in CloneHero"
				/>
				<button
					onClick={handleChange}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Button Instead
				</button>
				<br />
				{folders.length > 0 ? (
					<ol className="max-h-96 border border-gray-200 rounded overflow-scroll shadow-md">
						{folders.map((folder) => {
							return (
								<li
									key={crypto.randomUUID()}
									className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
								>
									{folder}
								</li>
							);
						})}
					</ol>
				) : null}
			</div>
		</>
	);
}

export default App;
