import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Heart, Eye, Wallet, ArrowRight, MapPin } from "lucide-react";

const DiasporaSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Impact Direct",
      description: "Voyez concrètement l'impact de vos investissements sur votre communauté d'origine"
    },
    {
      icon: Eye,
      title: "Transparence Totale", 
      description: "Suivez en temps réel l'utilisation de vos fonds avec photos et indicateurs"
    },
    {
      icon: Wallet,
      title: "Retours Durables",
      description: "Générez des revenus récurrents tout en aidant l'entrepreneuriat local"
    },
    {
      icon: Globe,
      title: "Réseau Global",
      description: "Connectez-vous avec d'autres membres de la diaspora partageant vos valeurs"
    }
  ];

  const projects = [
    {
      title: "Boutique Textile Dakar",
      location: "Sénégal",
      amount: "50,000 XOF",
      funded: 85,
      entrepreneur: "Aminata Sy",
      returns: "12% annuel"
    },
    {
      title: "Épicerie Bio Thiès",
      location: "Sénégal", 
      amount: "75,000 XOF",
      funded: 92,
      entrepreneur: "Moussa Diallo",
      returns: "15% annuel"
    },
    {
      title: "Centre de Formation IT",
      location: "Mali",
      amount: "150,000 XOF", 
      funded: 67,
      entrepreneur: "Fatoumata Traoré",
      returns: "Impact social"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
            Pour la Diaspora Africaine
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Investissez dans Votre Héritage
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Depuis l'Europe, l'Amérique ou ailleurs, soutenez l'entrepreneuriat 
            africain avec des investissements transparents et conformes à vos valeurs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-hover transition-all duration-300 border-0 shadow-card">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Projets en Cours de Financement</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-hover transition-all duration-300 border-0 shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{project.funded}% financé</span>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>Par {project.entrepreneur}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Objectif: {project.amount}</span>
                        <span>{project.funded}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${project.funded}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Retours attendus:</span>
                      <span className="font-semibold text-success">{project.returns}</span>
                    </div>

                    <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                      Investir Maintenant
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-hero border-0 text-white shadow-glow max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Rejoignez la Communauté Muridiya Finance
              </h3>
              <p className="text-lg text-white/90 mb-6">
                Plus de 500 investisseurs de la diaspora nous font déjà confiance. 
                Commencez avec seulement 25€.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Créer Mon Compte Investisseur
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Découvrir les Projets
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DiasporaSection;