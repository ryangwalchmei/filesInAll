<h1 align="center">Files in All</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ryangalvaogp/filesInAll">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ryangalvaogp/filesInAll">
  
  <a href="https://github.com/ryangalvaogp/filesInAll/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ryangalvaogp/filesInAll">
  </a>

  <a href="https://github.com/ryangalvaogp">
    <img alt="Made by Ryan Galvão" src="https://img.shields.io/badge/made%20by-Ryan%20Galv%C3%A3o-red">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>


Este projeto proporciona uma solução automatizada e eficaz para compartilhar arquivos de um diretório local com múltiplos hosts de rede, evitando a necessidade de realizar essa tarefa manualmente para cada um deles. Ele utiliza as capacidades assíncronas do Node.js para assegurar um desempenho otimizado ao longo do processo.

1. **Requisitos**:
   - [Node.js](https://nodejs.org/en/)

2. **Configuração**:
   - Os endereços IPs dos hosts deverão ser listados em `hosts.json`. 
   - Todos os hosts deverão compartilhar uma pasta em um caminho comum. ex.: `192.168.*.*/share/`
   - As pastas compartilhadas deverão estar sem senha;
   - Se não houver conexão entre os hosts: verifique as permissões do firewall.
   - Certifique-se também de que o dispositivo está visível na rede e o compartilhamento protegido por senha esteja desabilitado.
![image](/assets/images/passwordShareDisable.png)

   - Defina o nome da pasta compartilhada em comum em:   `index.ts:Ln 35, Col 65`.

5. **Execução do Programa**:
   - Após configurar corretamente, insira os arquivos que deverão ser compartilhados na pasta `filesOnDirect`.
   - Execute `yarn start` ou `npm start` para iniciar o processo de compartilhamento.

6. **Saída**:
   - Será emitido um log a cada evento do processo, como análise dos arquivos, cópia concluída, erro no processo, etc.  


