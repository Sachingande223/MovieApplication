import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

// Checks for the favourite button in the Dashboard component using id and tag content

describe('Test case for Dashboard Component', () => {
    test('renders div contents', () => {
        render(<Dashboard/>);
        expect(screen.getByTestId('dashboard')).toHaveClass('app');
    });
});

