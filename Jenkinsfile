pipeline {
  agent any
  stages {
    stage('error') {
      parallel {
        stage('error') {
          steps {
            sh '''echo $PATH
echo "$USER"
PATH=/sbin:/bin:/usr/sbin:/usr/bin:/var/lib/jenkins/bin:/home/ec2-user/.nvm/versions/node/v14.4.0/bin:/usr/local/jdk-11.0.1/bin:/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/opt/aws/bin:/home/ec2-user/.local/bin:/home/ec2-user/bin
#curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
#. ~/.nvm/nvm.sh
#nvm install node
#echo $PATH
npm -v
#echo $PATH
'''
          }
        }

        stage('test rounting') {
          steps {
            sh '''#. ~/.nvm/nvm.sh
#npm -v
#npm install -g mbt
#mbt -v
ls'''
          }
        }

      }
    }

    stage('Version') {
      steps {
        sh '''#echo $PATH
. ~/.nvm/nvm.sh
npm -v
mbt -v'''
      }
    }

  }
}