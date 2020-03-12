pipeline {
    agent any
    stages {
        stage('echo !') {
            steps {
                echo "Hello World!"
            }
        }
        stage('Archivage') {
            steps {
                archiveArtifacts 'helloworld.txt'
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
