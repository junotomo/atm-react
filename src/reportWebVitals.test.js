    // Calls the 'reportWebVitals' function with a valid 'onPerfEntry' parameter.
    import reportWebVitals from './reportWebVitals'
    it('should call the \'reportWebVitals\' function with a valid \'onPerfEntry\' parameter', () => {
        const onPerfEntry = jest.fn();
        reportWebVitals(onPerfEntry);
        expect(onPerfEntry).toHaveBeenCalled();
      });
