import numeral from 'numeral';

import { calculateLevelingCost } from '../../src/services/Calculator';

it('Calculator loads successfully', () => {   
  cy.visit('/', { timeout: 45000 }); 
  cy.get('#quickCalculator').contains('Quick Calculator');
});

it('Calculate cost for current level of 10 and desired level of 85', () => {  
  const currentLevel = 10;
  const desiredLevel = 85; 
  const formattedLevelingCost = numeral(calculateLevelingCost(currentLevel, desiredLevel)).format('0,0');
  
  cy.visit('/', { timeout: 45000 }); 

  cy.get('#current-level').click();
  cy.get('#10').click();
  cy.get('#desired-level').click();
  cy.get('#85').click();
  cy.contains(formattedLevelingCost);
});

it('Calculate cost for current level of 1 and desired level of 50', () => {  
  const currentLevel = 1;
  const desiredLevel = 50; 
  const formattedLevelingCost = numeral(calculateLevelingCost(currentLevel, desiredLevel)).format('0,0');
    
  cy.visit('/', { timeout: 45000 }); 
  
  cy.get('#current-level').click();
  cy.get('#1').click();
  cy.get('#desired-level').click();
  cy.get('#50').click();
  cy.contains(formattedLevelingCost);
});

it('Calculate cost for current level of 80 and desired level of 85', () => {  
  const currentLevel = 80;
  const desiredLevel = 85; 
  const formattedLevelingCost = numeral(calculateLevelingCost(currentLevel, desiredLevel)).format('0,0');
    
  cy.visit('/', { timeout: 45000 }); 
  
  cy.get('#current-level').click();
  cy.get('#80').click();
  cy.get('#desired-level').click();
  cy.get('#85').click();
  cy.contains(formattedLevelingCost);
});