# jenkins_ui5_test

- Guia instalación Jenkins AWS:
https://aws.amazon.com/es/getting-started/hands-on/setup-jenkins-build-server/

- Instalar blue-ocean
https://www.jenkins.io/projects/blueocean/

- Crear repositorio en GITHUB

- Crear proyecto en Application Studio en SAP, en caso de error a lanzar el test en UI5, posicionarse en la carpeta AppRouter y ejecutar "npm install".

- Sincronizarse con el repositorio ya iniciado: 
https://stackoverflow.com/questions/24114676/git-error-failed-to-push-some-refs-to-remote

- Nuevo pippeline con el nuevo repositorio, creará un nuevo jenkins file en la raiz del repositorio

- Instalar NPM en la maquina de linux de AWS
https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html

- Instalar MBT para compilar:
https://ecastella.com/deployando-una-aplicacion-en-cf-manualmente/

- Instalar plugin Jenkins:
https://plugins.jenkins.io/nodejs/




Apuntes varios
Para lanzarlo a CF, ejecutar primer mbt build y despues cf deploy o push.
Podemos generar el modul HTML5 con "mbt module-build -m MyApplication_ui_deployer"
