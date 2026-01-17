import { Link } from "wouter";
import {
  Phone,
  MessageCircle,
  Zap,
  ClipboardCheck,
  LayoutGrid,
  Lightbulb,
  BatteryCharging,
  Home,
  Shield,
  Cable,
  Sun,
  Plug,
  Building2,
  TreePine,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { businessData, services } from "@/lib/business-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  ClipboardCheck,
  LayoutGrid,
  Lightbulb,
  BatteryCharging,
  Home,
  Shield,
  Cable,
  Sun,
  Plug,
  Building2,
  TreePine,
};

const categories = [
  { name: "All", value: "all" },
  { name: "Emergency", value: "Emergency" },
  { name: "Testing", value: "Testing" },
  { name: "Installation", value: "Installation" },
  { name: "Lighting", value: "Lighting" },
  { name: "EV", value: "EV" },
  { name: "Smart Home", value: "Smart Home" },
  { name: "Security", value: "Security" },
  { name: "Commercial", value: "Commercial" },
];

export default function Services() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4" data-testid="badge-services">Our Services</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-services-page-title">
              Comprehensive Electrical Services
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              From emergency repairs to complete rewiring, we provide a full range of electrical services for domestic and commercial properties across Sussex. All work complies with {businessData.standard}.
            </p>
            <div className="flex flex-wrap gap-2">
              {businessData.trustCredentials.map((credential) => (
                <Badge key={credential} variant="secondary">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  {credential}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Zap;
              return (
                <Card key={service.id} className="group hover-elevate" data-testid={`card-service-detail-${service.id}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {service.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="gap-2 w-full" data-testid={`button-enquire-${service.id}`}>
                        Enquire
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8 sm:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    All Work Certified to British Standards
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Every installation and repair is completed to {businessData.standard} standards. As NICEIC registered electricians, we provide full certification for all work.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "NICEIC approved domestic and 3-phase work",
                      "Full testing and certification included",
                      "Landlord safety certificates (EICR)",
                      "Free video quotations available",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-flex flex-col items-center justify-center p-8 rounded-lg bg-background border border-border">
                    <Shield className="h-16 w-16 text-accent mb-4" />
                    <p className="font-semibold text-foreground mb-1">NICEIC Registered</p>
                    <p className="text-sm text-muted-foreground">Registration: {businessData.niceicNumber}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us today for a friendly chat about your electrical needs. We offer free video quotations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${businessData.mobile.replace(/\s/g, "")}`}>
              <Button size="lg" variant="secondary" className="gap-2" data-testid="button-services-call">
                <Phone className="h-5 w-5" />
                {businessData.mobile}
              </Button>
            </a>
            <a
              href={`https://wa.me/${businessData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700" data-testid="button-services-whatsapp">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
