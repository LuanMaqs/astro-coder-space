import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} João Developer. Todos os direitos reservados.
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 mx-2 text-red-500 fill-current animate-pulse" />
            <span>usando</span>
            <span className="ml-1 bg-gradient-primary bg-clip-text text-transparent font-semibold">
              React & TypeScript
            </span>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-6 h-px bg-gradient-primary opacity-20"></div>
      </div>
    </footer>
  );
};

export default Footer;