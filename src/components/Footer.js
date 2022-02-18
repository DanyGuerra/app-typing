import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundInvertedColor};
  color: ${(props) => props.theme.neutralCien};
  .footer {
    width: 80%;
    height: 20%;
    display: flex;
    justify-content: center;
    gap: 10%;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className="footer">
        <div id="brand">Typing App</div>
        <div id="item2">item 2</div>
        <div id="item3">item 3</div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
