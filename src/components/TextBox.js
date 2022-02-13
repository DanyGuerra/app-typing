import "../styles/Textbox.scss";
import React, { useEffect } from "react";
// import gsap from "gsap";

function TextBox({ actualText }) {
  // useEffect(() => {
  //   let tl = gsap.timeline({ repeat: -1 });

  //   tl.set(lastLetter.current, {
  //     backgroundColor: "rgba(1, 1, 1, 0)",
  //     duration: 1,
  //   });
  //   tl.to(lastLetter.current, {
  //     backgroundColor: "rgba(1, 1, 1, 1)",
  //     duration: 1,
  //   });
  // }, [lastLetter]);

  const textState = (item, index) => {
    let classType = "";
    let isLastLetter = false;
    let isEmpty = false;

    if (item === " ") {
      classType = "space";
    }
    if (index === actualText.length - 1) {
      isLastLetter = true;
    }

    return (
      <>
        <span className={`${classType}`} key={index}>
          {item}
        </span>
        {isLastLetter ? (
          <span key={`cursor-${index}`} className="cursor"></span>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <>
      <section className="textbox-area">
        <div className="textbox">{actualText.map(textState)}</div>
      </section>
    </>
  );
}

export default TextBox;
