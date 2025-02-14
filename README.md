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


This project provides an efficient, automated solution for sharing files from a local directory to multiple network hosts, avoiding the need to perform this task manually for each of them. It uses the asynchronous capabilities of Node.js to ensure optimized performance throughout the process.

1. **Requirements**:
   - [Node.js](https://nodejs.org/en/)

2. **Settings**:
   - The IP addresses of the hosts should be listed in `hosts.json`. 
   - All hosts should share a folder in a common path. e.g. `192.168.*.*/share/`
   - Shared folders must not have a password;
   - If there is no connection between hosts: check firewall permissions.
   - Also make sure the device is visible on the network and password-protected sharing is disabled.
![image](/assets/images/passwordShareDisable.png)

   - Set the shared folder name in common in: `index.ts:Ln 35, Col 65`.

5. **Program Execution**:
   - Once configured correctly, insert the files that should be shared into the `filesOnDirect` folder.
   - Run `yarn start` or `npm start` to start the sharing process.

6. **Output**:
   - A log will be issued for each process event, such as file analysis, copy completion, process error, etc. 


