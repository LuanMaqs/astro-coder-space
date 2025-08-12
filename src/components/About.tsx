import { Code, Palette, Rocket, Users } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "React, TypeScript, Node.js, Java, N8N"
    },
    {
      icon: Palette,
      title: "Salesforce",
      description: "Adimistrador, Apex, Lwc e triggers"
    },
    {
      icon: Rocket,
      title: "Banco de dados",
      description: "MongoDB, SQL, PostegresSQl, MariaDB"
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Git, Trabalho em Equipe"
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
                    alt="Luan Marques"
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
                  Olá! Sou Luan Marques, desenvolvedor com foco em backend, automações e integração de sistemas.
                  Trabalho para entregar soluções digitais robustas, seguras e escaláveis, alinhadas às necessidades
                  do negócio e com alto padrão de qualidade.
                </p>

                <p>
                  Minha trajetória começou explorando como aplicações web funcionam. Desde então, venho
                  aprimorando minhas habilidades em arquitetura de software, APIs e banco de dados,
                  sempre buscando eficiência e boas práticas de desenvolvimento.
                </p>

                <p>
                  Além de programar, mantenho-me atualizado sobre novas tecnologias e metodologias,
                  participando de projetos colaborativos e explorando inovações que gerem valor real
                  para empresas e usuários.
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