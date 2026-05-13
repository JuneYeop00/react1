export default function ButtonCom({ handle, message, children, className }) {
  return (
    <button className={className} onClick={() => handle({ message })}>
      {children}
    </button>
  );
}