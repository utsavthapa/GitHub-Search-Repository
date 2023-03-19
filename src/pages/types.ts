export interface SearchProps {
  searchItem: string;
  setSearchItem: React.Dispatch<React.SetStateAction<string>>;
}

export interface HeaderProps {
  searchItem: string;
  setSearchItem: React.Dispatch<React.SetStateAction<string>>;
}

export interface owner {
  login: string;
  avatar_url: string;
}
export interface item {
  idx: number;
  id: number;
  name: string;
  full_name: string;
  owner: owner;
  description: string;
  stargazers_count: number;
  watchers: number;
  forks_count: number;
}
export interface data {
  incomplete_results: boolean;
  items: item[];
  total_count: number;
}

export interface repositoriesList {
  data: data;
}
