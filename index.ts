import { useState, useEffect } from "react";

type useMixProps = {
  entry: string;
  tick: number;
  delay: number;
  upper?: boolean;
};

export function useMix(props: useMixProps): [string, () => void] {
  const [text, setText] = useState<string>(props.entry);
  const [num, setNum] = useState<number>(0);
  function play() {
    setNum(num + 1);
  }
  const letters = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
  ];
  const letterCase = props.upper !== undefined ? (props.upper ? 1 : 2) : 0;
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
            return letters[letterCase][
              Math.floor(Math.random() * letters[letterCase].split("").length)
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
