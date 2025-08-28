import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Produits",
      links: [
        { label: "Murabaha", href: "#murabaha" },
        { label: "Ijara", href: "#ijara" },
        { label: "Qard Hassan", href: "#qard" },
        { label: "Scoring IA", href: "#scoring" }
      ]
    },
    {
      title: "Pour qui ?",
      links: [
        { label: "Entrepreneurs", href: "#entrepreneurs" },
        { label: "Diaspora", href: "#diaspora" },
        { label: "Agents", href: "#agents" },
        { label: "Partenaires", href: "#partenaires" }
      ]
    },
    {
      title: "Ressources",
      links: [
        { label: "Guide Finance Islamique", href: "#guide" },
        { label: "Centre d'Aide", href: "#aide" },
        { label: "Blog", href: "#blog" },
        { label: "Webinaires", href: "#webinaires" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { label: "À Propos", href: "#apropos" },
        { label: "Équipe", href: "#equipe" },
        { label: "Carrières", href: "#carrieres" },
        { label: "Presse", href: "#presse" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gradient-card border-t">
      <div className="container">
        {/* Newsletter Section */}
        <div className="py-12 border-b">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Restez Informé</h3>
              <p className="text-muted-foreground">
                Recevez nos dernières actualités, guides sur la finance islamique et opportunités d'investissement.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Votre adresse email" 
                className="flex-1"
                type="email"
              />
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                S'Abonner
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-white font-bold text-sm">
                  M
                </div>
                <span className="font-bold text-xl text-primary">Muridiya Finance</span>
              </div>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Révolutionner l'accès au capital pour les entrepreneurs africains avec des solutions 
                financières conformes à la Charia et alimentées par l'intelligence artificielle.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                  <span>Dakar, Sénégal & Paris, France</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                  <span>+221 77 123 45 67</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                  <span>contact@muridiyafinance.com</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <span>&copy; 2024 Muridiya Finance. Tous droits réservés.</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition-colors">Politique de Confidentialité</a>
              <a href="#" className="hover:text-primary transition-colors">Conditions d'Utilisation</a>
              <a href="#" className="hover:text-primary transition-colors">Conformité Charia</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-2">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-primary/10"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;