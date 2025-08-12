import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-pulse"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary rounded-full animate-float opacity-60`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Greeting */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Olá, eu sou
          </p>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Luan
            </span>
            <br />
            <span className="text-foreground">Marques</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais 
            incríveis e soluções tecnológicas inovadoras.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              className="px-8 py-4 text-lg bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
            >
              Ver Meus Projetos
            </Button>
            
            <Button 
              variant="outline"
              className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Download CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            {[
              { icon: Github, href: "https://github.com/LuanMaqs", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/luanmarques006/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:lm7007fernandes@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow-primary transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;