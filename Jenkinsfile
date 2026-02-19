pipeline {
    agent{
        docker{
            image 'node:20-alpine'
        }
    }

    stages{
        stage('Preparação'){
            steps{
                echo 'Iniciando o container...'
            }
        }
        stage('Testando o ambiente'){
            steps{
                sh 'node -v'
                sh 'npm -v'
                sh 'echo "Hello, World!"'
                sh 'echo "Testando o ambiente de desenvolvimento..."'
            }
        }
    }
}