import { Instagram, Twitter, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-yellow-100 text-gray-800 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Columna 1: Sobre Mahigrove */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mahigrove</h3>
            <p className="text-sm">
              Calidad natural en miel, cangrejos y camarones frescos.  
              Directo del mar y la colmena a tu mesa.
            </p>
          </div>

          {/* Columna 2: Productos */}
          <div>
            <h4 className="font-semibold mb-3">Productos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-600">Miel pura</a></li>
              <li><a href="#" className="hover:text-yellow-600">Cangrejos frescos</a></li>
              <li><a href="#" className="hover:text-yellow-600">Camarones</a></li>
              <li><a href="#" className="hover:text-yellow-600">Ofertas</a></li>
            </ul>
          </div>

          {/* Columna 3: Información */}
          <div>
            <h4 className="font-semibold mb-3">Información</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-600">Nosotros</a></li>
              <li><a href="#" className="hover:text-yellow-600">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-yellow-600">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-yellow-600">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 4: Soporte */}
          <div>
            <h4 className="font-semibold mb-3">Soporte</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-600">Preguntas frecuentes</a></li>
              <li><a href="#" className="hover:text-yellow-600">Envíos y devoluciones</a></li>
              <li><a href="#" className="hover:text-yellow-600">Guía de tallas</a></li>
              <li><a href="#" className="hover:text-yellow-600">Ayuda</a></li>
            </ul>
          </div>

          {/* Columna 5: Redes sociales */}
          <div>
            <h4 className="font-semibold mb-3">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/mahigrove"
                aria-label="Instagram"
                className="hover:text-yellow-600 transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://twitter.com/mahigrove"
                aria-label="Twitter"
                className="hover:text-yellow-600 transition-colors duration-300"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://linkedin.com/company/mahigrove"
                aria-label="LinkedIn"
                className="hover:text-yellow-600 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://mahigrove.com"
                aria-label="Sitio web"
                className="hover:text-yellow-600 transition-colors duration-300"
              >
                <Globe size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Mahigrove. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
