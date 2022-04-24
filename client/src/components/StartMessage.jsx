import styled from "styled-components";
import { animated, useSpring, easings } from "react-spring";
import { typeScale } from "../utils";

const Message = styled.div`
  z-index: -1;

  .start-message {
    width: 0px;
    height: 80px;
    border-left: 60px solid ${(props) => props.theme.primaryColor};
    border-right: 60px solid ${(props) => props.theme.primaryColor};
    border-bottom: 20px solid transparent;
    font-size: ${typeScale.header5};
    color: ${(props) => props.theme.neutralCien};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .text-start {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function StartMessage({ isStarted, swPaused }) {
  const animationMessage = useSpring({
    opacity: isStarted ? 0 : 1,
    transform: isStarted ? "translateY(-100%)" : "translateY(0%)",
    config: {
      duration: 500,
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
          <div className="text-start">
            <div>Comienza</div>

            <div>escribir</div>
          </div>
        </animated.div>
      </Message>
    </>
  );
}

export default StartMessage;
