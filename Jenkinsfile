pipeline {
  agent any
  stages {
    stage('provisional') {
      parallel {
        stage('provisional') {
          steps {
            sh 'npm'
          }
        }

        stage('') {
          steps {
            sh 'mbt build'
          }
        }

      }
    }

  }
}