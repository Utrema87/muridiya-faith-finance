import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  Users, 
  Building, 
  Target,
  Plus,
  Eye,
  Clock,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const [userType] = useState('entrepreneur'); // Simulated user type

  const stats = [
    { title: "Financement Total", value: "2,450,000 XOF", icon: DollarSign, change: "+15%" },
    { title: "Projets Actifs", value: "3", icon: Building, change: "+1" },
    { title: "Taux de Remboursement", value: "95%", icon: TrendingUp, change: "+5%" },
    { title: "Prochaine Échéance", value: "15 Déc", icon: Calendar, change: "Dans 5j" },
  ];

  const projects = [
    {
      id: 1,
      name: "Boutique Textile Touba",
      type: "Murabaha",
      amount: "1,500,000 XOF",
      progress: 75,
      status: "active",
      nextPayment: "2024-12-15",
      remaining: "375,000 XOF"
    },
    {
      id: 2,
      name: "Équipement Boulangerie",
      type: "Ijara",
      amount: "800,000 XOF",
      progress: 45,
      status: "active",
      nextPayment: "2024-12-20",
      remaining: "440,000 XOF"
    },
    {
      id: 3,
      name: "Formation Couture",
      type: "Qard Hassan",
      amount: "150,000 XOF",
      progress: 100,
      status: "completed",
      nextPayment: null,
      remaining: "0 XOF"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-700">Actif</Badge>;
      case 'completed':
        return <Badge variant="secondary" className="bg-green-100 text-green-700">Terminé</Badge>;
      case 'pending':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">En attente</Badge>;
      default:
        return <Badge variant="outline">Inconnu</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Tableau de Bord</h1>
          <p className="text-muted-foreground">
            Bienvenue sur votre espace Muridiya Finance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <Badge variant="outline" className="text-green-600 bg-green-50">
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="projects">Mes Projets</TabsTrigger>
            <TabsTrigger value="payments">Paiements</TabsTrigger>
            <TabsTrigger value="community">Communauté</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Mes Projets de Financement</h2>
              <Button variant="gradient">
                <Plus className="h-4 w-4 mr-2" />
                Nouveau Projet
              </Button>
            </div>

            <div className="grid gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="shadow-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <CardDescription className="mt-1">
                          Type: {project.type} • Montant: {project.amount}
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(project.status)}
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progression du remboursement</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Prochaine échéance</p>
                          <p className="text-muted-foreground">
                            {project.nextPayment || 'Aucune'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Restant à payer</p>
                          <p className="text-muted-foreground">{project.remaining}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Historique des Paiements</CardTitle>
                <CardDescription>
                  Vos dernières transactions et échéances
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "2024-11-15", amount: "125,000 XOF", project: "Boutique Textile", status: "completed" },
                    { date: "2024-10-15", amount: "125,000 XOF", project: "Boutique Textile", status: "completed" },
                    { date: "2024-12-15", amount: "125,000 XOF", project: "Boutique Textile", status: "pending" },
                  ].map((payment, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                      <div className="flex items-center space-x-3">
                        {payment.status === 'completed' ? 
                          <CheckCircle className="h-5 w-5 text-green-600" /> :
                          <Clock className="h-5 w-5 text-yellow-600" />
                        }
                        <div>
                          <p className="font-medium">{payment.project}</p>
                          <p className="text-sm text-muted-foreground">{payment.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{payment.amount}</p>
                        {payment.status === 'completed' && (
                          <Badge variant="outline" className="text-green-600">Payé</Badge>
                        )}
                        {payment.status === 'pending' && (
                          <Badge variant="outline" className="text-yellow-600">À venir</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Ma Communauté Dahira</span>
                </CardTitle>
                <CardDescription>
                  Projets soutenus par votre communauté
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Cette section affichera les projets de votre communauté</p>
                  <p className="text-sm">Fonctionnalité disponible prochainement</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;