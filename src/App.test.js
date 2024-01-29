import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {withdrawMoney} from './api/apiServices';
import apiServices from './api/apiServices'


    it('should render the ATM interface with initial balance and bills data', () => {
      const wrapper = render(<App />);

      expect(wrapper.find('.atm-interface')).toHaveLength(1);
      expect(wrapper.find('.atm-screen')).toHaveLength(1);
      expect(wrapper.find('.withdraw-area')).toHaveLength(1);
      expect(wrapper.find('.withdraw-button-area')).toHaveLength(1);
      expect(wrapper.find('.withdraw-money')).toHaveLength(1);
    });

