import { useQuery } from "@tanstack/react-query";
import { sleep } from "../../utils/api";

interface HomeQueryResponse {
  user: {
    firstName: string;
  };
  cashAdvancePolicy: {
    limit: number; // cents
    paybackDuration: number; // days
    costPerHunderDollarsBorrowed: number; // cents
  };
}

export const useHomeQuery = () => {
  return useQuery({
    queryKey: ["home"],
    queryFn: async (): Promise<HomeQueryResponse> => {
      await sleep(2500);
      return {
        user: {
          firstName: "Milan",
        },
        cashAdvancePolicy: {
          limit: 500_00,
          paybackDuration: 14,
          costPerHunderDollarsBorrowed: 15_00,
        },
      };
    },
  });
};
