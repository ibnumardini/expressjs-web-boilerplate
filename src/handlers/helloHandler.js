import * as helloService from '../services/helloService.js';

export const index = async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  const { hello } = await helloService.sayHello(ip);

  res.render('hello/index', { title: 'Hello', hello: `${hello} ✋🏻` });
};
