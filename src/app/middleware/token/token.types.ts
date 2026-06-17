export interface userLocalData{
   userId: string;
    email: string;
    name: string;
    global_role: "SUPER_ADMIN" | "COMPANY_ADMIN" | "MEMBER";
    company_id: string | null;
    password_version: number;
}