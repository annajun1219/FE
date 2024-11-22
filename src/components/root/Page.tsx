import { useState } from "react";
import { cn } from "fast-jsx/util";
import ButtonProvider from "./organism/ButtonProvider";

export default function RootPage() {
  const [audioUrl, setAudioUrl] = useState<string>("");

  const container = {
    displays: "flex items-center justify-center",
    sizes: "w-full min-h-screen",
  };

  return (
    <div className={cn(container)}>
      <ButtonProvider audioUrlState={[audioUrl, setAudioUrl]} />
      {audioUrl && (
        <div>
          <h3>Recorded Audio:</h3>
          <audio controls src={audioUrl}></audio>
          <a href={audioUrl} download="recording.webm">
            Download Audio
          </a>
        </div>
      )}
    </div>
  );
}
