import { useMutation } from "@tanstack/react-query";
import { sleep } from "../../utils/api";

interface RequestCashAdvanceRequest {
  amount: number; // cents
}

interface RequestCashAdvanceResponse {
  // empty
}

export const useRequestCashAdvanceMutation = () => {
  return useMutation({
    mutationFn: async (
      req: RequestCashAdvanceRequest
    ): Promise<RequestCashAdvanceResponse> => {
      await sleep(1000);
      return {};
    },
  });
};
