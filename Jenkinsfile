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
                script {
                    def currentDate = new Date().format( 'yyyyMMddHms' );
                    timestamp = new Date().format( 'yyyyMMdd-Hms' )
                    writeFile encoding: 'UTF-8', file: 'fileToArchive.js', text: "Need to be archived $currentDate"
                    sh """ls -l"""
                }
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
