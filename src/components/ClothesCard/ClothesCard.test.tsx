import { render, screen } from '@testing-library/react';
import { ClothesCard } from './ClothesCard';

describe('Clothes Cards tests', () => {
  it('Render with all data with discount', () => {
    render(<ClothesCard 
      image={'/test.png'} 
      name={'Test'} 
      discount={20}
      price={18.99} 
      moreColors={true} 
    />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    expect(screen.getByAltText('Test')).toHaveAttribute('src');

    const price = screen.getByText('18,99 €');
    expect(price).toBeInTheDocument();
    expect(price).toHaveClass('line-through');

    expect(screen.getByText(`15,19 € (-20%)`)).toBeInTheDocument();

    const button = screen.getByRole('button');

    expect(screen.getByText('más colores')).toBeInTheDocument();

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Añadir');
  });

  it('Render without discount', () => {
    render(<ClothesCard 
      image={'/test.png'} 
      name={'Test'} 
      price={18.99} 
      moreColors={true} 
    />);

    const price = screen.getByText('18,99 €');
    expect(price).toBeInTheDocument();
    expect(price).not.toHaveClass('line-through');
  });

  it('Render without more colors', () => {
    render(<ClothesCard 
      image={'/test.png'} 
      name={'Test'} 
      price={18.99} 
      moreColors={false} 
    />);

    expect(screen.queryByText('más colores')).not.toBeInTheDocument();
  });
});
