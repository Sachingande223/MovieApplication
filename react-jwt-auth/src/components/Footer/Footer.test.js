import { render, screen } from '@testing-library/react';
import Footer from './Footer';

// Footer is checked using the id and class

describe('Test case for Footer Component', () => {
    test('renders footer', () => {
        render(<Footer/>);
        expect(screen.getByTestId('footer')).toHaveClass('footer bg-dark');
    });
});

