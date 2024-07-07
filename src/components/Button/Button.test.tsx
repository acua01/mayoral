import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button tests', () => {
  const mockOnClickFn = jest.fn();
  
  it('Render and click', () => {
    render(<Button text={'Text'} onClick={mockOnClickFn}/>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClickFn).toHaveBeenCalledTimes(1);
  });
});
