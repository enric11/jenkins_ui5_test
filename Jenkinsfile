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

        stage('') {
          steps {
            sh 'eslint . --ext .js'
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'mbt build'
      }
    }

    stage('Deploy') {
      steps {
        sh '''cf add-plugin-repo CF-Community https://plugins.cloudfoundry.org
cf install-plugin multiapps -f
'''
        sh '''cf login -a https://api.cf.eu10.hana.ondemand.com -o 57888edctrial -s dev -u $USER_CREDENTIALS_USR -p $USER_CREDENTIALS_PSW
'''
        sh 'mtar_file=$(basename mta_archives/*)'
        sh '#cf deploy mta_archives/$mtar_file'
      }
    }

  }
  environment {
    USER_CREDENTIALS = credentials('SAP_CF_DEV')
    mtar_file = '*.mtar'
  }
}