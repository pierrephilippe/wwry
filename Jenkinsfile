pipeline {
    agent any
    stages {
        stage('echo !') {
            steps {
                echo "Hello World!"
            }
        }
        stage('Build Artefact') {
            steps {
                sh """ date >> artifact.txt """
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
             archiveArtifacts 'helloworld.txt'
        }
    }
}
