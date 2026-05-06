export default function Button({ message }) {
  // 전달받은 message prop을 이벤트 핸들러에서 사용
  const handleClick = () => {
    alert(message);
  };

  return (
    <button onClick={handleClick}>
      버튼 클릭
    </button>
  );
}