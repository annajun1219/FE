import { State } from "fast-jsx/interface";
import recordAudio from "@/util/recordAudio";
import StartButton from "../molecule/Button";
import { useRef, useState } from "react";

export default function ButtonProvider({
  audioUrlState,
}: {
  audioUrlState: State<string>;
}) {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const audioChunks = useRef<Blob[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  if (!isRecording)
    return (
      <StartButton
        onClick={() =>
          recordAudio({
            isRecordingState: [isRecording, setIsRecording],
            audioUrlState,
            chunks: audioChunks,
            mediaRecorderRef,
          })
        }
      />
    );
  return (
    <button
      onClick={() => {
        mediaRecorderRef.current?.stop();
        setIsRecording(false);
      }}
    >
      Stop Recording
    </button>
  );
}
