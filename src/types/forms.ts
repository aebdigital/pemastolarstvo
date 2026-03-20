export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
}

export interface InquiryFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  message: string;
}
