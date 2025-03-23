import geoip from 'geoip-lite';
import { sayHelloInCountry } from '../repositories/helloRepository.js';

export const sayHello = async (ip) => {
  // ip = '182.3.101.116'; // Indonesian
  // ip = '46.252.47.162'; // Albanian

  const country = geoip.lookup(ip)?.country;

  if (country) {
    const say = sayHelloInCountry(country);

    if (say) return say;
  }

  return { hello: 'Hello, World!' };
};
