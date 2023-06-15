export class Employee {
  id!: number;
  name!: string;
  email!: string;
  jobTitle!: string;
  phone!: string;
  imageUrl!: string;
  employeeCode!: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.email = '';
    this.jobTitle = '';
    this.phone = '';
    this.imageUrl = '';
    this.employeeCode = '';
  }
}
