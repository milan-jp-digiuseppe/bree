import { format } from "date-fns";

export const formatDate = (d: Date) => format(d, "MMM d, yyyy");
