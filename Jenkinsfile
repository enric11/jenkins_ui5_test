pipeline {
  agent any
  stages {
    stage('provisional') {
      parallel {
        stage('provisional') {
          steps {
            sh 'NodeJS'
          }
        }

        stage('error') {
          steps {
            sh 'mbt build'
          }
        }

      }
    }

  }
}