import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactFormSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          message: validationError.message 
        });
      }

      const submission = await storage.createContactSubmission(result.data);
      
      console.log("New contact form submission:", {
        id: submission.id,
        name: submission.name,
        phone: submission.phone,
        service: submission.service,
        submittedAt: submission.submittedAt,
      });

      return res.status(201).json({ 
        message: "Message received successfully",
        id: submission.id 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request" 
      });
    }
  });

  return httpServer;
}
