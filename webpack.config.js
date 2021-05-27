const path = require('path');

module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(jpg|png|svg)$/,
          use: {
            loader: 'url-loader',
          },
        },
      ],
    }
};