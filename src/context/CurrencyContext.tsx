import React, { createContext, useContext, useState, useEffect } from 'react';

type Currency = 'GHS' | 'USD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  exchangeRate: number; // GHS to USD
  formatPrice: (amountGHS: number) => string;
  isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const saved = localStorage.getItem('kshop-currency');
    return (saved as Currency) || 'GHS';
  });
  const [exchangeRate, setExchangeRate] = useState<number>(0.07); // Fallback rate
  const [isLoading, setIsLoading] = useState(true);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('kshop-currency', newCurrency);
  };

  useEffect(() => {
    const fetchRate = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://open.er-api.com/v6/latest/GHS');
        const data = await response.json();
        if (data.rates && data.rates.USD) {
          setExchangeRate(data.rates.USD);
        }
      } catch (error) {
        console.error('Failed to fetch exchange rate:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRate();
  }, []);

  const formatPrice = (amountGHS: number) => {
    if (currency === 'GHS') {
      return `GH₵ ${amountGHS.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
      const amountUSD = amountGHS * exchangeRate;
      return `$ ${amountUSD.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, exchangeRate, formatPrice, isLoading }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
