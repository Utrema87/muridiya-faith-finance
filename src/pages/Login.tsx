import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Phone, Mail, ArrowLeft } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à l'accueil
        </Link>
        
        <Card className="shadow-elegant">
          <CardHeader className="text-center pb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground font-bold text-lg mx-auto mb-4">
              M
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Connexion</CardTitle>
            <CardDescription>
              Accédez à votre espace Muridiya Finance
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Method Selection */}
            <div className="flex rounded-lg border bg-muted p-1">
              <button
                onClick={() => setLoginMethod('email')}
                className={`flex-1 flex items-center justify-center py-2 px-3 rounded-md text-sm font-medium transition-all ${
                  loginMethod === 'email' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
                }`}
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </button>
              <button
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 flex items-center justify-center py-2 px-3 rounded-md text-sm font-medium transition-all ${
                  loginMethod === 'phone' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
                }`}
              >
                <Phone className="h-4 w-4 mr-2" />
                Téléphone
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <Label htmlFor="identifier">
                  {loginMethod === 'email' ? 'Adresse email' : 'Numéro de téléphone'}
                </Label>
                <Input
                  id="identifier"
                  type={loginMethod === 'email' ? 'email' : 'tel'}
                  placeholder={loginMethod === 'email' ? 'votre@email.com' : '+221 XX XXX XX XX'}
                  className="mt-1"
                />
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

              <div className="flex items-center justify-between text-sm">
                <Link to="/forgot-password" className="text-primary hover:text-primary/80">
                  Mot de passe oublié ?
                </Link>
              </div>

              <Button type="submit" className="w-full" variant="gradient">
                Se connecter
              </Button>
            </form>

            <Separator />

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Pas encore de compte ? </span>
              <Link to="/register" className="text-primary hover:text-primary/80 font-medium">
                Créer un compte
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;