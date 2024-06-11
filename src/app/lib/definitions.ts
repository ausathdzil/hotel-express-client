export type Employee = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  address: string;
  job_title: string;
  image_url?: string;
};

export type Customers = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  address: string;
};

export type Rooms = {
  id: number;
  number: number;
  type: string;
  capacity: number;
  price: number;
  status: string;
};

export type Payments = {
  id: number;
  method: string;
  date: string;
  amount: string;
};

export type Reservations = {
  id: number;
  customer_id: number;
  room_id: number;
  payment_id: number;
  check_in: string;
  check_out: string;
  status: string;
};
