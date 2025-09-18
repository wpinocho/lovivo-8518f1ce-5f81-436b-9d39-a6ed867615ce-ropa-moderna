import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Menu, User, Heart } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template elegante para tienda de ropa
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`bg-white border-b border-gray-200 sticky top-0 z-40 ${headerClassName}`}>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <p>🚚 Envío gratis en compras superiores a $80.000 | 📞 Atención al cliente: 01 8000 123 456</p>
      </div>
      
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <BrandLogoLeft />
              </Link>
            </div>

            {/* Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex space-x-8">
                <Link 
                  to="/" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Inicio
                </Link>
                <Link 
                  to="/hombre" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Hombre
                </Link>
                <Link 
                  to="/mujer" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Mujer
                </Link>
                <Link 
                  to="/calzado" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Calzado
                </Link>
                <Link 
                  to="/ofertas" 
                  className="text-foreground hover:text-primary transition-colors font-medium text-red-600"
                >
                  Ofertas
                </Link>
              </nav>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Wishlist */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex"
              >
                <Heart className="h-5 w-5" />
              </Button>

              {/* Account */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex"
              >
                <User className="h-5 w-5" />
              </Button>

              {/* Cart */}
              {showCart && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={openCart}
                  className="relative"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems > 99 ? '99+' : totalItems}
                    </span>
                  )}
                </Button>
              )}

              {/* Mobile menu */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Page Title */}
          {pageTitle && (
            <div className="mt-6 pb-4 border-b">
              <h1 className="text-3xl font-bold text-foreground">
                {pageTitle}
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-primary text-primary-foreground ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <BrandLogoLeft />
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Tu tienda de moda favorita. Calidad, estilo y las mejores tendencias 
              al alcance de tus manos. Viste tu personalidad.
            </p>
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Síguenos</h4>
              <SocialLinks />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/hombre" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Hombre
              </Link>
              <Link 
                to="/mujer" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Mujer
              </Link>
              <Link 
                to="/ofertas" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Ofertas
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Atención al Cliente</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <p>📞 01 8000 123 456</p>
              <p>📧 info@tutienda.com</p>
              <p>🕒 Lun - Vie: 9:00 - 18:00</p>
              <p>🕒 Sáb: 9:00 - 14:00</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 text-sm">
              &copy; 2024 Tu Tienda de Moda. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacidad" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terminos" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}