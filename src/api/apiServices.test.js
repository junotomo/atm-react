    // Successfully fetches balance from API and returns it
    it('should successfully fetch balance from API and return it', async () => {
        const mockBalance = { balance: 100 }
        fetch.mockResolvedValueOnce({
          json: jest.fn().mockResolvedValueOnce(mockBalance)
        })
  
        const result = await getBalance()
  
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(balanceApiUrl)
        expect(result).toEqual(mockBalance)
      })

          // Handles API response with unexpected but valid structure and returns balance
    it('should handle API response with unexpected but valid structure and return balance', async () => {
        const mockBalance = { amount: 100 }
        fetch.mockResolvedValueOnce({
          json: jest.fn().mockResolvedValueOnce(mockBalance)
        })
  
        const result = await getBalance()
  
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(balanceApiUrl)
        expect(result).toEqual(mockBalance)
      })