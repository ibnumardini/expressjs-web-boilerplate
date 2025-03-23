import { readFileSync } from 'fs';

export const sayHelloInCountry = (countrycode) => {
  const hellos = JSON.parse(readFileSync('src/data/hello.json', 'utf8'));

  return hellos.find((item) => item.country_code === countrycode);
};
