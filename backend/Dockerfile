FROM python:3
WORKDIR /app-backend

LABEL João Pster <joaopsterdev@gmail.com>

# Passo 01 - Instalando dependencias do sistema

RUN apt-get update && \
    apt-get install -y python3-dev default-libmysqlclient-dev build-essential

# Passo 02 - Instalando as dependências do projeto

ENV PYTHONUNBUFFERED 1
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Passo 03 - Copiando o código do projeto

COPY . .

EXPOSE 8000

CMD [ "./runserver.sh" ]