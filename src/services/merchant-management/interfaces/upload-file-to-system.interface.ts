export interface IUploadFileToSystem {
  pk_file_id: number;
  original_name: string;
  mime_type: string;
  size: string;
  url: string;
  public_id: string;
  description: null;
  created_at: Date;
  fk_dashboard_user_id: number;
  fk_merchant_management_id: number;
  file_for: string;
}
