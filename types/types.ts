export type Job = {
  id: string;
  title: string;
  company: string;
  tags?: string[];
  salary: string;
  location: string;
  logo: string;
  description?: string;
  recruiterPhone?: string;
  recruiterName?: string;
};


export type Property = {
  id: string;
  title: string;
  price: string;
  location: string;
  area: string;
  images: string[];
};