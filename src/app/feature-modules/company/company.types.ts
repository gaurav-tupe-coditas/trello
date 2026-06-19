import z from "zod";

export interface compnayCreation {
  name: string;
  logo?: string | null;
  subscription_id: string;
  admin_email: string;
  admin_name: string;
  createdBy: string;
}

export const CompanyServiceCreate = z.object({
  name: z.string(),
  subscription_id: z.string(),
  logo: z.union([z.url(), z.string()]),
  admin_email: z.string(),
  admin_name: z.string(),
  createdBy: z.string(),
});

export const CompanyRouteCreate = z.object({
  name: z.string(),
  subscription_id: z.string(),
  admin_email: z.string(),
  admin_name: z.string(),
  createdBy: z.string(),
});

export const RouteViewCompany = z.object({
  id: z.uuid(),
});
