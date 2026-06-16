const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_DIR = path.join(__dirname, '../data');

const getFilePath = (collection) => path.join(DATA_DIR, `${collection}.json`);

const readData = (collection) => {
  const filePath = getFilePath(collection);
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

const writeData = (collection, data) => {
  fs.writeFileSync(getFilePath(collection), JSON.stringify(data, null, 2));
};

const generateId = () => crypto.randomBytes(12).toString('hex');

const store = {
  find(collection, filter = {}) {
    let data = readData(collection);
    for (const [key, value] of Object.entries(filter)) {
      data = data.filter((item) => item[key] === value);
    }
    return data;
  },

  findById(collection, id) {
    return readData(collection).find((item) => item._id === id) || null;
  },

  findOne(collection, filter) {
    const data = readData(collection);
    return data.find((item) =>
      Object.entries(filter).every(([key, val]) => item[key] === val)
    ) || null;
  },

  create(collection, doc) {
    const data = readData(collection);
    const newDoc = {
      _id: generateId(),
      ...doc,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    data.push(newDoc);
    writeData(collection, data);
    return newDoc;
  },

  insertMany(collection, docs) {
    const data = readData(collection);
    const newDocs = docs.map((doc) => ({
      _id: generateId(),
      ...doc,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));
    data.push(...newDocs);
    writeData(collection, data);
    return newDocs;
  },

  updateById(collection, id, updates) {
    const data = readData(collection);
    const index = data.findIndex((item) => item._id === id);
    if (index === -1) return null;
    data[index] = { ...data[index], ...updates, updatedAt: new Date().toISOString() };
    writeData(collection, data);
    return data[index];
  },

  deleteById(collection, id) {
    const data = readData(collection);
    const filtered = data.filter((item) => item._id !== id);
    if (filtered.length === data.length) return false;
    writeData(collection, filtered);
    return true;
  },

  count(collection, filter = {}) {
    return this.find(collection, filter).length;
  },
};

module.exports = store;
