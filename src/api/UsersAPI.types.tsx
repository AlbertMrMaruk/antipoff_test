export type SignInData = {
  email: string;
  password: string;
};

export type SignUpData = SignInData & {
  name: string;
  repassword: string;
};

type SignError = {
  error: string;
};

type SignInSuccess = {
  token: string;
};

type SignUpSuccess = SignInSuccess & {
  id: number;
};

export type SignInResponse = SignError | SignInSuccess;

export type SignUpResponse = SignError | SignUpSuccess;

export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type UserListResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserType[];
};

export type SingleUserResponse = {
  data: UserType;
};

export type UpdateUserData = {
  avatar: string;
};

export type UpdateUserResponse = {
  avatar: string;
  updatedAt: string;
};
