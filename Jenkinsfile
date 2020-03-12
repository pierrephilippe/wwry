pipeline {
    agent any
    stages {
        stage('Hello World') {
            steps {
                echo 'Hello World!' 
            }
        }
        stage('Write File') {
            steps {
                timestamp = new Date().format( 'yyyyMMdd-Hms' )
                writeFile encoding: 'UTF-8', file: 'fileToArchive.js', text: 'Need to be archived $(timestamp)'
                sh """ls -l"""
            }
        }
        stage('Archive File') {
            steps {
                archiveArtifacts '*.js'
                sh """ls -l"""
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
