/*
  Лабораторная работа No7/1
  Компилятор арифметических выражений.

  Код сгенерирован неиросетью. Неправильные выражения возвращают NaN.
  Так же как баг можно выделить такую вещь как выражение "2+(-5)" где (-5) считается неверным и выбрасывается ошибка.
  Результаты вычислений выведены в консоль.
*/
class ArithmeticCompiler {
  private static readonly OPERATORS: string[] = ['+', '-', '*', '/'];

  compile(expression: string): number {
    const tokens = this.tokenize(expression);
    const postfixTokens = this.infixToPostfix(tokens);
    return this.evaluatePostfix(postfixTokens);
  }

  private tokenize(expression: string): string[] {
    const tokens: string[] = [];
    let currentNumber = '';

    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];

      if (char === ' ') {
        if (currentNumber !== '') {
          tokens.push(currentNumber);
          currentNumber = '';
        }
      } else if (ArithmeticCompiler.OPERATORS.includes(char) || char === '(' || char === ')') {
        if (currentNumber !== '') {
          tokens.push(currentNumber);
          currentNumber = '';
        }
        tokens.push(char);
      } else {
        currentNumber += char;
      }
    }

    if (currentNumber !== '') {
      tokens.push(currentNumber);
    }

    return tokens;
  }

  private infixToPostfix(tokens: string[]): string[] {
    const stack: string[] = [];
    const postfixTokens: string[] = [];

    for (const token of tokens) {
      if (isNaN(parseInt(token))) {
        if (token === '(') {
          stack.push(token);
        } else if (token === ')') {
          let topToken = stack.pop();
          while (topToken !== '(') {
            topToken && postfixTokens.push(topToken);
            topToken = stack.pop();
          }
        } else {
          while (stack.length > 0 && this.getPrecedence(token) <= this.getPrecedence(stack[stack.length - 1])) {
            postfixTokens.push(stack.pop()!);
          }
          stack.push(token);
        }
      } else {
        postfixTokens.push(token);
      }
    }

    while (stack.length > 0) {
      postfixTokens.push(stack.pop()!);
    }

    return postfixTokens;
  }

  private getPrecedence(operator: string): number {
    switch (operator) {
      case '+':
      case '-':
        return 1;
      case '*':
      case '/':
        return 2;
      default:
        return 0;
    }
  }

  private evaluatePostfix(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
      if (isNaN(parseInt(token))) {
        const operand2 = stack.pop()!;
        const operand1 = stack.pop()!;

        switch (token) {
          case '+':
            stack.push(operand1 + operand2);
            break;
          case '-':
            stack.push(operand1 - operand2);
            break;
          case '*':
            stack.push(operand1 * operand2);
            break;
          case '/':
            stack.push(operand1 / operand2);
            break;
          default:
            throw new Error('Invalid operator');
        }
      } else {
        stack.push(parseInt(token));
      }
    }

    return stack[0];
  }
}

const compiler = new ArithmeticCompiler();
console.log(compiler.compile('2+5*(10-8)'));