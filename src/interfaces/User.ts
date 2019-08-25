export interface User {
  name: string;
  email: string;
  profileImage: string;
}

export interface CurrentUser {
  userData: User;
  privateKey: string;
}
