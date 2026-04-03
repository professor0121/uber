export type AuthMode = "login" | "register";

export type Role = "raider" | "captain";

export type LoginForm = {
  email: string;
  password: string;
};

export type RegisterForm = {
  name: string;
  email: string;
  phone:string;
  password: string;
  role:Role;
};

export type AuthForm = LoginForm & Partial<RegisterForm>;