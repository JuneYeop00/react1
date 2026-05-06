import Button from "./Button";

export default function Toolbar() {
  return (
    <div>
      <h2>Toolbar 컴포넌트</h2>

      {/* Button 컴포넌트에게 message prop 전달 */}
      <Button message="안녕하세요! prop으로 전달된 메시지입니다." />
    </div>
  );
}