import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Cat World</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Discover the fascinating world of our feline friends. From playful kittens to majestic big cats, 
        explore everything about these wonderful creatures.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Domestic Cats</CardTitle>
          </CardHeader>
          <CardContent>
            Learn about various breeds, care tips, and fun facts about our beloved house cats.
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Wild Cats</CardTitle>
          </CardHeader>
          <CardContent>
            Explore the diverse world of wild cats, from lions and tigers to smaller species.
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Cat Behavior</CardTitle>
          </CardHeader>
          <CardContent>
            Understand why cats do what they do, their body language, and communication methods.
          </CardContent>
        </Card>
      </div>
      
      <Button size="lg">
        Start Exploring
      </Button>
    </div>
  );
};

export default Index;