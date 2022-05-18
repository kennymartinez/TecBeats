import { Data } from "./Data";
import { Pagination } from "./pagination";

export interface GResponse {
    pagination: Pagination;
    data: Data[];
}