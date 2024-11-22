import { State } from "fast-jsx/interface";
import { MutableRefObject } from "react";

const recordAudio = async ({
  isRecordingState,
  audioUrlState,
  chunks,
  mediaRecorderRef,
}: {
  isRecordingState: State<boolean>;
  audioUrlState: State<string>;
  chunks: MutableRefObject<Blob[]>;
  mediaRecorderRef: MutableRefObject<MediaRecorder | null>;
}) => {
  const [isRecording, setIsRecording] = isRecordingState;
  const [audioUrl, setAudioUrl] = audioUrlState;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.current.push(event.data);
      }
    };
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(chunks.current, { type: "audio/webm" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);
      chunks.current = [];
    };
    mediaRecorder.start();
    mediaRecorderRef.current = mediaRecorder;
    setIsRecording(true);
  } catch (error) {
    console.error("Error accessing microphone:", error);
  }
};

export default recordAudio;
