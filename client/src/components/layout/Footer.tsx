import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink, Shield, CheckCircle } from "lucide-react";
import { businessData, navigation } from "@/lib/business-data";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent">
                <span className="text-lg font-bold text-accent-foreground">ZA</span>
              </div>
              <div>
                <p className="font-semibold" data-testid="text-footer-name">{businessData.name}</p>
                <p className="text-sm text-sidebar-foreground/70">Professional Electricians</p>
              </div>
            </div>
            <p className="text-sm text-sidebar-foreground/80">
              Experienced and reliable electricians based in Burgess Hill, covering East and West Sussex since {businessData.established}.
            </p>
            <div className="flex flex-wrap gap-2">
              {businessData.trustCredentials.map((credential) => (
                <span
                  key={credential}
                  className="inline-flex items-center gap-1 text-xs bg-sidebar-accent px-2 py-1 rounded"
                >
                  <CheckCircle className="h-3 w-3 text-accent" />
                  {credential}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-sidebar-foreground/80 hover:text-accent transition-colors"
                  data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${businessData.landline.replace(/\s/g, "")}`}
                className="flex items-start gap-3 text-sidebar-foreground/80 hover:text-accent transition-colors"
                data-testid="link-footer-landline"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{businessData.landline}</span>
              </a>
              <a
                href={`tel:${businessData.mobile.replace(/\s/g, "")}`}
                className="flex items-start gap-3 text-sidebar-foreground/80 hover:text-accent transition-colors"
                data-testid="link-footer-mobile"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{businessData.mobile}</span>
              </a>
              <a
                href={`mailto:${businessData.email}`}
                className="flex items-start gap-3 text-sidebar-foreground/80 hover:text-accent transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{businessData.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sidebar-foreground/80">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{businessData.hours}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Address</h3>
            <address className="not-italic text-sm text-sidebar-foreground/80 space-y-1">
              <p>{businessData.address.line1}</p>
              <p>{businessData.address.line2}</p>
              <p>{businessData.address.line3}</p>
              <p>{businessData.address.town}</p>
              <p>{businessData.address.county}</p>
              <p>{businessData.address.postcode}</p>
            </address>
            <div className="pt-2">
              <a
                href={`https://wa.me/${businessData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2 bg-green-600 hover:bg-green-700" data-testid="button-whatsapp-footer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-sidebar-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-sidebar-foreground/60">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-accent" />
            <span>NICEIC Registered: {businessData.niceicNumber}</span>
          </div>
          <p>&copy; {new Date().getFullYear()} {businessData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
