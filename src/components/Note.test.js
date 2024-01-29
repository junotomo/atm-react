import { Note } from "./Note";
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import React from 'react';
describe( "Note component", () => {
    it('should render a div with class "card" containing a div with class "money-qtd" and an img element with class "note-img"', () => {
      // Arrange
      const props = {
        notetype: 10,
        quantity: 5
      };

      // Act
      const { container } = render(<Note {...props} />);

      // Assert
      expect(container.querySelector('.card')).toBeInTheDocument();
      expect(container.querySelector('.money-qtd')).toBeInTheDocument();
      expect(container.querySelector('.note-img')).toBeInTheDocument();
    });


  })