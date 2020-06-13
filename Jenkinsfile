pipeline {
  agent any
  stages {
    stage('error') {
      parallel {
        stage('error') {
          steps {
            sh 'npm -v'
          }
        }

        stage('NPM') {
          steps {
            nodejs 'NodeJS'
          }
        }

      }
    }

    stage('Version') {
      steps {
        sh 'npm -v'
      }
    }

  }
}