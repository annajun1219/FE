import { cn } from "fast-jsx/util";
export default function Box() {
  const container = {
    boundaries: "border-2 border-red-500",
  };
  return <div className={cn(container)}>box</div>;
}
