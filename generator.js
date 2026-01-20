// Not the cleanest code, because it has been optimized to be written as a one-liner.

let end = false;
let result = [];
while (!end) {
  const action = prompt('Action', '0');

  if (action == '0') end = true;

  if (action == '1') {
    result.push('vars=>' + prompt('Command', "console.log('Hello, world!')"));
  }

  if (action == '2') {
    let commands = [];
    let end = false;
    while (!end) {
      let command = prompt('Command', '');
      if (command == '') end = true;
      if (command != '') commands.push(command);
    }
    result.push(
      '(vars,i,fn)=>fn' +
        commands.map((e) => '(()=>' + e + ')').join('') +
        ',{c:(i,vars)=>' +
        prompt('Condition', 'true') +
        '&&i<1}'
    );
  }

  if (action == '3') {
    let commands = [];
    let end = false;
    while (!end) {
      let command = prompt('Command', '');
      if (command == '') end = true;
      if (command != '') commands.push(command);
    }
    result.push(
      '(vars,i,fn)=>fn' +
        commands.map((e) => '(()=>' + e + ')').join('') +
        ',{c:(i,vars)=>' +
        prompt('Condition', 'i<10') +
        ',i:' +
        prompt('Initial value', '0') +
        '}'
    );
  }

  if (action == '4') {
    result.push(
      'vars=>vars.' +
        prompt('Variable name', 'myVar') +
        '=' +
        prompt('Variable content', 'null')
    );
  }
}

prompt(
  'Copy this!',
  '(a=>([f,v]=[(o,l)=>[f,(a=>{for(let i=l?.i??0;l?.c?.(i,v)??i<1;i++)o(v,i,f)})()][0],{}])[0])()' +
    result.map((e) => '(' + e + ')').join('')
);
