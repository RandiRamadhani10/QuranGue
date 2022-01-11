import dataBookmark from "../data/dataBookmark";
const dataLocal = {
  SetData(data, key) {
    const parsed = JSON.stringify(data);
    localStorage.setItem(key, parsed);
  },
  
  LoadData(key) {
    const storage = localStorage.getItem(key);
    const data = JSON.parse(storage) || [];
    return data;
  },
};

export default dataLocal;
