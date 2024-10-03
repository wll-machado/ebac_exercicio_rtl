import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente Post', () => {
    test('Deve permitir a inserção de dois comentários', () => {
        render(<Post />);
        
        const textArea = screen.getByTestId('comment-textarea');
        fireEvent.change(textArea, { target: { value: 'Primeiro comentário' } });
        
        
        const submitButton = screen.getByTestId('comment-submit-button');
        fireEvent.click(submitButton);

        
        fireEvent.change(textArea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);

        
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});