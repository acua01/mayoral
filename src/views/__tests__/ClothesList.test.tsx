import { fireEvent, render, screen } from '@testing-library/react';
import { ClothesList } from '../ClothesList/ClothesList';
import clothes from '../../../public/data/clothes.json';

describe('Clothes List tests', () => {
  it('Render', () => {
    render(<ClothesList clothes={clothes}/>);

    expect(screen.getByLabelText('filter')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('Search clothes', () => {
    render(<ClothesList clothes={clothes}/>);

    const input = screen.getByRole('search');
    fireEvent.change(input, { target: { value: '3' } });
    expect(screen.getByText('Conjunto 3 piezas sport Better Cotton niño')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Test' } });
    expect(screen.getByText('No se han encontrado resultados')).toBeInTheDocument();
  });

  it('Sort clothes', () => {
    render(<ClothesList clothes={clothes}/>);

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'desc' } });
    
    const firstArticle = screen.getAllByLabelText("clothes-name")[0];
    expect(firstArticle).toHaveTextContent("Conjunto 2 piezas rayas lino niño");
  });

  it('Empty data', () => {
    render(<ClothesList clothes={[]}/>);

    expect(screen.getByText('No se han encontrado resultados')).toBeInTheDocument();
  });
});
