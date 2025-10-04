import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

interface NewsletterFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NewsletterForm = ({ open, onOpenChange }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = newsletterSchema.safeParse({ email });
    
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });

    setEmail("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Subscribe to Our Newsletter</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={error ? "border-destructive" : ""}
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
          <Button type="submit" className="w-full">
            Subscribe
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
