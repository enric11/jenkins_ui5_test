pipeline {
  agent any
  stages {
    stage('Unit testing') {
      parallel {
        stage('Unit testing') {
          steps {
            sh 'echo "hello"'
          }
        }

        stage('Eslint JS ui5') {
          steps {
            sh '''#npm install @sap/eslint-plugin-ui5-jsdocs@latest --save-dev
#npm install babel-eslint --save-dev
##eslint . --ext .js

#eslint -f checkstyle . --ext .js > eslint.xml
##resultEsLint=$(eslint -f html . --ext .js)'''
          }
        }

        stage('Qunit UI5') {
          steps {
            sh '''npm install
#npm install puppeteer --unsafe-perm=true
#export CHROMIUM_BIN=/usr/bin/chromium-browser
npm test'''
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh '#mbt build'
      }
    }

    stage('Prepare for deploy') {
      steps {
        sh '''#cf add-plugin-repo CF-Community https://plugins.cloudfoundry.org
#cf install-plugin multiapps -f
'''
        sh '''#cf login -a https://api.cf.eu10.hana.ondemand.com -o 57888edctrial -s dev -u $USER_CREDENTIALS_USR -p $USER_CREDENTIALS_PSW
'''
        sh '#mtar_file=$(basename mta_archives/*)'
        sh '##cf deploy mta_archives/$mtar_file'
      }
    }

    stage('Check deploy') {
      steps {
        sh '#cf check-before-deploy -file mta.yaml -all'
      }
    }

    stage('Deploy') {
      steps {
        sh '#cf deploy mta_archives/$mtar_file'
      }
    }

  }
  environment {
    USER_CREDENTIALS = credentials('SAP_CF_DEV')
    mtar_file = '*.mtar'
    resultEsLint = ''
  }
}