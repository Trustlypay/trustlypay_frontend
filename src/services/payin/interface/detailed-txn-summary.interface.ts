export interface IDetailedTxnSummary {
  transaction_date: string;
  created_date: string;
  transaction_username: string;
  transaction_amount: string;
  transaction_gid: string;
  transaction_status: string;
  bank_ref_no: string;
  udf1: string;
  merchant_name: string;
}

export interface Paginate<T> {
  total: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
  items: T;
}
