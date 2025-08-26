import React from 'react';
import { render, screen } from '@testing-library/react';
import { LearningMaterialSection } from './LearningMaterialSection';

// Mock the Button component
jest.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
}));

describe('LearningMaterialSection', () => {
  const mockBaseUrl = 'http://localhost:8081/';
  
  test('renders the component with correct text', () => {
    render(<LearningMaterialSection baseUrl={mockBaseUrl} />);
    
    // Check that the main heading is rendered
    expect(screen.getByText('Are you keen to learn?')).toBeInTheDocument();
    
    // Check that the subheading is rendered
    expect(screen.getByText('Download the free learning material')).toBeInTheDocument();
    
    // Check that the description is rendered with corrected grammar
    expect(screen.getByText(/This learning material is for beginners who are keen to learn more, with examples of what we have discussed./)).toBeInTheDocument();
    
    // Check that the button is rendered
    expect(screen.getByText('Download Now')).toBeInTheDocument();
  });
});