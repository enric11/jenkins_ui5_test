pipeline {
  agent any
  stages {
    stage('Version') {
      steps {
        sh '''#echo "Test OK"
echo $USER_CREDENTIALS_USR
echo $USER_CREDENTIALS_PSW'''
      }
    }

    stage('Build') {
      steps {
        sh 'mbt build'
      }
    }

    stage('Deploy') {
      steps {
        sh '''cf login -a https://api.cf.eu10.hana.ondemand.com -o 57888edctrial -s dev -u $USER_CREDENTIALS_USR -p $USER_CREDENTIALS_PSW
cf deploy'''
      }
    }

  }
  environment {
    USER_CREDENTIALS = credentials('SAP_CF_DEV')
  }
}