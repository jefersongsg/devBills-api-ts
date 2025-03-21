# Use a imagem base do Node.js com Alpine (versão menor)
FROM node:18-alpine

# Defina o diretório de trabalho
WORKDIR /home/app

# Copie apenas os arquivos de definição de dependências
COPY package.json yarn.lock ./

# Instale as dependências
RUN yarn install --frozen-lockfile

# Copie o restante do código
COPY . .

# Exponha a porta 3000
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["yarn", "dev"]