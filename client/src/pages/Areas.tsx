import { Link } from "wouter";
import { Phone, MessageCircle, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { businessData, areasCovered, postcodesCovered } from "@/lib/business-data";

export default function Areas() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4" data-testid="badge-areas">Areas Covered</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-areas-page-title">
              Electricians Covering East & West Sussex
            </h1>
            <p className="text-lg text-muted-foreground">
              Based in Burgess Hill, we provide electrical services throughout Sussex. Whether you're in Haywards Heath, Brighton, Hassocks or surrounding areas, we're here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Towns & Villages We Serve
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional electrical services available across the following locations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
            {areasCovered.map((area) => (
              <Card key={area} className="hover-elevate" data-testid={`card-area-${area.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{area}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Postcodes Covered
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {postcodesCovered.map((postcode) => (
                <Badge key={postcode} variant="secondary" className="text-base py-2 px-4" data-testid={`badge-postcode-${postcode}`}>
                  {postcode}
                </Badge>
              ))}
            </div>
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
                    Based in Burgess Hill
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Our central location in Burgess Hill allows us to quickly respond to customers throughout East and West Sussex. We're available 7 days a week, including for emergency call-outs.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Central Sussex location for quick response",
                      "Available Monday–Sunday 5am–11:30pm",
                      "24/7 emergency call-out service",
                      "Free video quotations available",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-lg bg-background border border-border">
                    <h3 className="font-semibold text-foreground mb-3">Our Address</h3>
                    <address className="not-italic text-muted-foreground space-y-1">
                      <p>{businessData.name}</p>
                      <p>{businessData.address.line1}</p>
                      <p>{businessData.address.line2}</p>
                      <p>{businessData.address.line3}</p>
                      <p>{businessData.address.town}, {businessData.address.postcode}</p>
                    </address>
                  </div>
                  <div className="p-6 rounded-lg bg-background border border-border">
                    <h3 className="font-semibold text-foreground mb-3">Opening Hours</h3>
                    <p className="text-muted-foreground">{businessData.hours}</p>
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
            Need an Electrician in Your Area?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Get in touch today. If your location isn't listed above, contact us anyway — we may still be able to help.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${businessData.mobile.replace(/\s/g, "")}`}>
              <Button size="lg" variant="secondary" className="gap-2" data-testid="button-areas-call">
                <Phone className="h-5 w-5" />
                {businessData.mobile}
              </Button>
            </a>
            <a
              href={`https://wa.me/${businessData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700" data-testid="button-areas-whatsapp">
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
