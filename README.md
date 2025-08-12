# Bem-vindo ao meu Portfólio

## Sobre o projeto

Este portfólio foi criado para expor e apresentar alguns dos meus principais projetos, destacando minhas habilidades e experiências na prática.

## Como configurar e rodar o projeto localmente

Siga os passos abaixo para clonar o repositório, instalar as dependências e configurar a integração com o banco de dados.

### Passo 1: Clonar o repositório

```sh
git clone <URL_DO_SEU_REPOSITORIO>
cd <NOME_DO_SEU_PROJETO>

```
### Passo 2: Instalar as dependências
```sh
Copiar
Editar
npm install
```

### Passo 3: Configurar variáveis de ambiente
```sh
Crie um arquivo .env na raiz do projeto com as informações necessárias para conexão ao banco e outras configurações. Exemplo:

ini
Copiar
Editar
DATABASE_URL=postgresql://user:password@localhost:5432/nome_do_banco
PORT=3001

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu_usuario_smtp
SMTP_PASS=sua_senha_smtp
SMTP_FROM="Seu Nome <seuemail@exemplo.com>"
Importante: Substitua os valores acima pelos dados corretos do seu ambiente.
````

### Passo 4: Rodar a aplicação


```sh
Copiar
Editar
npm run dev
O servidor deve iniciar na porta configurada (ex: 3001).
```
## Tecnologias utilizadas

- **Node.js**  
- **Express**  
- **PostgreSQL**  
- **Vite**  
- **TypeScript**  
- **React**  
- **shadcn-ui**  
- **Tailwind CSS**  

---

## Como visualizar o portfólio

Após iniciar a aplicação, acesse no navegador:

```plaintext
http://localhost:3001
