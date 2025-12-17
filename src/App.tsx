import { useState } from 'react';
import './App.css';
import { calculate, type Operation } from './utils/calculator';

function App() {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [operation, setOperation] = useState<Operation>('+');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setError('Please enter valid numbers');
      setResult(null);
      return;
    }

    const calcResult = calculate(a, b, operation);
    setResult(calcResult.result);
    setError(calcResult.error);
  };

  return (
    <div className="app-container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <h1>Calculator</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="First number"
            style={{ padding: '0.5rem', fontSize: '1rem' }}
          />
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value as Operation)}
            style={{ padding: '0.5rem', fontSize: '1rem' }}
          >
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (*)</option>
            <option value="/">Division (/)</option>
          </select>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Second number"
            style={{ padding: '0.5rem', fontSize: '1rem' }}
          />
          <button onClick={handleCalculate} style={{ padding: '0.5rem', fontSize: '1rem' }}>
            Calculate
          </button>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {result !== null && !error && (
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
