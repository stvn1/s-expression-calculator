/**
 * 
 * @param {string} expression 
 * @returns {number}
 */
exports.calculator = (expression) =>{
    if(expression < 0) return new Error('Input should be a positive integer')
    expression = expression.trim()
    const stack = [];
    // const expArray = expression.replace(/[{()}]/g, '').split(' ').reverse();
    let expArray = addSpaceAroundParentheses(expression).replace(/[{(}]/g, '')
    expArray = expArray.split(' ').reverse()


    for(let i = 0; i < expArray.length; i++){
        switch(expArray[i]){
            case 'multiply':
                let tempMultiply = 1;
                while(stack[stack.length-1] !=')'){
                    tempMultiply *= parseInt(stack.pop()) 
                    
                }
                stack.pop()
                stack.push(tempMultiply)
                break;

            case 'add':
                let temp = 0;
                while(stack[stack.length-1] !=')'){
                    temp += parseInt(stack.pop()) 
                    
                }
                stack.pop()
                stack.push(temp)
                break;
            case 'exponent':
                let tempExponent;
                tempExponent = Math.pow(stack.pop(), stack.pop())
                 while (stack[stack.length-1] !=')'){
                     tempExponent = Math.pow(tempExponent,stack.pop())
                 };
                 stack.pop();
                 stack.push(tempExponent)
                break;
            
            default:
                stack.push(expArray[i])
        }
    }
    return parseInt(stack.pop())
}

    


function addSpaceAroundParentheses(expression){
    // expression = expression.replace(/[{(}]/g, '( ')
    expression = expression.replace(/[{)}]/g, ' )')
    return expression
}
