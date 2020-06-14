pipeline {
  agent any
  stages {
    stage('Version') {
      steps {
        sh '#echo "Test OK"'
      }
    }

    stage('Build') {
      steps {
        sh 'mbt build'
      }
    }

  }
}