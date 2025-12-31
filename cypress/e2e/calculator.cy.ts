describe('Calculator E2E Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should load the calculator UI correctly', () => {
      // Check that the main elements are present
      cy.contains('h1', 'Calculator').should('be.visible');
      cy.get('input[placeholder="First number"]').should('be.visible');
      cy.get('input[placeholder="Second number"]').should('be.visible');
      cy.get('select').should('be.visible');
      cy.contains('button', 'Calculate').should('be.visible');
    });
  
    it('should perform addition correctly', () => {
      cy.get('input[placeholder="First number"]').type('10');
      cy.get('select').select('+');
      cy.get('input[placeholder="Second number"]').type('5');
      cy.contains('button', 'Calculate').click();
      
      cy.contains('Result: 15').should('be.visible');
      cy.get('[style*="color: red"]').should('not.exist'); // No error 
    });
  
    it('should perform subtraction correctly', () => {
      cy.get('input[placeholder="First number"]').type('10');
      cy.get('select').select('-');
      cy.get('input[placeholder="Second number"]').type('3');
      cy.contains('button', 'Calculate').click();
      
      cy.contains('Result: 7').should('be.visible');
    });
  
    it('should perform multiplication correctly', () => {
      cy.get('input[placeholder="First number"]').type('6');
      cy.get('select').select('*');
      cy.get('input[placeholder="Second number"]').type('7');
      cy.contains('button', 'Calculate').click();
      
      cy.contains('Result: 42').should('be.visible');
    });
  
    it('should perform division correctly', () => {
      cy.get('input[placeholder="First number"]').type('20');
      cy.get('select').select('/');
      cy.get('input[placeholder="Second number"]').type('4');
      cy.contains('button', 'Calculate').click();
      
      cy.contains('Result: 5').should('be.visible');
    });
  
    it('should handle division by zero', () => {
      cy.get('input[placeholder="First number"]').type('10');
      cy.get('select').select('/');
      cy.get('input[placeholder="Second number"]').type('0');
      cy.contains('button', 'Calculate').click();
      
      // Check for error message
      cy.contains('Cannot divide by zero').should('be.visible');
      cy.get('[style*="color: red"]').should('contain', 'Cannot divide by zero');
      // Result should not be displayed when there's an error
      cy.contains('Result:').should('not.exist');
    });
  
    it('should validate input - empty fields', () => {
      // Try to calculate with empty fields
      cy.contains('button', 'Calculate').click();
      
      // Should show validation error
      cy.contains('Please enter valid numbers').should('be.visible');
      cy.get('[style*="color: red"]').should('contain', 'Please enter valid numbers');
    });
  
    it('should validate input - invalid numbers', () => {
      cy.get('input[placeholder="First number"]').type('abc');
      cy.get('input[placeholder="Second number"]').type('xyz');
      cy.contains('button', 'Calculate').click();
      
      cy.contains('Please enter valid numbers').should('be.visible');
    });
  
    it('should clear previous result when new calculation is performed', () => {
      // First calculation
      cy.get('input[placeholder="First number"]').type('5');
      cy.get('select').select('+');
      cy.get('input[placeholder="Second number"]').type('3');
      cy.contains('button', 'Calculate').click();
      cy.contains('Result: 8').should('be.visible');
      
      // Second calculation
      cy.get('input[placeholder="First number"]').clear().type('10');
      cy.get('input[placeholder="Second number"]').clear().type('2');
      cy.contains('button', 'Calculate').click();
      cy.contains('Result: 12').should('be.visible');
    });
  
    it('should handle decimal numbers', () => {
      cy.get('input[placeholder="First number"]').type('10.5');
      cy.get('select').select('+');
      cy.get('input[placeholder="Second number"]').type('2.3');
      cy.contains('button', 'Calculate').click();
      
      cy.contains('Result: 12.8').should('be.visible');
    });
  
    it('should handle negative numbers', () => {
      cy.get('input[placeholder="First number"]').type('-10');
      cy.get('select').select('+');
      cy.get('input[placeholder="Second number"]').type('5');
      cy.contains('button', 'Calculate').click();
      
      cy.contains('Result: -5').should('be.visible');
    });
});