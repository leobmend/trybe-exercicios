const express = require('express');
const rescue = require('express-rescue');

const CepService = require('../services/CepService');
const { validateCep, validateCepAndAddress } = require('./middlewares'); 

const routes = express.Router();

routes.get(
  '/cep/:cep',
  validateCep,
  rescue(async (req, res) => {
    const { cep } = req.params;
    const address = await CepService.get(cep);

    res.status(200).json(address);
  }),
);

routes.post(
  '/cep',
  validateCepAndAddress,
  rescue(async (req, res) => {
    const { cep, logradouro, bairro, localidade, uf } = req.body;
    
    await CepService.add(cep, logradouro, bairro, localidade, uf);

    res.status(201).json({ cep, logradouro, bairro, localidade, uf });
  }),
)


module.exports = routes;
