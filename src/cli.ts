import fetch from 'node-fetch';
import config from './config';

const fetchJson = async (url, opts = {}) =>
  fetch(url, opts).then((res) => res.json());

async function run(this) {
  const [cmd, ...args] = process.argv.slice(2);
  const { apiUrl } = config;

  const methods = {
    findAll: (sort: string) => {
      return fetchJson(`${apiUrl}?sort=${sort}`);
    },
    findOne: (objectId) => {
      return fetchJson(`${apiUrl}/${objectId}`);
    },
    update: (
      objectId,
      brand = 'unknown',
      name = 'unknown',
      year = 2000,
      price = 10000,
    ) => {
      return fetchJson(`${apiUrl}/${objectId}`, {
        method: 'patch',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: objectId,
          brand,
          name,
          year,
          price,
        }),
      });
    },
    delete: (objectId) => {
      return fetchJson(`${apiUrl}/${objectId}`, {
        method: 'delete',
      });
    },
    create: (
      brand = 'unknown',
      name = 'unknown',
      year = 2000,
      price = 10000,
    ) => {
      return fetch(`${apiUrl}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brand,
          name,
          year,
          price,
        }),
      });
    },
  };

  const res = await methods[cmd].call(this, ...args);
  console.log(res);
}

run();
