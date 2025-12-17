export type Operation = '+' | '-' | '*' | '/';

export interface CalculatorResult {
  result: number | null;
  error: string | null;
}

/**
 * Pure function to perform calculator operations
 * @param a - First number
 * @param b - Second number
 * @param operation - Operation to perform
 * @returns Result object with result or error
 */
export function calculate(
  a: number,
  b: number,
  operation: Operation
): CalculatorResult {
  if (operation === '/' && b === 0) {
    return {
      result: null,
      error: 'Cannot divide by zero',
    };
  }

  let result: number;
  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      return {
        result: null,
        error: 'Invalid operation',
      };
  }

  return {
    result,
    error: null,
  };
}
