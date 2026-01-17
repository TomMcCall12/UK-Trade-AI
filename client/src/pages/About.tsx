import { Link } from "wouter";
import {
  Phone,
  MessageCircle,
  Award,
  Shield,
  Clock,
  CheckCircle,
  Calendar,
  Users,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { businessData } from "@/lib/business-data";

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4" data-testid="badge-about">About Us</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-about-page-title">
              Professional Electricians Since {businessData.established}
            </h1>
            <p className="text-lg text-muted-foreground">
              With {businessData.experience} of experience, ZA Electrical provides reliable, professional electrical services to homes and businesses across Sussex. We're fully qualified, registered, and committed to delivering the highest standards of workmanship.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-2">{businessData.experience}</h3>
                <p className="text-muted-foreground">
                  Continual improvement and expertise since {businessData.established}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">NICEIC Registered</h3>
                <p className="text-muted-foreground">
                  Registration #{businessData.niceicNumber}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <FileCheck className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{businessData.standard}</h3>
                <p className="text-muted-foreground">
                  All work to current British Standards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Our Credentials
              </h2>
              <p className="text-muted-foreground mb-8">
                Your satisfaction and peace of mind are guaranteed. From small electrical work like an additional plug socket to a complete re-wire, we deliver professional results every time.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Award,
                    title: "NICEIC Registered",
                    description: `Approved for domestic and 3-phase commercial work. Registration: ${businessData.niceicNumber}`,
                  },
                  {
                    icon: Shield,
                    title: "Fully Insured",
                    description: "Complete public liability insurance for total peace of mind on every job.",
                  },
                  {
                    icon: CheckCircle,
                    title: "DBS Cleared",
                    description: "Security cleared for your safety and confidence when we work in your home or business.",
                  },
                  {
                    icon: Clock,
                    title: "24/7 Emergency Service",
                    description: `Available ${businessData.hours.toLowerCase()} including emergency call-outs.`,
                  },
                ].map((item) => (
                  <Card key={item.title}>
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                What We Offer
              </h2>
              <p className="text-muted-foreground mb-8">
                We go beyond standard electrical work. Our qualified team combines hands-on experience with modern technology to deliver safe, efficient, and innovative solutions.
              </p>
              <div className="bg-card rounded-lg border border-border p-6 space-y-4">
                {[
                  "Complete domestic and commercial electrical installations",
                  "Emergency electrical services 24/7",
                  "Electrical Inspection and Condition Reports (EICR)",
                  "Consumer unit and fuse board upgrades",
                  "Smart home and automation systems",
                  "EV charger installation (Pod Point, Zappi, Tesla)",
                  "Security systems (Ring, Nest, CCTV)",
                  "LED lighting design and installation",
                  "Solar panel electrical connections",
                  "Free video quotations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8 sm:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    Based in Burgess Hill
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Our central Sussex location allows us to provide prompt, reliable service across East and West Sussex. We're proud to be part of the local community.
                  </p>
                  <address className="not-italic text-foreground space-y-1 mb-6">
                    <p className="font-semibold">{businessData.name}</p>
                    <p>{businessData.address.line1}</p>
                    <p>{businessData.address.line2}</p>
                    <p>{businessData.address.line3}</p>
                    <p>{businessData.address.town}, {businessData.address.county}</p>
                    <p>{businessData.address.postcode}</p>
                  </address>
                  <p className="text-muted-foreground">
                    <strong>Opening Hours:</strong> {businessData.hours}
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="p-8 rounded-lg bg-sidebar text-sidebar-foreground text-center">
                    <Shield className="h-20 w-20 text-accent mx-auto mb-4" />
                    <p className="font-bold text-xl mb-2">NICEIC Registered</p>
                    <p className="text-sidebar-foreground/70">#{businessData.niceicNumber}</p>
                    <div className="mt-4 pt-4 border-t border-sidebar-border">
                      <p className="text-sm text-sidebar-foreground/70">
                        Approved Contractor<br />
                        Domestic & 3-Phase
                      </p>
                    </div>
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
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Get in touch today for a friendly chat about your electrical needs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${businessData.mobile.replace(/\s/g, "")}`}>
              <Button size="lg" variant="secondary" className="gap-2" data-testid="button-about-call">
                <Phone className="h-5 w-5" />
                {businessData.mobile}
              </Button>
            </a>
            <a
              href={`https://wa.me/${businessData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700" data-testid="button-about-whatsapp">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="gap-2" data-testid="button-about-contact">
                Contact Form
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
