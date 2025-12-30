import { describe, it, expect } from 'vitest';
import { calculate } from './calculator';

describe('calculate', () => {
  describe('add (+)', () => {
    it('should add two numbers', () => {
      const result = calculate(2, 3, '+');
      expect(result.result).toBe(5);
      expect(result.error).toBeNull();
    });
  });

  describe('subtract (-)', () => {
    it('should subtract two numbers', () => {
      const result = calculate(2, 3, '-');
      expect(result.result).toBe(-1);
      expect(result.error).toBeNull();
    });
  });

  describe('multiply (*)', () => {
    it('should multiply two numbers', () => {
      const result = calculate(2, 3, '*');
      expect(result.result).toBe(6);
      expect(result.error).toBeNull();
    });
  });

  describe('divide (/)', () => {
    it('should divide two numbers', () => {
      const result = calculate(2, 3, '/');
      expect(result.result).toBe(2 / 3);
      expect(result.error).toBeNull();
    });
  });

  describe('edge cases', () => {
    it('should handle division by zero', () => {
      const result = calculate(2, 0, '/');
      expect(result.result).toBeNull();
      expect(result.error).toBe('Cannot divide by zero');
    });

    it('should handle very large numbers', () => {
      const result = calculate(1000000, 2000000, '+');
      expect(result.result).toBe(3000000);
      expect(result.error).toBeNull();
    });

    it('should handle very small numbers', () => {
      const result = calculate(1e-10, 1e-10, '+');
      expect(result.result).toBe(2e-10);
      expect(result.error).toBeNull();
    });
  });
});
