import { render, screen } from '@testing-library/react';
import { IconsBar } from './IconsBar';

describe('Icons Bars tests', () => {
  it('Render', () => {
    render(<IconsBar />);

    const element = screen.getByRole('group');
    expect(element).toBeInTheDocument();
  });
});
