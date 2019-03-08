import * as HttpStatus from 'http-status';

import NewService from '../services/newService';
import Helper from '../infra/helper';

class NewController {
  get(req, res) {
    NewService.get()
      .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {
    //const _id = req.params.id;

    NewService.getById(req.params.id)
      .then(data => {
        if (!data) {
          Helper.sendResponse(
            res,
            HttpStatus.NOT_FOUND,
            'Notícia não encontrada!'
          );
        }
        Helper.sendResponse(res, HttpStatus.OK, data);
      })
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  create(req, res) {
    const news = req.body;

    NewService.create(news)
      .then(news =>
        Helper.sendResponse(res, HttpStatus.CREATED, {
          message: 'Notícia cadastrada com sucesso!'
        })
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  update(req, res) {
    const _id = req.params.id;
    const news = req.body;

    NewService.update(_id, news)
      .then(news =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          `${news} atualizada com sucesso!`
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  delete(req, res) {
    //const _id = req.params.id;

    NewService.delete(req.params.id)
      .then(() =>
        Helper.sendResponse(res, HttpStatus.NO_CONTENT, {
          message: 'Notícia excluída com sucesso!'
        })
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }
}

export default new NewController();
