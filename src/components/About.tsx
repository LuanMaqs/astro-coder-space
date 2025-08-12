import { Code, Palette, Rocket, Users } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "React, TypeScript, Node.js, Python"
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX, Figma, Design Systems"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Otimização, SEO, Performance Web"
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Git, Agile, Trabalho em Equipe"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="bg-gradient-secondary bg-clip-text text-transparent">Mim</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça um pouco mais sobre minha jornada e paixão por tecnologia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <div className="relative w-80 h-80 mx-auto lg:mx-0">
                  <img
                    src={profilePhoto}
                    alt="João Developer"
                    className="w-full h-full object-cover rounded-2xl shadow-card"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-primary opacity-20 blur-sm -z-10"></div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Desenvolvedor Full Stack com foco em inovação
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Olá! Sou João, um desenvolvedor apaixonado por criar soluções digitais 
                  que fazem a diferença. Com mais de 3 anos de experiência, trabalho com 
                  tecnologias modernas para desenvolver aplicações web robustas e escaláveis.
                </p>
                
                <p>
                  Minha jornada começou com curiosidade sobre como os sites funcionam, 
                  e hoje transformo ideias em realidade através do código. Acredito que 
                  a tecnologia deve ser acessível, intuitiva e, acima de tudo, útil para 
                  as pessoas.
                </p>
                
                <p>
                  Quando não estou codando, você pode me encontrar explorando novas 
                  tecnologias, contribuindo para projetos open source ou compartilhando 
                  conhecimento com a comunidade dev.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-glow-primary/20"
                  >
                    <skill.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-semibold text-foreground mb-2">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;