# useMix

A package to create a cool "mixing effect" on a sample text. The function is
automatically run on load, but can be set to run on hover as well.

## Import

```js
import { useMix } from "@pranjalg1122/usemix";
```

## Usage

### Parameters

```js
const [text, play] = useMix({
  entry: "sample",
  tick: 2,
  delay: 30,
  upper: true,
});
```

**entry**: This is the text that can be inputed and will exhibit the mixing
effect.

**tick**: The factor of revolutions of random letters that will cycle through
when run.

**delay**: The delay in milliseconds of which a letter will return to the
original letter in the sample text after the mixing effect has run.

**upper**: If true, the random letters being mixed will be uppercase, else it'll
be lowercase. By default, it's a mix of both.

### Output

**text**: This text will show the mix effect and finally the sample text. Put
this inside a { } in a react JSX element.

**play**: Running this function will run the mixing effect. It can be used to
run on hover over an element.

### Example

Given below is a piece of code that shows how the text and play function can be
used with an anchor tag. Using the OnMouseOver event in React, we can execute
the mixing effect when the mouse enters the anchor tag region.

```js
<a href="https://website.com" onMouseOver={play}>
  {text}
</a>
```
