export interface TxModel {
  user_id: string;
  type: string;
  status: string;
  category: string;
  date: string;
  value: number;
  description?: string;
}
