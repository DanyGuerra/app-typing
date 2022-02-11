import "../styles/Textbox.scss";

function TextBox({ actualText }) {
  return (
    <>
      <section className="textbox-area">
        <div className="textbox">
          {actualText.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </section>
    </>
  );
}

export default TextBox;
