pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        sh '''curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh
nvm install node'''
      }
    }

    stage('Version') {
      steps {
        sh 'npm -v'
      }
    }

  }
}