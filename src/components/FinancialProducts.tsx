import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Building, HandHeart, TrendingUp, Shield, Clock } from "lucide-react";

const FinancialProducts = () => {
  const products = [
    {
      id: "murabaha",
      title: "Murabaha",
      subtitle: "Financement Commercial Halal",
      description: "Financez votre stock sans intérêt. Nous achetons vos marchandises chez les grossistes partenaires, vous remboursez en plusieurs tranches.",
      icon: ShoppingCart,
      features: ["Sans intérêt (Ribā)", "Paiement échelonné", "Scoring IA automatique", "Décaissement rapide"],
      color: "bg-gradient-primary",
      badge: "Populaire"
    },
    {
      id: "ijara", 
      title: "Ijara",
      subtitle: "Leasing Islamique",
      description: "Louez vos équipements avec option d'achat. Solution flexible pour acquérir des biens professionnels selon les principes islamiques.",
      icon: Building,
      features: ["Location avec option d'achat", "Mensualités flexibles", "Propriété progressive", "Conformité Charia"],
      color: "bg-gradient-to-br from-secondary to-secondary-light",
      badge: "Nouveau"
    },
    {
      id: "qard",
      title: "Qard Hassan", 
      subtitle: "Prêt Bienveillant",
      description: "Financement participatif solidaire pour vos projets d'impact social. La diaspora finance directement vos initiatives.",
      icon: HandHeart,
      features: ["Financement participatif", "Impact social", "Transparence totale", "Diaspora engagée"],
      color: "bg-gradient-to-br from-accent to-primary-light",
      badge: "Impact"
    }
  ];

  return (
    <section id="produits" className="py-20 bg-gradient-card">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Produits Financiers Halal
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Solutions Financières Conformes à la Charia
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des produits financiers innovants respectant les principes de la finance islamique, 
            adaptés aux entrepreneurs et à la diaspora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="relative">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    {product.badge}
                  </Badge>
                </div>
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${product.color} mb-4`}>
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                <CardDescription className="text-base font-medium text-primary">
                  {product.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <Shield className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Demander
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Clock className="h-4 w-4 mr-2" />
                    Simuler
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Tous nos produits sont validés par notre Comité Charia
          </p>
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-colors">
            Voir Tous les Produits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinancialProducts;