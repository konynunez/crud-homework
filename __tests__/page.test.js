import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Ensure this import is included
import Home from '../src/app/page';

describe('Home Component', () => {
  it('renders the main heading', () => {
    render(<Home />);
    const mainHeading = screen.getByText(/Panoramix/i);
    expect(mainHeading).toBeInTheDocument();
  });

  it('renders the secondary heading', () => {
    render(<Home />);
    const secondaryHeading = screen.getByText(/Welcome to the best content!/i);
    expect(secondaryHeading).toBeInTheDocument();
  });

  it('renders the show list heading', () => {
    render(<Home />);
    const showListHeading = screen.getByText(/Show list/i);
    expect(showListHeading).toBeInTheDocument();
  });

  it('renders the show list container', () => {
    render(<Home />);
    const showListContainer = screen.getByText(/Show list/i).nextElementSibling;
    expect(showListContainer).toBeInTheDocument();
  });
});
