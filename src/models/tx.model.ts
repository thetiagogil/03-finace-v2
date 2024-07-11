export interface TxModel {
  id?: string;
  user_id?: string;
  type?: string;
  status?: string;
  category?: string;
  date?: string;
  value?: number | null;
  description?: string;
}
