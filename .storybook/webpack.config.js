module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.extensions.push('.svg');
  config.module.rules = config.module.rules.map(data => {
    if (/svg\|/.test(String(data.test)))
      data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

    return data;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: [
      { loader: require.resolve('babel-loader') },
      { loader: require.resolve('react-svg-loader') },
    ],
  });

  return config;
};
