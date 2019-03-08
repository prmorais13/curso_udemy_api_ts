"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const newService_1 = require("../services/newService");
const helper_1 = require("../infra/helper");
class NewController {
    get(req, res) {
        newService_1.default.get()
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        //const _id = req.params.id;
        newService_1.default.getById(req.params.id)
            .then(data => {
            if (!data) {
                helper_1.default.sendResponse(res, HttpStatus.NOT_FOUND, 'Notícia não encontrada!');
            }
            helper_1.default.sendResponse(res, HttpStatus.OK, data);
        })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        const news = req.body;
        newService_1.default.create(news)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.CREATED, {
            message: 'Notícia cadastrada com sucesso!'
        }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        const news = req.body;
        newService_1.default.update(_id, news)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, `${news} atualizada com sucesso!`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        //const _id = req.params.id;
        newService_1.default.delete(req.params.id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.NO_CONTENT, {
            message: 'Notícia excluída com sucesso!'
        }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new NewController();
