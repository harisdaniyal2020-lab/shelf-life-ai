import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

interface LegalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "terms" | "privacy";
}

const termsContent = {
  title: "Terms of Service for ShelfLife AI",
  lastUpdated: "Oct 26, 2023",
  content: [
    {
      heading: "Acceptance",
      text: "By using ShelfLife AI's Service (website, app), you agree to these Terms. Using our Service means you accept these Terms."
    },
    {
      heading: "Service",
      text: "ShelfLife AI helps track household inventory, expiry dates, and optimize shopping."
    },
    {
      heading: "Your Account",
      text: "You're responsible for account security and accuracy of information."
    },
    {
      heading: "User Conduct",
      text: "Use Service lawfully; no harassment or interference."
    },
    {
      heading: "Intellectual Property",
      text: "All Service content (text, graphics, software) belongs to ShelfLife AI or its licensors."
    },
    {
      heading: "Subscription",
      text: "Paid plans require agreed fees; auto-renews unless canceled."
    },
    {
      heading: "Disclaimer",
      text: "Service is 'as is'; no guarantees on expiry/tracking accuracy. Use at your own risk."
    },
    {
      heading: "Liability",
      text: "ShelfLife AI is not liable for indirect, incidental, special, or punitive damages."
    },
    {
      heading: "Changes",
      text: "We'll notify you of Terms updates by posting them here."
    }
  ]
};

const privacyContent = {
  title: "Privacy Policy for ShelfLife AI",
  lastUpdated: "Oct 26, 2023",
  content: [
    {
      heading: "Introduction",
      text: "ShelfLife AI protects your privacy. This policy explains data handling."
    },
    {
      heading: "Info Collected",
      text: "Personal: Name, email, billing (for registration/paid plans). Usage: Item entries, scans, usage patterns, notifications. Device: IP address, OS, browser type."
    },
    {
      heading: "How We Use Info",
      text: "Provide/maintain Service, manage account/transactions, send alerts, personalize/improve, analyze usage, communicate updates."
    },
    {
      heading: "Data Sharing",
      text: "Family: Inventory/lists shared with authorized members for family plans. Service Providers: Shared with vendors (payments, hosting, analytics) under confidentiality. Legal: Disclosed if legally required or for public authority requests. Business Transfers: May transfer in merger/acquisition."
    },
    {
      heading: "Security",
      text: "We use measures to protect data, but no internet transmission is fully secure."
    },
    {
      heading: "Retention",
      text: "Data kept only as long as needed for purposes or by law."
    },
    {
      heading: "Your Rights",
      text: "Access, correct, delete, restrict your data. Contact us to exercise."
    },
    {
      heading: "Third-Party Links",
      text: "Not responsible for external sites' content/privacy."
    },
    {
      heading: "Children's Privacy",
      text: "Not for under 13s; no knowing collection from them."
    },
    {
      heading: "Changes",
      text: "Policy updates posted here with new 'Last Updated' date."
    }
  ]
};

export const LegalModal = ({ open, onOpenChange, type }: LegalModalProps) => {
  const content = type === "terms" ? termsContent : privacyContent;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{content.title}</DialogTitle>
          <p className="text-sm text-muted-foreground">Last Updated: {content.lastUpdated}</p>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            {content.content.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-2">{section.heading}</h3>
                <p className="text-muted-foreground leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
