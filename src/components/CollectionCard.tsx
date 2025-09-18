import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
      <CardContent className="p-0">
        <div 
          className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative"
          onClick={() => onViewProducts(collection.id)}
        >
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="text-center">
                <div className="text-4xl mb-2">👕</div>
                <p>Imagen próximamente</p>
              </div>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {collection.featured && (
              <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                ⭐ Destacado
              </span>
            )}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-foreground font-bold text-xl line-clamp-1 group-hover:text-primary transition-colors">
              {collection.name}
            </h3>
          </div>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
              {collection.description}
            </p>
          )}
          
          <Button 
            variant="outline" 
            className="w-full text-foreground border-gray-300 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 group-hover:shadow-md"
            onClick={() => onViewProducts(collection.id)}
          >
            <span>Explorar Colección</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}