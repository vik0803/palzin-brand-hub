import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const products = [
  { id: "track", name: "Palzin Track", description: "Event tracking & analytics" },
  { id: "monitor", name: "Palzin Monitor", description: "Website & server monitoring" },
  { id: "feedback", name: "Palzin Feedback", description: "Customer feedback management" },
];

interface ProductSelectionProps {
  selectedProducts: string[];
  onProductToggle: (productId: string) => void;
  error?: string;
}

export default function ProductSelection({ 
  selectedProducts, 
  onProductToggle, 
  error 
}: ProductSelectionProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Which products interest you?</h2>
        <p className="text-muted-foreground">Select all that apply</p>
      </div>
      
      <div className="grid gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className={cn(
              "p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md",
              selectedProducts.includes(product.id)
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            )}
            onClick={() => onProductToggle(product.id)}
          >
            <div className="flex items-start space-x-3">
              <Checkbox
                checked={selectedProducts.includes(product.id)}
                className="mt-1 pointer-events-none"
              />
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {error && (
        <p className="text-sm text-destructive text-center">{error}</p>
      )}
    </div>
  );
}