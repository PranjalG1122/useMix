# usemix

A package to create a cool "mixing effect" on a sample text. The function is automatically run on load, but can be set to run on hover as well.

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

**entry**: This is the text that can be inputed and will exhibit the mixing effect.
**tick**: The factor of revolutions of random letters that will cycle through when run.
**delay**: The delay in milliseconds of which a letter will return to the original letter in the sample text after the mixing effect has run.
**upper**: If true, the random letters being mixed will be uppercase, else it'll be lowercase. By default, it's a mix of both.

### Output

**text**: This text will show the mix effect and finally the sample text. Put this inside a { } in a react JSX element.
**play**: Running this function will run the mixing effect. It can be used to run on hover over an element.
