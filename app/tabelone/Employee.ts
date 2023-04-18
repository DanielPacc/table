export interface Serverdata{
    _embedded: Employees;
    _links: Links;
    page: Page;
}
export interface Employees{
    employees: Employee[];
}
export interface Employee{
    id:number;
    firstName: string;
    lastName: string;
    birthdate: string;
    hiredate: string;
    gender: string;
    
}
export interface Links{
    first: Link;
    prev: Link;
    self: Link;
    next: Link;
    last: Link;
}
export interface Link{
    href: string;
}
export interface Page{
    size: number;
    totalElements: number;
    totalPages: number;
    number:number;
}