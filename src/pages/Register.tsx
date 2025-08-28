import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, ArrowLeft, User, Building, DollarSign, Users } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<string>('');

  const userTypes = [
    { value: 'entrepreneur', label: 'Entrepreneur', icon: User, description: 'Je cherche un financement' },
    { value: 'investor', label: 'Investisseur/Diaspora', icon: DollarSign, description: 'Je veux investir' },
    { value: 'agent', label: 'Agent Terrain', icon: Building, description: 'Je représente Muridiya' },
    { value: 'community', label: 'Membre Communauté', icon: Users, description: 'Je soutiens des projets' },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à l'accueil
        </Link>
        
        <Card className="shadow-elegant">
          <CardHeader className="text-center pb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground font-bold text-lg mx-auto mb-4">
              M
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Créer un compte</CardTitle>
            <CardDescription>
              Rejoignez la communauté Muridiya Finance
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* User Type Selection */}
            <div>
              <Label className="text-base font-medium mb-4 block">Type de compte</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {userTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setUserType(type.value)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        userType === type.value
                          ? 'border-primary bg-primary/5 shadow-md'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <Icon className={`h-5 w-5 mt-0.5 ${userType === type.value ? 'text-primary' : 'text-muted-foreground'}`} />
                        <div>
                          <div className={`font-medium ${userType === type.value ? 'text-primary' : 'text-foreground'}`}>
                            {type.label}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {type.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input id="firstName" placeholder="Votre prénom" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom</Label>
                  <Input id="lastName" placeholder="Votre nom" className="mt-1" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Adresse email</Label>
                <Input id="email" type="email" placeholder="votre@email.com" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="phone">Numéro de téléphone</Label>
                <Input id="phone" type="tel" placeholder="+221 XX XXX XX XX" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="dahira">Dahira d'appartenance</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Sélectionnez votre dahira" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="touba">Dahira Touba</SelectItem>
                    <SelectItem value="kaolack">Dahira Kaolack</SelectItem>
                    <SelectItem value="dakar">Dahira Dakar</SelectItem>
                    <SelectItem value="diourbel">Dahira Diourbel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm leading-5">
                  J'accepte les{" "}
                  <Link to="/terms" className="text-primary hover:text-primary/80">
                    conditions d'utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link to="/privacy" className="text-primary hover:text-primary/80">
                    politique de confidentialité
                  </Link>{" "}
                  conformes aux principes de la finance islamique.
                </Label>
              </div>

              <Button type="submit" className="w-full" variant="gradient" disabled={!userType}>
                Créer mon compte
              </Button>
            </form>

            <Separator />

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Déjà un compte ? </span>
              <Link to="/login" className="text-primary hover:text-primary/80 font-medium">
                Se connecter
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;