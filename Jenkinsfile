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

  }
  environment {
    USER_CREDENTIALS = credentials('TEST_CREDENTIALS')
  }
}