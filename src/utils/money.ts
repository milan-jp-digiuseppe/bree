import Dinero from "dinero.js";

export const centsToDinero = (cents: number) => Dinero({ amount: cents });
export const formatDinero = (d: Dinero.Dinero) => d.toFormat("$0,0.00");
