import * as z from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(400, "Description must be less than 400 characters"),
  location: z
    .string()
    .min(3, "Location must be at least 3 characters")
    .max(400, "Location must be less than 400 characters"),
  //   imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  //   categoryId: z.string(),
  foodtype: z.string(),
  cateringRequired: z.boolean(),
  contact: z.boolean(),
  contactNumber: z
    .string()
    .min(10, "Contact number must be at least 10 characters")
    .max(10, "Contact number must be 10 characters"),
  //   url: z.string().url(),
});
