import { Link } from "wouter";
import {
  Phone,
  MessageCircle,
  FileText,
  CheckCircle,
  Shield,
  Clock,
  Award,
  MapPin,
  Star,
  Zap,
  Lightbulb,
  BatteryCharging,
  Home as HomeIcon,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { businessData, services, areasCovered, reviews } from "@/lib/business-data";

const featuredServices = services.slice(0, 6);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  ClipboardCheck,
  Lightbulb,
  BatteryCharging,
  Home: HomeIcon,
  Shield,
};

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-sidebar via-sidebar to-primary/20 text-sidebar-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {businessData.trustCredentials.map((credential) => (
                <Badge key={credential} variant="secondary" className="bg-accent text-accent-foreground">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  {credential}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-hero-headline">
              Professional Electricians in{" "}
              <span className="text-accent">Burgess Hill</span>
            </h1>

            <p className="text-lg sm:text-xl text-sidebar-foreground/80 mb-4" data-testid="text-hero-subheadline">
              Experienced and reliable electricians covering East and West Sussex. NICEIC registered with {businessData.experience} of expertise.
            </p>

            <div className="flex items-center gap-4 text-sm text-sidebar-foreground/70 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                <span>NICEIC: {businessData.niceicNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>24/7 Emergency</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={`tel:${businessData.mobile.replace(/\s/g, "")}`}>
                <Button size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-hero-call">
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </a>
              <a
                href={`https://wa.me/${businessData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="gap-2 border-sidebar-foreground/30 text-sidebar-foreground hover:bg-sidebar-foreground/10" data-testid="button-hero-whatsapp">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="gap-2 border-sidebar-foreground/30 text-sidebar-foreground hover:bg-sidebar-foreground/10" data-testid="button-hero-quote">
                  <FileText className="h-5 w-5" />
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-services-title">
              Our Electrical Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From emergency repairs to smart home installations, we provide comprehensive electrical services for homes and businesses across Sussex.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => {
              const IconComponent = iconMap[service.icon] || Zap;
              return (
                <Card key={service.id} className="group hover-elevate" data-testid={`card-service-${service.id}`}>
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-why-choose-title">
              Why Choose ZA Electrical?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A business you can rely on. Safety comes as standard with all our installations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">NICEIC Registered</h3>
                <p className="text-sm text-muted-foreground">
                  Registration #{businessData.niceicNumber}. Approved for domestic and 3-phase work.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Fully Insured & DBS</h3>
                <p className="text-sm text-muted-foreground">
                  Complete peace of mind with full insurance and DBS clearance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">24/7 Emergency</h3>
                <p className="text-sm text-muted-foreground">
                  Available 7 days a week from 5am to 11:30pm for urgent call-outs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{businessData.experience} Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Qualified electricians since {businessData.established}. BS 7671 18th Edition compliant.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-reviews-title">
              What Our Customers Say
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              <a
                href={reviews.trustpilot.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span>{reviews.trustpilot.count} reviews on Trustpilot</span>
              </a>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm text-muted-foreground">
                {reviews.google.note} on Google
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.sampleReviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{review.text}"</p>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">{review.author}</span>
                    <span className="mx-2">·</span>
                    <span>{review.date}</span>
                    <span className="mx-2">·</span>
                    <span>{review.source}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/reviews">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-reviews">
                See More Reviews
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-areas-title">
              Areas We Cover
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Based in Burgess Hill, we provide electrical services throughout East and West Sussex.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {areasCovered.slice(0, 10).map((area) => (
              <Badge key={area} variant="secondary" className="text-sm py-1.5 px-3">
                <MapPin className="h-3 w-3 mr-1" />
                {area}
              </Badge>
            ))}
          </div>

          <div className="text-center">
            <Link href="/areas">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-areas">
                View All Areas
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" data-testid="text-cta-title">
              Need an Electrician?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Get in touch today for a friendly chat about your electrical needs. Free video quotations available.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`tel:${businessData.landline.replace(/\s/g, "")}`}>
                <Button size="lg" variant="secondary" className="gap-2" data-testid="button-cta-landline">
                  <Phone className="h-5 w-5" />
                  {businessData.landline}
                </Button>
              </a>
              <a href={`tel:${businessData.mobile.replace(/\s/g, "")}`}>
                <Button size="lg" variant="secondary" className="gap-2" data-testid="button-cta-mobile">
                  <Phone className="h-5 w-5" />
                  {businessData.mobile}
                </Button>
              </a>
              <a
                href={`https://wa.me/${businessData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700" data-testid="button-cta-whatsapp">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
