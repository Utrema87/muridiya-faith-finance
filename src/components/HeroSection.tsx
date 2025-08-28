import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Users, TrendingUp, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-islamic-finance.jpg";

const HeroSection = () => {
  const stats = [
    { label: "Entrepreneurs", value: "1000+", icon: Users },
    { label: "Projets Financés", value: "€2.5M", icon: TrendingUp },
    { label: "Taux de Remboursement", value: "98%", icon: Shield },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Muridiya Finance - Finance Islamique Digital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 text-sm">
                🕌 Finance Islamique & Technologie
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Financez Vos Rêves <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Sans Compromis
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mt-6 max-w-xl">
                Muridiya Finance révolutionne l'accès au capital pour les entrepreneurs africains 
                avec des solutions 100% conformes à la Charia et alimentées par l'IA.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-base px-8"
              >
                Commencer Maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                <Smartphone className="mr-2 h-5 w-5" />
                Télécharger l'App
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Certifié Charia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Communauté Muride</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-0 shadow-card">
                <CardContent className="flex items-center p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mr-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Special Feature Card */}
            <Card className="bg-gradient-primary border-0 text-white shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-6 w-6 mr-3" />
                  <span className="font-semibold">IA de Scoring</span>
                </div>
                <p className="text-sm text-white/90">
                  Notre intelligence artificielle évalue votre solvabilité en temps réel 
                  pour un financement ultra-rapide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;