const path = require('path');

module.exports = {
 entry: './src/index.ts',
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       use: 'ts-loader',
       exclude: /node_modules/
     }
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"],
   modules: [
      path.resolve(__dirname), './src',
    ]
 },
 output: {
   filename: 'bundle.js',
   path: path.join(__dirname, 'dist')
 }
};