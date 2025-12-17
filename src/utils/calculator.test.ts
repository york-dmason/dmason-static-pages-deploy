import { describe, it, expect } from 'vitest';
import { calculate } from './calculator';

describe('calculate', () => {
    it('should add two numbers', () => {
        const result = calculate(2, 3, '+');
        expect(result.result).toBe(5);
        expect(result.error).toBeNull();
    });
})