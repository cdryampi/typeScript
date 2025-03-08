import { APISchema } from "../models/APISchema"; // Ensure the file exists at the specified path or update the path

export const apiPaginationSkeleton = new APISchema(
  [],
  { next: "", previous: "", first: "", last: "" },
  {
    totalItems: 0,
    itemCount: 0,
    itemsPerPage: 0,
    totalPages: 0,
    currentPage: 1,
  }
);
