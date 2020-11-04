module.exports = (config) => {
  // To stop 'hook inside body of function' React error
  // https://github.com/mobxjs/mobx-react-lite/issues/248
  config.externals = ["react", "react-dom"]

  return config
}
