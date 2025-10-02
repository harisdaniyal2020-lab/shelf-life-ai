import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/PricingCard";
import { FAQItem } from "@/components/FAQItem";
import { FeatureStep } from "@/components/FeatureStep";
import { Accordion } from "@/components/ui/accordion";
import { ScanBarcode, Bell, ShoppingCart, TrendingDown, Clock, ChefHat, Shield, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";
import mariaImage from "@/assets/maria-testimonial.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Never Run Out of Essentials. Automatically Track & Manage All Your Food, Personal Care, and Cleaning Supplies.
              </h1>
              <p className="text-xl text-muted-foreground">
                Simplify your home life, reduce waste, and save money with intelligent inventory management.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                Buy the Service
              </Button>
            </div>
            <div className="animate-fade-in">
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
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-slide-in">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-muted-foreground">Featured on</span>
              <div className="flex gap-6">
                <span className="font-bold text-lg">LinkedIn</span>
                <span className="font-bold text-lg">Apartment Therapy</span>
              </div>
            </div>
            <div className="border-l border-border pl-8 max-w-2xl">
              <p className="text-lg italic text-foreground">
                "Cut our food waste by 60% and never buy double again!"
              </p>
              <p className="text-sm text-muted-foreground mt-2">– The Khan Family</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in">
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
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in">
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
              <div key={index} className="flex gap-4 p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in">
                <benefit.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fade-in">
            Simple Steps to a Smarter Home
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <FeatureStep 
              number="1"
              icon={ScanBarcode}
              title="Scan & Add"
              description="Quickly scan grocery receipts, product barcodes (for food, toothpaste, cleaners, etc.), or input items manually."
            />
            <FeatureStep 
              number="2"
              icon={Sparkles}
              title="Smart Tracking"
              description="ShelfLife automatically categorizes items, estimates expiry dates for perishables, and tracks usage patterns for consumables."
            />
            <FeatureStep 
              number="3"
              icon={Bell}
              title="Alerts & Suggestions"
              description="Get notifications for expiring food, low stock on essentials, and smart recommendations for reordering or using up items."
            />
          </div>
        </div>
      </section>

      {/* Deep Proof / Testimonial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 animate-fade-in">
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
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 animate-fade-in">
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
          <div className="mt-12 p-6 bg-card rounded-lg border border-border text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-foreground font-semibold mb-2">Your Data is Secure</p>
            <p className="text-sm text-muted-foreground">
              We never share your personal inventory or usage information. Your privacy is our priority.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 animate-fade-in">
            Choose Your ShelfLife Plan
          </h2>
          <p className="text-center text-muted-foreground mb-16">Start with a 30-day free trial. No credit card required.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard 
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
              highlighted={true}
            />
            <PricingCard 
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
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold animate-fade-in">
            Stop Waste & Stay Stocked – Get ShelfLife AI Free for 30 Days
          </h2>
          <Button size="lg" className="text-lg px-12 py-6 h-auto animate-fade-in">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © 2025 ShelfLife AI. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
