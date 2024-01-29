import { getBalance, getAtmData, initScreenBalanceAndAtmBills, withdrawMoney } from "./apiServices";
const withdrawApiUrl = process.env.REACT_APP_PUBLIC_WITHDRAWL
const balanceApiUrl = process.env.REACT_APP_PUBLIC_BALANCE_URL
const atmDataApiUrl = process.env.REACT_APP_PUBLIC_ATM_NOTES_NUMBER

    it('should return balance from balanceApiUrl when getBalance is called', async () => {
      const mockResponse = { balance: 1000 };
      const mockFetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue(mockResponse)
      });
      global.fetch = mockFetch;

      const result = await getBalance();

      expect(mockFetch).toHaveBeenCalledWith(balanceApiUrl);
      expect(result).toEqual(mockResponse);
    });

    it('should return number of notes from atmDataApiUrl when getAtmData is called', async () => {
      const mockResponse = { "number of notes": 10 };
      const mockFetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue(mockResponse)
      });
      global.fetch = mockFetch;

      const result = await getAtmData();

      expect(mockFetch).toHaveBeenCalledWith(atmDataApiUrl);
      expect(result).toEqual(mockResponse["number of notes"]);
    });


    it('should return initial balance and ATM bills when initScreenBalanceAndAtmBills is called', async () => {
      const mockBalanceResponse = { balance: 1000 };
      const mockAtmDataResponse = { "number of notes": 10 };
      const mockFetch = jest.fn().mockResolvedValueOnce({
          json: jest.fn().mockResolvedValue(mockBalanceResponse)
      }).mockResolvedValueOnce({
          json: jest.fn().mockResolvedValue(mockAtmDataResponse)
      });
      global.fetch = mockFetch;

      const result = await initScreenBalanceAndAtmBills();

      expect(mockFetch).toHaveBeenNthCalledWith(1, balanceApiUrl);
      expect(mockFetch).toHaveBeenNthCalledWith(2, atmDataApiUrl);
      expect(result).toEqual({ initAtmBills: mockAtmDataResponse["number of notes"], initBalance: mockBalanceResponse.balance });
  });

   
    it('should make a PUT request to the withdrawApiUrl with the correct parameters and return the updated data', async () => {
      const mockResponse = { status: 200, json: jest.fn().mockResolvedValue({ updatedData: true }) };
      const mockFetch = jest.fn().mockResolvedValue(mockResponse);
      global.fetch = mockFetch;

      const withdrawAmount = 100;
      const result = await withdrawMoney(withdrawAmount);

      expect(mockFetch).toHaveBeenCalledWith(withdrawApiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pin: 777,
          amount: withdrawAmount
        })
      });
      expect(mockResponse.json).toHaveBeenCalled();
      expect(result).toEqual({ updatedData: true });
    });

    it('should handle and display an error message if the response from the API is not in JSON format', async () => {
      const mockResponse = { status: 200, json: jest.fn().mockRejectedValue(new Error()) };
      const mockFetch = jest.fn().mockResolvedValue(mockResponse);
      global.fetch = mockFetch;

      const withdrawAmount = 100;
      const consoleSpy = jest.spyOn(console, 'log');
      const alertSpy = jest.spyOn(window, 'alert');

      await withdrawMoney(withdrawAmount);

      expect(consoleSpy).toHaveBeenCalledWith(new Error());
      expect(alertSpy).toHaveBeenCalledWith("Valor inválido");
    });   