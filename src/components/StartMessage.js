import styled from "styled-components";
import { animated, useSpring, easings } from "react-spring";

const Message = styled.div`
  .start-message {
    background-color: ${(props) => props.theme.primaryColor};
    height: 50px;
    width: 100px;
  }
`;

function StartMessage({ isStarted }) {
  const animationMessage = useSpring({
    opacity: isStarted ? 0 : 1,
    transform: isStarted ? "translateY(-30%)" : "translateY(0%)",
    config: {
      duration: 500,
      easing: easings.easeInElastic,
    },
  });

  return (
    <>
      <Message>
        <animated.div className="start-message" style={animationMessage}>
          Comienza a escribir
        </animated.div>
      </Message>
    </>
  );
}

export default StartMessage;
