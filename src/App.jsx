import React from "react";
import "./App.css";
import Hero from "./Components/Hero";

function App() {
  const [folders, setFolders] = React.useState([]);

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

  async function handleChange(event) {
    setFolders([]);
    getFolders();
  }

  return (
    <>
      <div className="h-96">
        <Hero
          purpleText="Shred together, faster!"
          title="SyncHero"
          tagLine="Quickly identify and sync songs between players in CloneHero"
          handleChange={handleChange}
        />

        <br />
        <div className="overflow-y-scroll max-h-96">
          {folders.length > 0 ? (
            <ol className=" border border-gray-200 rounded shadow-md divide-x  md:columns-2 gap-x-0">
              {folders.map((folder) => {
                console.log(folders.length);
                return (
                  <li
                    key={crypto.randomUUID()}
                    className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
                  >
                    <div className="overflow-hidden whitespace-nowrap">
                      {folder}
                    </div>
                  </li>
                );
              })}
              {folders.length % 2 !== 0 ? (
                <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                  &nbsp;
                </li>
              ) : null}
            </ol>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
