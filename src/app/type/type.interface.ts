export interface Event {
  id: number;
  title: string;
  description: string;
  start: string | null; // Assuming start is a date in ISO format or null
  end: string | null; // Assuming end is a date in ISO format or null
  created_at: string; // Assuming created_at is a date in ISO format
  updated_at: string; // Assuming updated_at is a date in ISO format
}

export interface CalendarEvents {
  events: Event[];
}


export interface Props {
  params: {
    id: number;
  };
}

export interface CourseForm {
  id: number;
  code: string;
  title: string;
  description?: string;
  price: number;
  created_at: Date;
  updated_at: Date;
  cover_url?: string;
  banner_url?: string;
  expiration: string;
  docter_id: number;
  course_expired: string;
  status: boolean;
}


export interface ProductsTableProps {
  id: number | null;
  selected: CourseForm | null;
}

export interface ProductsCourse {
  id: number;
  name: string;
  price?: string;
  image_url?: string;
  product: ProductProps;
  sale_price?: string;
  products_id: number;
}

export interface ProductProps {
  id: number;
  name: string;
  product_code: string;
  image_url: string;
  price: number;
  sale_price: number;
}


export interface CourseYaProps {
  products: ProductsCourse[];
}


export interface Course {
  id: number;
  code: string;
  title: string;
  description: string;
  price: string;
  expiration: string | null;
  course_expired: number;
  docter_id: number;
  status: boolean;
  created_at: string;
  updated_at: string;
  cover_url: string;
  banner_url: string;
}


export interface Product {
  id: number;
  title: string;
  cover_url: string;
  price: number;
  set: number;
  description: string;
}



export interface Courses {
  id: number;
  title: string;
  description: string;
  price: string;
  expiration: string | null;
  course_expired: string;
  docter_id: number;
  status: boolean;
  created_at: string;
  updated_at: string;
  cover_url: string;
  banner_url: string;
}

export interface Customer {
  id: number;
  first_name: string;
  last_name: string;
  code_id: string;
  email: string;
  password: string;
  role: number;
  line_id: string;
  position_id: number;
  image_url: string;
  permission: string;
  gender: string;
  bloodGroup: string;
  chronicDiseases: string;
  allergies: string;
  phone: string;
  bod: string;
  nickname: string;
  status: boolean;
  created_at: string;
}

export interface Payment {
  id: number;
  customer_id: number;
  appointment_id: number;
  amount: string;
  payment_date: string;
  status: string;
  transaction_date: string;
  transaction_time: string;
}

export interface Appointment {
  id: number;
  doc_no: string;
  customer_id: number;
  course_id: number;
  appointment_date: string;
  appointment_time: string;
  status: string;
  created_at: string;
  updated_at: string;
  course: Courses;
  customer: Customer;
  payments: Payment[];
}


