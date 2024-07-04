import { fireEvent, render, screen } from '@testing-library/react';
import { Select, TSelectOption } from './Select';

describe('Select tests', () => {
  const options:TSelectOption[] = [
    {
      text: 'Option 1',
      value: '1'
    },
    {
      text: 'Option 2',
      value: '2'
    }
  ]
  const mockOnChangeFn = jest.fn();
  
  it('Render', () => {
    render(<Select 
      label={'Text'} 
      value={'1'} 
      options={options} 
      onChange={mockOnChangeFn} 
    />);

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('Select an option', () => {
    render(<Select 
      label={'Text'} 
      value={'1'} 
      options={options} 
      onChange={mockOnChangeFn} 
    />);

    const select = screen.getByRole('combobox');

    fireEvent.change(select, { target: { value: '2' } });

    expect(mockOnChangeFn).toHaveBeenCalledTimes(1);
  });
});
