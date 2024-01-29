import { MoneyCounter } from "./MoneyCounter";
import { render } from '@testing-library/react';
import React from 'react';


    // Displays the correct note images and quantities when props.atmBillsData is not empty
    it('should display the correct note images and quantities when props.atmBillsData is not empty', () => {
      // Arrange
      const props = {
        atmBillsData: {
          "10": 5,
          "20": 10,
          "50": 3,
          "100": 2
        }
      };

      // Act
      const { getByText, getByAltText } = render(<MoneyCounter {...props} />);
      const note10Quantity = getByText('Quantidade: 5');
      const note20Quantity = getByText('Quantidade: 10');
      const note50Quantity = getByText('Quantidade: 3');
      const note100Quantity = getByText('Quantidade: 2');
      const note10Image = getByAltText('10_reais');
      const note20Image = getByAltText('20_reais');
      const note50Image = getByAltText('50_reais');
      const note100Image = getByAltText('100_reais');

      // Assert
      expect(note10Quantity).toBeInTheDocument();
      expect(note20Quantity).toBeInTheDocument();
      expect(note50Quantity).toBeInTheDocument();
      expect(note100Quantity).toBeInTheDocument();
      expect(note10Image).toBeInTheDocument();
      expect(note20Image).toBeInTheDocument();
      expect(note50Image).toBeInTheDocument();
      expect(note100Image).toBeInTheDocument();
    });