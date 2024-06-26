import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve Renderizar um comentario', () => {
        render(<PostComment />)

        fireEvent.change(screen.getByTestId('area-comentario'), {
            target: {
                value: 'Teste'
            }
        })

        fireEvent.click(screen.getByTestId('botao-comentario'))

        expect(screen.getAllByTestId('comentario')).toHaveLength(1)
    })
});