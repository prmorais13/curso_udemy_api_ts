import NewRepository from '../repositories/newRepository';

class NewService {
  get() {
    return NewRepository.find({});
  }

  getById(_id) {
    return NewRepository.findById(_id);
  }

  create(news) {
    return NewRepository.create(news);
  }

  update(_id, news) {
    return NewRepository.findByIdAndUpdate(_id, news);
  }

  delete(_id) {
    return NewRepository.findByIdAndRemove(_id);
  }
}

export default new NewService();
