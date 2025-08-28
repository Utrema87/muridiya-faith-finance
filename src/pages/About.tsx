import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Target, 
  Globe, 
  Shield, 
  TrendingUp,
  Award,
  Handshake,
  BookOpen
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Finance Halal",
      description: "Tous nos produits respectent strictement les principes de la Charia islamique, sans intérêts (riba) ni spéculation (gharar)."
    },
    {
      icon: Users,
      title: "Communauté Mouride",
      description: "Nous servons prioritairement la communauté mouride tout en étant ouverts à tous les entrepreneurs respectueux de nos valeurs."
    },
    {
      icon: Handshake,
      title: "Solidarité",
      description: "Notre modèle favorise l'entraide et le développement économique communautaire à travers des mécanismes de financement participatif."
    },
    {
      icon: Shield,
      title: "Transparence",
      description: "Chaque transaction est traçable et conforme aux recommandations du Comité Charia qui supervise nos activités."
    }
  ];

  const team = [
    {
      name: "Serigne Modou Kara",
      role: "Fondateur & CEO",
      description: "Expert en finance islamique avec 15 ans d'expérience dans le développement économique au Sénégal."
    },
    {
      name: "Sokhna Aïda Diop",
      role: "Directrice Charia",
      description: "Théologienne spécialisée en finance islamique, membre du Conseil National de la Finance Islamique."
    },
    {
      name: "Moussa Ba",
      role: "CTO",
      description: "Ingénieur fintech avec une expertise en solutions de paiement mobiles adaptées au marché africain."
    },
    {
      name: "Fatou Sow",
      role: "Responsable Diaspora",
      description: "Coordinatrice des relations avec les communautés mourides en Europe et Amérique du Nord."
    }
  ];

  const stats = [
    { value: "2,500+", label: "Entrepreneurs financés" },
    { value: "15M+", label: "XOF décaissés" },
    { value: "95%", label: "Taux de remboursement" },
    { value: "12", label: "Pays diaspora" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-16 px-4">
          <div className="container text-center">
            <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
              À Propos de Nous
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Muridiya Finance
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Première plateforme de finance solidaire islamique dédiée à l'entrepreneuriat 
              dans la communauté mouride et au-delà. Nous connectons les entrepreneurs locaux 
              avec la diaspora pour un développement économique durable et conforme à la Charia.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 border-b">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Nos Valeurs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Les principes qui guident notre mission et définissent notre approche 
                de la finance solidaire islamique
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center p-6 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary/10 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
                  Notre Mission
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Démocratiser l'accès au financement halal
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Muridiya Finance a été créée pour répondre aux besoins spécifiques 
                    des entrepreneurs musulmans qui cherchent des solutions de financement 
                    conformes à leurs convictions religieuses.
                  </p>
                  <p>
                    Nous nous appuyons sur la solidarité naturelle de la communauté mouride 
                    et le potentiel économique de la diaspora pour créer un écosystème 
                    financier innovant et inclusif.
                  </p>
                  <p>
                    Notre vision est de devenir le pont entre les entrepreneurs africains 
                    et les capitaux diasporiques, tout en maintenant une conformité totale 
                    avec les principes de la finance islamique.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Vision 2030</h3>
                      <p className="text-muted-foreground text-sm">
                        Devenir la référence en matière de finance islamique entrepreneuriale 
                        en Afrique de l'Ouest
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Impact Global</h3>
                      <p className="text-muted-foreground text-sm">
                        Connecter 10,000 entrepreneurs avec la diaspora africaine mondiale 
                        d'ici 2030
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Éducation</h3>
                      <p className="text-muted-foreground text-sm">
                        Promouvoir l'éducation financière islamique et l'entrepreneuriat 
                        responsable
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Notre Équipe</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Une équipe d'experts passionnés par l'innovation financière islamique 
                et le développement économique communautaire
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center p-6 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <Badge variant="outline" className="mb-3 text-primary">
                      {member.role}
                    </Badge>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Certifications & Partenaires</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nos certifications et partenariats garantissent la conformité 
                et la qualité de nos services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Certification Charia
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Validée par le Conseil National de la Finance Islamique du Sénégal
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Agrément BCEAO
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Établissement de paiement agréé par la Banque Centrale
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Partenaire ADEPME
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Soutien à l'entrepreneuriat avec l'Agence de Développement des PME
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;