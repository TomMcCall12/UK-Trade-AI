import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessData, navigation } from "@/lib/business-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground" data-testid="text-logo">ZA</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground" data-testid="text-business-name">ZA Electrical Ltd</p>
              <p className="text-xs text-muted-foreground">Professional Electricians</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  location === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${businessData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex"
            >
              <Button variant="outline" size="sm" className="gap-2" data-testid="button-whatsapp-header">
                <MessageCircle className="h-4 w-4 text-green-600" />
                <span className="hidden md:inline">WhatsApp</span>
              </Button>
            </a>
            <a href={`tel:${businessData.mobile.replace(/\s/g, "")}`}>
              <Button size="sm" className="gap-2" data-testid="button-call-header">
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">{businessData.mobile}</span>
                <span className="md:hidden">Call</span>
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-md text-sm font-medium transition-colors",
                  location === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border mt-4 space-y-2">
              <a
                href={`https://wa.me/${businessData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full gap-2" data-testid="button-whatsapp-mobile">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                  WhatsApp Us
                </Button>
              </a>
              <a href={`tel:${businessData.mobile.replace(/\s/g, "")}`} className="block">
                <Button className="w-full gap-2" data-testid="button-call-mobile">
                  <Phone className="h-4 w-4" />
                  Call {businessData.mobile}
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
