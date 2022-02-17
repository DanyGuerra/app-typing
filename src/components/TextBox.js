import React from "react";
// import gsap from "gsap";

function TextBox({
  actualText,
  welTextFinished,
  setWelTextFinished,
  handleKeydown,
  handleKeyup,
  setActualText,
}) {
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

  const addListener = () => {
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("keyup", handleKeyup);
    setWelTextFinished(false);

    // const typeSomething = "Escribe Algo...";
    // setActualText(typeSomething.split(""));
    setActualText([]);
  };

  const textState = (item, index) => {
    let classType = "";
    let isLastLetter = false;

    if (item === " ") {
      classType = "space";
    }
    if (index === actualText.length - 1) {
      isLastLetter = true;
    }

    if (item === "" && isLastLetter) {
      return <span key={`empty${index}`} className="cursor"></span>;
    } else if (item === "") {
      return <></>;
    } else {
      return (
        <>
          <span key={`type${index}`} className={`${classType}`}>
            {item}
          </span>
          {isLastLetter ? (
            <span key={`cursor${index}`} className="cursor"></span>
          ) : (
            <></>
          )}
        </>
      );
    }
  };

  return (
    <>
      <section className="textbox-area">
        <div className="textbox">
          {actualText.length === 0 ? <span className="cursor"></span> : <></>}
          {actualText.map(textState)}
        </div>
        {welTextFinished ? (
          <button onClick={addListener}>Intentalo!!</button>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default TextBox;
