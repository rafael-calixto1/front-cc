export interface Employee {
    id?: number,
    firstName: string,
    lastName: string,
    email: string
}
export type EmployeeCadastrar = Omit<Employee, 'id'>;