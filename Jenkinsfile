pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        sh '''curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash. 
~/.nvm/nvm.sh
nvm install node
npm -v
'''
      }
    }

    stage('Version') {
      steps {
        sh 'npm -v'
      }
    }

  }
}