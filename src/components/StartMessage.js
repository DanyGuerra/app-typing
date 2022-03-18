import styled from "styled-components";
import { animated, useSpring, easings } from "react-spring";
import { typeScale } from "../utils";

const Message = styled.div`
  z-index: -1;

  .start-message {
    width: 0px;
    height: 150px;
    border-left: 70px solid ${(props) => props.theme.primaryColor};
    border-right: 70px solid ${(props) => props.theme.primaryColor};
    border-bottom: 35px solid transparent;
    font-size: ${typeScale.header3};
    color: ${(props) => props.theme.neutralCien};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

function StartMessage({ isStarted }) {
  const animationMessage = useSpring({
    opacity: isStarted ? 0 : 1,
    transform: isStarted ? "translateY(-100%)" : "translateY(0%)",
    config: {
      duration: 750,
      easing: easings.easeInOutElastic,
    },
  });

  const animationTextBox = useSpring({
    from: { opacity: 0, transform: "translateY(-30%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
    config: { duration: 1500, easing: easings.easeOutBounce },
  });

  return (
    <>
      <Message>
        <animated.div className="start-message" style={animationMessage}>
          <div>Comienza a</div>
          <div>escribir</div>
        </animated.div>
      </Message>
    </>
  );
}

export default StartMessage;
