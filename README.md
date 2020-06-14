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
https://linuxize.com/post/how-to-install-node-js-on-centos-7/

- Instalar MBT para compilar:
https://ecastella.com/deployando-una-aplicacion-en-cf-manualmente/
sudo npm install -g mbt --unsafe-perm=true --allow-root

- Instalar plugin Jenkins:
https://plugins.jenkins.io/nodejs/




Apuntes varios
--
Para lanzarlo a CF, ejecutar primer mbt build y despues cf deploy o push.
Podemos generar el modul HTML5 con "mbt module-build -m MyApplication_ui_deployer"
--
Para lanzar comandos en jenkins cuando falla el NPM
cf
#echo $PATH
#echo "$USER"
#PATH=/sbin:/bin:/usr/sbin:/usr/bin:/var/lib/jenkins/bin:/home/ec2-user/.nvm/versions/node/v14.4.0/bin:/usr/local/jdk-11.0.1/bin:/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/opt/aws/bin:/home/ec2-user/.local/bin:/home/ec2-user/bin
#curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
#. ~/.nvm/nvm.sh
#nvm install node
#echo $PATH
#~/.nvm/versions/node/v14.4.0/bin/npm -v
npm -v
mbt -v
#echo $PATH
--

