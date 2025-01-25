import { createContext, PropsWithChildren, useContext, useState } from "react";

interface CashAdvanceContextValues {
  amountCents: number;
  setAmountCents: (amountCents: number) => void;
}

// @ts-ignore
const CashAdvanceContext = createContext<CashAdvanceContextValues>(null);

export const useCashAdvanceContext = () => useContext(CashAdvanceContext);

const CashAdvanceContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [amountCents, setAmountCents] = useState(0);

  return (
    <CashAdvanceContext.Provider value={{ amountCents, setAmountCents }}>
      {children}
    </CashAdvanceContext.Provider>
  );
};

export default CashAdvanceContextProvider;
