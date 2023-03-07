export default function CreateRoom({ isRoomCreated, setIsRoomCreated }) {
  return isRoomCreated ? (
    <section className="py-24  flex relative items-center h-full justify-center bg-white">
      <h1 className="animate-fade-in text-[1.5rem] font-bold leading-[4rem] tracking-tight text-black absolute top-0">
        SyncHero
      </h1>
      <form
        onSubmit={() => {
          console.log("yep");
        }}
        className="flex  flex-col p-6"
      >
        <label className="label animate-fade-in " htmlFor="room">
          <span className="label-text"></span>
        </label>
        <input
          type="text"
          placeholder="Enter username"
          id="room"
          className="input text-center p-2 animate-fade-in rounded-md input-bordered w-full sm:max-w-xs border focus:outline-blue-300"
        />
        <label className="label animate-fade-in " htmlFor="room">
          <span className="label-text">Make a Room</span>
        </label>
        <input
          type="text"
          placeholder="Enter your Room Name"
          id="room"
          className="input text-center p-2 animate-fade-in rounded-md input-bordered w-full sm:max-w-xs border focus:outline-blue-300"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Room
        </button>
        <button
          onClick={() => {
            setIsRoomCreated(false);
          }}
          className="top-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute"
        >
          Back
        </button>
      </form>
    </section>
  ) : null;
}
