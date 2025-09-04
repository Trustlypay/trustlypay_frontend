export interface ICreateMerchantStep1 {
  fk_monthly_expenditure_option_id: number;
  business_name: string;
  address_line1: string;
  address_line2: string;
  city: string;
  fk_state_id: number;
  pincode: number;
  country: string;
  business_website: string;
  business_pan: string;
  business_gst: string;
  fk_business_type_id: number;
  fk_business_category_id: number;
  fk_business_sub_category_id: number;
  bank_name: string;
  ifsc_code: string;
  bank_account_number: string;
  auth_sign_name: string;
  auth_sign_contact_number: number;
  auth_sign_pan: string;
  auth_sign_aadhar: string;
  auth_sign_email: string;
  dashboard_password: string;
}
