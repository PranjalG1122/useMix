import { useState, useEffect } from "react";

type useMixProps = {
  entry: string;
  tick: number;
  delay: number;
};

export function useMix(props: useMixProps): [string, () => void] {
  const [text, setText] = useState<string>(props.entry);
  const [num, setNum] = useState<number>(0);
  function play() {
    setNum(num + 1);
  }
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let iterations = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      setText(
        props.entry
          .split("")
          .map((letter, index) => {
            if (props.tick * index < iterations) {
              return letter;
            }
            if (letter === " ") {
              return " ";
            }
            return letters[
              Math.floor(Math.random() * letters.split("").length)
            ];
          })
          .join("")
      );
      iterations++;
    }, props.delay);
    return () => clearInterval(interval);
  }, [props.entry, num]);

  return [text, play];
}
