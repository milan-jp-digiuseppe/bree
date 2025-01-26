import { createContext, PropsWithChildren, useContext, useState } from "react";

interface CashAdvanceContextValues {
  amountCents: number;
  setAmountCents: (amountCents: number) => void;
  onFinish: () => void;
}

// @ts-ignore
const CashAdvanceContext = createContext<CashAdvanceContextValues>(null);

export const useCashAdvanceContext = () => useContext(CashAdvanceContext);

interface Props {
  onFinish: () => void;
}

const CashAdvanceContextProvider: React.FC<PropsWithChildren<Props>> = ({
  onFinish,
  children,
}) => {
  const [amountCents, setAmountCents] = useState(0);

  return (
    <CashAdvanceContext.Provider
      value={{ amountCents, setAmountCents, onFinish }}
    >
      {children}
    </CashAdvanceContext.Provider>
  );
};

export default CashAdvanceContextProvider;
