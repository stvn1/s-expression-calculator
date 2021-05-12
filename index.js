const prompts = require('prompts');
const {calculator} = require('./calculator');


(async () => {
  const response = await prompts({
    type: 'text',
    name: 'expression',
    message: 'Enter expression:',
  });
  const result  = calculator(response.expression)

  console.log(result);
})();

