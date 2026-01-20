function createOneLine() {
  const variables = {};
  function selfFunction(otherFunction, loopOptions) {
    for (let i = 0; loopOptions?.c?.(i) ?? i < 1; loopOptions?.p?.() ?? i++)
      otherFunction(variables, i, selfFunction);
    return selfFunction;
  }
  return selfFunction;
}

createOneLine();
