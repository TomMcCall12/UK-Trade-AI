import { Link } from "wouter";
import { Phone, MessageCircle, Star, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { businessData, reviews } from "@/lib/business-data";

export default function Reviews() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4" data-testid="badge-reviews">Customer Reviews</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-reviews-page-title">
              What Our Customers Say
            </h1>
            <p className="text-lg text-muted-foreground">
              We take great pride in our work and are proud to have earned excellent reviews from our customers across Sussex.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href={reviews.trustpilot.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="hover-elevate h-full" data-testid="card-trustpilot-summary">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-1">{reviews.trustpilot.rating}</p>
                  <p className="text-muted-foreground mb-3">{reviews.trustpilot.count} reviews</p>
                  <Badge variant="outline" className="gap-1">
                    Trustpilot
                    <ExternalLink className="h-3 w-3" />
                  </Badge>
                </CardContent>
              </Card>
            </a>

            <Card data-testid="card-google-summary">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{reviews.google.rating}.0</p>
                <p className="text-muted-foreground mb-3">{reviews.google.note}</p>
                <Badge variant="outline">
                  Google Reviews
                </Badge>
              </CardContent>
            </Card>

            <Card data-testid="card-trustindex-summary">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{reviews.trustindex.rating}.0</p>
                <p className="text-muted-foreground mb-3">{reviews.trustindex.count} reviews</p>
                <Badge variant="outline">
                  Trustindex
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Recent Customer Feedback
            </h2>
            <p className="text-muted-foreground">
              Here are some examples of feedback from our verified Trustpilot reviews.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.sampleReviews.map((review, index) => (
              <Card key={index} data-testid={`card-review-${index}`}>
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 text-lg">"{review.text}"</p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-medium text-foreground">{review.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {review.date} · {review.source}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Read all our reviews on Trustpilot to see what customers say about our work.
            </p>
            <a
              href={reviews.trustpilot.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2" data-testid="button-view-trustpilot">
                View All Trustpilot Reviews
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                We Value Your Feedback
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                We pride ourselves on delivering excellent service. After completing your job, we'd appreciate you taking a moment to share your experience.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {businessData.trustCredentials.map((credential) => (
                  <Badge key={credential} variant="secondary" className="text-sm">
                    {credential}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Experience Our Service?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join our satisfied customers across Sussex. Contact us today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${businessData.mobile.replace(/\s/g, "")}`}>
              <Button size="lg" variant="secondary" className="gap-2" data-testid="button-reviews-call">
                <Phone className="h-5 w-5" />
                {businessData.mobile}
              </Button>
            </a>
            <a
              href={`https://wa.me/${businessData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700" data-testid="button-reviews-whatsapp">
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
