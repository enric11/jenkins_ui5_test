pipeline {
  agent any
  stages {
    stage('error') {
      parallel {
        stage('error') {
          steps {
            sh '''#curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
#. ~/.nvm/nvm.sh
#nvm install node
#npm -v
#echo $PATH
'''
          }
        }

        stage('test rounting') {
          steps {
            sh '''. ~/.nvm/nvm.sh
npm -v
mbt -v
ls'''
          }
        }

      }
    }

    stage('Version') {
      steps {
        sh '''#echo $PATH
#. ~/.nvm/nvm.sh
npm -v'''
      }
    }

  }
}