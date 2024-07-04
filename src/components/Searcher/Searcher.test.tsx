import { fireEvent, render, screen } from '@testing-library/react';
import { Searcher } from './Searcher';

describe('Searcher tests', () => {
  const mockOnChangeFn = jest.fn();
  
  it('Render', () => {
    render(<Searcher value={'Test'} onChange={mockOnChangeFn} />);

    const input = screen.getByRole('search');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('Test');
    expect(input).toHaveAttribute('placeholder', 'Buscar');
  });

  it('On change value', () => {
    render(<Searcher value={'Test'} onChange={mockOnChangeFn} />);

    const input = screen.getByRole('search');

    fireEvent.change(input, { target: { value: 'Test 2' } });

    expect(mockOnChangeFn).toHaveBeenCalledTimes(1);
  });
});
