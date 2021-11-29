interface UserProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  nickname: string;
}

class User {
  id!: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  nickname?: string;

  constructor({ id, firstName, lastName, email, nickname }: UserProps) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.nickname = nickname;
  }
}

export { User };
