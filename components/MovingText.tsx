/* eslint-disable no-plusplus */
/* eslint-disable no-multi-assign */
import React from "react";
import { Text, Caret } from "styles/styled-components/global";

const { DEVELOPER_NAME } = process.env;

const TITLE = DEVELOPER_NAME as string;

let ITERATOR = 0;
let ITERATOR_BACK = TITLE.length;
let MOVINGFOWARDTEXT = "";

const TYPE_SPEED = 100;

const MovingText: React.FC = () => {
  const [movingTitle, setMovingTitle] = React.useState("");
  const [titlePosition, setTitlePosition] = React.useState("forward");

  const typeWriter = React.useCallback(() => {
    if (ITERATOR < TITLE.length && titlePosition === "forward") {
      const appendTitle = (MOVINGFOWARDTEXT += TITLE.charAt(ITERATOR));
      setMovingTitle(appendTitle);
      ITERATOR++;
      setTimeout(typeWriter, TYPE_SPEED + 50);
      if (appendTitle === TITLE) {
        ITERATOR_BACK = TITLE.length;
        setTimeout(() => setTitlePosition("backward"), 2000);
      }
    }
    if (ITERATOR_BACK >= 0 && titlePosition === "backward") {
      if (ITERATOR) {
        ITERATOR = 0;
        MOVINGFOWARDTEXT = "";
      }
      setMovingTitle(TITLE.slice(0, ITERATOR_BACK));
      ITERATOR_BACK--;
      setTimeout(typeWriter, TYPE_SPEED);
      if (ITERATOR_BACK < 0) {
        setTimeout(() => setTitlePosition("forward"), 500);
      }
    }
  }, [titlePosition]);

  React.useEffect(() => {
    typeWriter();
    return () => {
      clearTimeout();
      typeWriter();
    };
  }, [typeWriter]);

  React.useMemo(() => {
    ITERATOR = 0;
    ITERATOR_BACK = TITLE.length;
    MOVINGFOWARDTEXT = "";
  }, []);

  return (
    <Text.Title className="hero">
      {movingTitle}
      <Caret>|</Caret>
    </Text.Title>
  );
};

export default MovingText;
