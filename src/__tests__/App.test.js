import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header';
import RoutesComponent from '../routes';

// Mock the imported components to isolate the App component for testing
jest.mock('../components/Header', () => () => (
  <div data-testid="mock-header" />
));
jest.mock('../routes', () => () => <div data-testid="mock-routes" />);

describe('App component', () => {
  test('renders Header component', () => {
    render(<App />);
    const headerElement = screen.getByTestId('mock-header');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders RoutesComponent', () => {
    render(<App />);
    const routesElement = screen.getByTestId('mock-routes');
    expect(routesElement).toBeInTheDocument();
  });
});
