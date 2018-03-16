
class DataStore {
  constructor() {
    this.fightersData = [];
  }

  setFightersData(data) {
    if (data) {
      this.fightersData = data;
    }
  }

  getFightersData() {
    return this.fightersData;
  }
}

const DataStoreInstance = new DataStore();

export { DataStoreInstance };
export default DataStore;
