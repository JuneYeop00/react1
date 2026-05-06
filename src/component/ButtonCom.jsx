export default function Button({ handle, message, children }) {
  return (
    <button onClick={() => handle(message)}>
      {children}
    </button>
  );
}