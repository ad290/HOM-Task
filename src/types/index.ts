export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
}

export interface SearchState {
  query: string;
  results: User[];
}