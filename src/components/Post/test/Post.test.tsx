import { render, screen } from "@testing-library/react";
import Post from "..";

describe('Deve Renderizar Corretamente', () => {
    test('Deve renderizar a imagem', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );
        expect(screen.getByText('Teste')).toBeInTheDocument();
    })
})