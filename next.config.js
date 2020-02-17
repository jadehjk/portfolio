module.exports = {
    webpack: (config, options) => {
        config.module.rules.push(
            {
                test: /\.pdf$/i,
                use: 'raw-loader'
            },
            {
                test: /\.txt$/i,
                use: 'raw-loader'
            },
        )
        return config
    },
  };