import env from '../config/env.js';

const setConfigData = (req, res, next) => {
  res.locals.appName = env.appName;
  next();
};

export default setConfigData;
