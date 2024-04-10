import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Avatar } from '../index';

describe('Avatar Component', () => {
  it('renders with textFallback when no src is provided', () => {
    const { getByText } = render(<Avatar textFallBack="John Doe" />);
    expect(getByText('J')).toBeInTheDocument();
  });
});