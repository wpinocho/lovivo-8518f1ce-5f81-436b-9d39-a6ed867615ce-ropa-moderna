import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Star, Truck, Shield, RefreshCw } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz para tienda de ropa moderna y elegante
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    searchTerm,
    selectedCollectionId,
    filteredProducts,
    setSearchTerm,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f3f4f6" fill-opacity="0.3"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Moda que
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                Define tu Estilo
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubre las últimas tendencias en moda. Calidad premium, diseños únicos y 
              precios que te sorprenderán. Tu estilo personal comienza aquí.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Buscar productos..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="pl-12 h-12 text-lg border-2 border-gray-200 focus:border-primary rounded-full"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-3 text-lg rounded-full">
                Explorar Colecciones
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg rounded-full">
                Ver Ofertas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center animate-scale-in">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Envío Gratis</h3>
              <p className="text-sm text-muted-foreground">En compras superiores a $80.000</p>
            </div>
            
            <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Compra Segura</h3>
              <p className="text-sm text-muted-foreground">Protección total en tus pagos</p>
            </div>
            
            <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Cambios Fáciles</h3>
              <p className="text-sm text-muted-foreground">30 días para cambios y devoluciones</p>
            </div>
            
            <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Calidad Premium</h3>
              <p className="text-sm text-muted-foreground">Materiales de la mejor calidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Nuestras Colecciones
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explora nuestras colecciones cuidadosamente seleccionadas para cada ocasión y estilo
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection, index) => (
                <div 
                  key={collection.id} 
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CollectionCard 
                    collection={collection} 
                    onViewProducts={handleViewCollectionProducts} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Colección'}` 
                  : 'Productos Destacados'
                }
              </h2>
              <p className="text-muted-foreground">
                {selectedCollectionId 
                  ? 'Productos seleccionados de esta colección'
                  : 'Los productos más populares de nuestra tienda'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="rounded-full"
              >
                Ver Todos los Productos
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="animate-scale-in product-card-hover"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-muted/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {searchTerm ? 'No encontramos productos' : 'No hay productos disponibles'}
              </h3>
              <p className="text-muted-foreground">
                {searchTerm 
                  ? 'Intenta con otros términos de búsqueda' 
                  : 'Pronto tendremos nuevos productos disponibles'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mantente al día con las últimas tendencias
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Suscríbete a nuestro newsletter y recibe ofertas exclusivas, nuevos productos y consejos de moda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Tu email" 
              className="bg-white text-foreground border-0 h-12"
            />
            <Button variant="secondary" size="lg" className="h-12 px-8">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};