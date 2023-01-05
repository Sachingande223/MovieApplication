import { render, screen } from '@testing-library/react';
import Home from './home.component';

// Checks for the Elements in the Home component

describe('Test case for Home Component', () => {
    test('renders Title 1', () => {
        render(<Home/>);
        expect(screen.getByText('Unlimited Movies')).toBeInTheDocument();
    });
});

describe('Home Component Test case', () => {
    test('renders Title 2', () => {
        render(<Home/>);
        expect(screen.getByText('Unlimited Entertainment')).toBeInTheDocument();
    });
});

