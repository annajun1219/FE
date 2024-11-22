import { Button } from "fast-jsx";
import { OnClick } from "fast-jsx/interface";

export default function StartButton({ onClick }: { onClick: OnClick }) {
  return (
    <Button
      title="Start Recording"
      onClick={onClick}
      option={{
        background: "bg-green-dark",
        boundary: "rounded-full",
      }}
    />
  );
}
