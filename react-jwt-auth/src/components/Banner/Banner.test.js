import { render, screen } from '@testing-library/react';
import Banner from './Banner';

// Checks for the favourite button in the banner component using id and tag content

describe('Test case for Banner Component', () => {
    test('renders Favourite Button', () => {
        render(<Banner/>);
        expect(screen.getByTestId('Favourite')).toHaveTextContent('Favourite');
    });
});

