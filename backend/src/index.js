const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());
/**
 * Rota e recursos
 */

/**
 * Metodos HTTP
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query params: Parametros enviados na rota (querystring)
 * Route params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizados para criar ou alterar reursos
 */

/**
 * SQL: MySQL, SqLite, Postgre, Oracle, Sql Server
 * NoSQL: mongodb
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333);