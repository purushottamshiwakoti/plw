
import { z } from "zod";

export const affiliateFormSchema= z.object({
    firstName: z.string().min(2,{
        message:"Please enter your first name"
    }),
    lastName: z.string().min(2,{
        message:"Please enter your last name"
    }),
    email: z.string().email(),
    message:z.string().min(5,{
        message:"Message must be at least 5 characters"
    })
  });
export const commentFormSchema= z.object({
    fullName: z.string().min(2,{
        message:"Please enter your full name"
    }),
    
    email: z.string().email(),
    comment:z.string().min(5,{
        message:"Comment must be at least 5 characters"
    })
  });