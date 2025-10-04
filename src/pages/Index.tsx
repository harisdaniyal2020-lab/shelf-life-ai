import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ExpandablePricingCard } from "@/components/ExpandablePricingCard";
import { FAQItem } from "@/components/FAQItem";
import { AnimatedFeatureStep } from "@/components/AnimatedFeatureStep";
import { ContactForm } from "@/components/ContactForm";
import { NewsletterForm } from "@/components/NewsletterForm";
import { LegalModal } from "@/components/LegalModal";
import { Accordion } from "@/components/ui/accordion";
import { ScanBarcode, Bell, ShoppingCart, TrendingDown, Clock, ChefHat, Shield, Sparkles, Facebook, Instagram, Linkedin, X } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";
import mariaImage from "@/assets/maria-testimonial.jpg";
import techcrunchLogo from "@/assets/logo-techcrunch.png";
import producthuntLogo from "@/assets/logo-producthunt.png";
import fastcompanyLogo from "@/assets/logo-fastcompany.png";
import thevergeLogo from "@/assets/logo-theverge.png";

const Index = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<"terms" | "privacy">("terms");

  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openLegalModal = (type: "terms" | "privacy") => {
    setLegalModalType(type);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background/95">
      <Header onGetStartedClick={() => setIsContactFormOpen(true)} />
      <ContactForm open={isContactFormOpen} onOpenChange={setIsContactFormOpen} />
      <NewsletterForm open={isNewsletterOpen} onOpenChange={setIsNewsletterOpen} />
      <LegalModal open={legalModalOpen} onOpenChange={setLegalModalOpen} type={legalModalType} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-12">
            <div className="space-y-8 animate-fade-in max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight hover:scale-105 transition-transform duration-300">
                Your Home, Never Empty Again.
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
                Track food, toiletries, and cleaners automatically—alerts before you run out.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 h-auto hover:scale-105 transition-transform duration-300" onClick={scrollToPricing}>
                Get Started for Free
              </Button>
            </div>
            <div className="animate-fade-in w-full max-w-3xl">
              <img 
                src={heroImage} 
                alt="Smart home inventory management system" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/80 backdrop-blur-sm border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start gap-12 animate-slide-in">
            <div className="flex flex-col gap-6 md:w-1/3">
              <h3 className="text-3xl font-bold text-foreground animate-fade-in">Featured On</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/80 p-4 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <img src={techcrunchLogo} alt="TechCrunch" className="w-full h-12 object-contain" />
                </div>
                <div className="bg-background/80 p-4 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <img src={producthuntLogo} alt="Product Hunt" className="w-full h-12 object-contain" />
                </div>
                <div className="bg-background/80 p-4 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <img src={fastcompanyLogo} alt="Fast Company" className="w-full h-12 object-contain" />
                </div>
                <div className="bg-background/80 p-4 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <img src={thevergeLogo} alt="The Verge" className="w-full h-12 object-contain" />
                </div>
              </div>
            </div>
            <div className="flex-1 md:border-l md:border-border md:pl-8">
              <div className="space-y-3 animate-fade-in">
                <p className="text-lg text-foreground leading-relaxed">
                  "I can't believe how much this has changed our lives! We used to throw away so much expired food and constantly ran out of toilet paper at the worst times. Now, ShelfLife alerts me before anything expires, and I always know exactly what we have. My grocery bills are down, my stress is down, and my family actually thinks I'm organized now!"
                </p>
                <p className="text-sm font-semibold text-primary">– The Khan Family, Austin TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background/95">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in hover:scale-105 transition-transform duration-300">
            Is Household Management a Constant Juggle?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
            From rotting produce to empty toothpaste tubes, household management is a constant juggle. 
            You overbuy, underbuy, and waste money on expired items. You need a central system to know 
            exactly what's in your home, when it expires, and when to restock.
          </p>
        </div>
      </section>

      {/* Value / Outcomes Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/70 backdrop-blur-sm border-y border-border">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in hover:scale-105 transition-transform duration-300">
            Unlock a Smarter, More Organized Home
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingDown,
                text: "Reduce monthly household waste (food & non-food) costs by 40%"
              },
              {
                icon: Sparkles,
                text: "Always know what's in your pantry, fridge, bathroom, and cleaning cupboard with 95% accuracy"
              },
              {
                icon: Bell,
                text: "Get timely expiry alerts for food and proactive low-stock notifications for essentials 3-7 days before you run out"
              },
              {
                icon: Clock,
                text: "Spend 20-30% less time planning grocery and shopping trips"
              },
              {
                icon: ChefHat,
                text: "Discover 2-3 new recipes weekly using ingredients you already own, and product usage tips for non-food items"
              },
              {
                icon: ShoppingCart,
                text: "Eliminate emergency runs to the store for forgotten items, 90% of the time"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center gap-4 p-8 bg-background/80 rounded-lg shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in">
                <benefit.icon className="w-8 h-8 text-primary shrink-0 hover:scale-125 transition-transform duration-300" />
                <p className="text-foreground leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-background/95">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in hover:scale-105 transition-transform duration-300">
            Simple Steps to a Smarter Home
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <AnimatedFeatureStep 
              number="1"
              icon={ScanBarcode}
              title="Scan & Add"
              description="Quickly scan grocery receipts, product barcodes (for food, toothpaste, cleaners, etc.), or input items manually."
              animationClass="group-hover:animate-scan"
            />
            <AnimatedFeatureStep 
              number="2"
              icon={Sparkles}
              title="Smart Tracking"
              description="ShelfLife automatically categorizes items, estimates expiry dates for perishables, and tracks usage patterns for consumables."
              animationClass="group-hover:animate-twinkle"
            />
            <AnimatedFeatureStep 
              number="3"
              icon={Bell}
              title="Alerts & Suggestions"
              description="Get notifications for expiring food, low stock on essentials, and smart recommendations for reordering or using up items."
              animationClass="group-hover:animate-ring"
            />
          </div>
        </div>
      </section>

      {/* Deep Proof / Testimonial */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/70 backdrop-blur-sm border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 animate-fade-in hover:scale-105 transition-transform duration-300">
            Real Results, Real Savings
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={mariaImage} 
                alt="Maria, a satisfied ShelfLife AI customer in her organized kitchen" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <p className="text-xl text-foreground leading-relaxed">
                "See how Maria transformed her entire household into a waste-free, always-stocked zone, 
                saving over <span className="font-bold text-primary">$800 a year</span> and eliminating 
                last-minute dashes for toilet paper."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-1 w-16 bg-primary"></div>
                <p className="text-sm font-semibold text-muted-foreground">MARIA, DALLAS TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-background/95">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 animate-fade-in hover:scale-105 transition-transform duration-300">
            Questions? We've Got Answers
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <FAQItem 
              value="item-1"
              question="Is scanning every item time-consuming?"
              answer="No, receipt scanning adds multiple items at once, and barcode scanning is instant. Most users spend < 5-10 minutes per shopping trip. You can also import previous online orders."
            />
            <FAQItem 
              value="item-2"
              question="What about items without barcodes or expiry dates?"
              answer="Easy manual entry with smart suggestions for common items (e.g., 'toothpaste,' 'detergent') and usage tracking to predict when you'll run out."
            />
            <FAQItem 
              value="item-3"
              question="Can my whole family use it?"
              answer="Yes, easily share your household inventory with family members, so everyone is on the same page for shopping and usage."
            />
          </Accordion>
          <div className="mt-12 p-6 bg-card rounded-lg border border-border text-center shadow-sm">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-foreground font-semibold mb-2">Your Data is Secure</p>
            <p className="text-sm text-muted-foreground">
              We never share your personal inventory or usage information. Your privacy is our priority.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/70 backdrop-blur-sm border-y border-border">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 animate-fade-in hover:scale-105 transition-transform duration-300">
            Choose Your ShelfLife Plan
          </h2>
          <p className="text-center text-muted-foreground mb-16">Start with a 30-day free trial. No credit card required.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ExpandablePricingCard 
              title="Home Hub"
              price="$6.99"
              description="billed annually, save 15%"
              features={[
                "Unlimited Items & Storage",
                "Advanced Recipe Integration",
                "Usage Tips for All Products",
                "Expiry & Low-Stock Alerts",
                "Receipt & Barcode Scanning",
                "Smart Shopping Lists"
              ]}
              detailedFeatures={[
                "Multi-location tracking (pantry, fridge, bathroom, garage)",
                "Custom categories and tags",
                "Recipe suggestions based on available ingredients",
                "Meal planning assistant",
                "Product usage tips and hacks",
                "Email and push notifications",
                "Mobile app access (iOS & Android)",
                "Export shopping lists to your phone"
              ]}
              highlighted={true}
              onCTAClick={() => setIsContactFormOpen(true)}
            />
            <ExpandablePricingCard 
              title="Family Sync"
              price="$10.99"
              description="up to 5 users"
              features={[
                "Everything in Home Hub",
                "Up to 5 Family Members",
                "Shared Inventory Access",
                "Consolidated Shopping Lists",
                "Family Usage Analytics",
                "Priority Support"
              ]}
              detailedFeatures={[
                "Real-time sync across all family devices",
                "Individual user profiles with permissions",
                "Collaborative shopping lists",
                "Activity log to see who added/removed items",
                "Family consumption patterns and insights",
                "Shared recipe collections",
                "Priority email and chat support",
                "Early access to new features"
              ]}
              onCTAClick={() => setIsContactFormOpen(true)}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background/95">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold animate-fade-in hover:scale-105 transition-transform duration-300">
              Stop Waste & Stay Stocked
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-in">
              Get ShelfLife AI Free for 30 Days
            </p>
          </div>
          <Button size="lg" className="text-lg px-12 py-6 h-auto animate-fade-in hover:scale-105 transition-transform duration-300" onClick={() => setIsNewsletterOpen(true)}>
            Subscribe to the Newsletter
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-muted-foreground">
                © 2025 ShelfLife AI. All rights reserved.
              </p>
              <div className="flex gap-8">
                <button 
                  onClick={() => openLegalModal("privacy")}
                  className="text-sm text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-300"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => openLegalModal("terms")}
                  className="text-sm text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-300"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => setIsContactFormOpen(true)}
                  className="text-sm text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-125 duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-125 duration-300" aria-label="X (formerly Twitter)">
                <X className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-125 duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-125 duration-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
