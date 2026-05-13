import { handlePlay, handleStop } from "./Handle.jsx";
import ButtonCom from "./ButtonCom";
import style from "./ButtonCom.module.css";
import sampleVideo from "../../assets/samplevideo.mp4";

export default function Toolbar() {
  return (
    <>
      <nav>
        <ButtonCom
          message="videoPlayer"
          handle={handlePlay}
          className={style.myButton}
        >
          Play
        </ButtonCom>

        <ButtonCom
          message="videoPlayer"
          handle={handleStop}
          className={style.myButton}
        >
          Stop
        </ButtonCom>
      </nav>

      <br />

      <section>
        <video id="videoPlayer" src={sampleVideo} controls width="350" />
      </section>
    </>
  );
}