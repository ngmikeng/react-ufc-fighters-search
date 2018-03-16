import fightersData from '../data/ufc-fighters.json';

class APIService {
  constructor() {
    this.baseURL = 'http://ufc-data-api.ufc.com/api/v3/us/';
  }

  getFighters() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(fightersData), 500);
    });
  }
}

export default APIService;
