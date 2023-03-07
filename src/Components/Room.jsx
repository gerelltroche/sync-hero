export default function Room({ roomName }) {
  return (
    <section className="py-24 flex items-center h-full justify-center bg-white">
      <div>
        <p>you are in room {roomName}</p>
      </div>
    </section>
  );
}
