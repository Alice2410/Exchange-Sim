import { useCallback, useState } from "react";

export const useCurrencyAmount = () => {
  const [value, setValue] = useState('1');

  const processAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value.replace(/\s/g,'');

    if (currentValue === '') return setValue('');
    
    const newValue = Number(currentValue);

    if (newValue) return setValue(newValue.toLocaleString());
  }, []);

  return {value, processAmountChange};
}