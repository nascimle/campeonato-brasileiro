const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req,res) => {
    return res.json([
        {posicao:1, nome: 'Corinthians', pontos: 45},
        {posicao:2, nome: 'Flamengo', pontos: 44},
        {posicao:3, nome: 'Atlético-MG', pontos: 44},
        {posicao:4, nome: 'Palmeiras', pontos: 42},
        {posicao:5, nome: 'Fluminense', pontos: 40},
        {posicao:6, nome: 'Red Bull', pontos: 39},
        {posicao:7, nome: 'Fortaleza', pontos: 37},
        {posicao:8, nome: 'Internacional', pontos: 37},
        {posicao:9, nome: 'Botafogo', pontos: 36},
        {posicao:10, nome: 'América-MG', pontos: 35},
        {posicao:11, nome: 'Atlético-PR', pontos: 35},
        {posicao:12, nome: 'Ceará', pontos: 32},
        {posicao:13, nome: 'Cuiabá', pontos: 30},
        {posicao:14, nome: 'Santos', pontos: 29},
        {posicao:15, nome: 'São Paulo', pontos: 27},
        {posicao:16, nome: 'Atético-GO', pontos: 24},
        {posicao:17, nome: 'Juventude', pontos: 22},
        {posicao:18, nome: 'Avaí', pontos: 21},
        {posicao:19, nome: 'Coritiba', pontos: 18},
        {posicao:20, nome: 'Goiás', pontos: 15}
     
    ])
})


app.listen('4567')