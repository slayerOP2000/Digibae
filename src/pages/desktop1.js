import { useCallback } from "react";
import "./desktop1.css";

const Desktop1 = () => {
  const onRectangle3Click = useCallback(() => {
    window.open("https://www.linkedin.com/in/digi-bae-4ba675240");
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    window.open("https://instagram.com/digibaeinfo?igshid=YmMyMTA2M2Y=");
  }, []);

  const onGroupContainer2Click = useCallback(() => {
    window.open(
      "https://www.facebook.com/profile.php?id=100083677533471&mibextid=LQQJ4d"
    );
  }, []);

  return (
    <div className="desktop-1">
      <img className="desktop-1-child" alt="" src="/rectangle-3.svg" />
      <img className="asset-144x-2" alt="" src="/asset-144x-2@2x.png" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <b className="dribbble">Dribbble</b>
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      </div>
      <div className="desktop-1-item" />
      <b className="vimeo">Vimeo</b>
      <img className="mask-group-icon1" alt="" src="/mask-group1@2x.png" />
      <div className="desktop-1-inner" onClick={onRectangle3Click} />
      <b className="linkedin">LinkedIn</b>
      <div className="mask-group" />
      <div className="rectangle-group" onClick={onGroupContainer1Click}>
        <div className="group-item" />
        <b className="instagram">Instagram</b>
      </div>
      <div className="rectangle-container" onClick={onGroupContainer2Click}>
        <div className="group-item" />
        <b className="facebook">FaceBook</b>
      </div>
      <img className="mask-group-icon2" alt="" src="/mask-group2@2x.png" />
      <img className="mask-group-icon3" alt="" src="/mask-group3@2x.png" />
      <img className="mask-group-icon4" alt="" src="/mask-group4@2x.png" />
      <img className="ellipse-icon" alt="" src="/ellipse-5.svg" />
    </div>
  );
};

export default Desktop1;
