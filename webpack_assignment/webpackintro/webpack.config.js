const path = require("path")

module.exports = {
    entry:"./src/index.js",
    output:{
        path: path.join(__dirname,"buid"),
        filename:"build.js",
       
    },
    mode:"production",
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
        
      },
}