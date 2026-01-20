# js-oneline-generator

JavaScript allows you to write everything in a single line of code (with only one semicolon!). (This is more than one line for readability, but it works if you remove the line breaks!)

```js
(a=>([f,v]=[(o,l)=>[f,(a=>{for(let i=l?.i??0;l?.c?.(i)??i<1;l?.p?.()??i++)o(v,i,f)})()][0],{}])[0])()(()=>
  console.log('Hello,')
)(()=>
  console.log('world!')
)((_, i, f) =>
  f(() =>
    console.log('Number: ' + i)
  )(() =>
    console.log('Hello, world' + ('!').repeat(i))
  ),
  { c: i => i < 10 }
);
```

There is no single use case for this, so don't actually use it.

Everything can be a one-liner in JS if you just try hard enough ;)

## The shorter version

```js
($=>_=$=>[_,$()][0])()(()=>
  console.log('Hello,')
)(()=>
  console.log('world!')
);
```

This doesn't support variables and conditionals, so you would need more than one line to use these features.
