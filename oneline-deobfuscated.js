(function () {
  return ([selfFunction, variables] = [
    (otherFunction, loopOptions) =>
      [
        selfFunction,
        (function () {
          for (
            let i = 0;
            loopOptions?.c?.(i) ?? i < 1;
            loopOptions?.p?.() ?? i++
          )
            otherFunction(variables, i, selfFunction);
        })(),
      ][0],
    {},
  ])[0];
})();
