pipeline {
    agent any

    stages{
        stage('Preparação'){
            steps{
                echo 'Iniciando o container...'
            }
        }
        stage('Testando o ambiente'){
            steps {
                bat 'docker run --rm node:20-alpine node --version'
                
                bat 'docker run --rm node:20-alpine npm --version'
                
                echo 'Uau! Isso rodou usando um Node do Docker, sem precisar do Node do Windows!'
            }
        }
    }
}