# Dev-Setup

## github.com

create a new repository with node .gitignore and README.md

## npm init -y

## npm i -D:

- prettier sass
- eslint eslint-config-prettier eslint-plugin-prettier
- webpack webpack-cli webpack-dev-server
- style-loader sass-loader file-loader css-loader
- clean-webpack-plugin html-webpack-plugin
- husky lint-staged

You can use this if you want:

```
npm i -D prettier sass eslint eslint-config-prettier eslint-plugin-prettier webpack webpack-cli webpack-dev-server style-loader sass-loader file-loader css-loader clean-webpack-plugin html-webpack-plugin husky lint-staged
```

## Folder structure

1. Create `src/` and `index.js` inside of `src/`

## package.json

remove:

```

"main": "index.js"

```

add:

```

"private": true

```

```

"scripts": {
"test": "eslint --ext .js src/",
"start": "webpack-dev-server --open",
"build": "webpack"

```

also don't forget husky 🐶 and lint-staged config:

```

"husky": {
"hooks": {
"pre-commit": "lint-staged",
"pre-push": "npm test"
}
}

```

```

"lint-staged": {
"_.{js}": "eslint --fix",
"_.{js,css,scss,md,json}": "prettier --write",
"\*.js": "eslint --cache --fix"
}

```

## webpack.config.js

Add a `webpack.config.js` for in-depth webpack configuration

For our setup we can use the following:

```

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
entry: './src/index.js',
plugins: [
new CleanWebpackPlugin(),
new HtmlWebpackPlugin({
title: 'ENTER YOUR NAME HERE'
})
],
devServer: {
contentBase: './dist'
},

output: {
filename: 'main.js',
path: path.resolve(__dirname, 'dist')
},
module: {
rules: [
{
test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
use: ['file-loader']
}
]
}
};

```

#### Dont forget to change the name in row 10!

`title: 'ENTER YOUR NAME HERE'`

What is included in the config:

- webpack entry point and dist location
- what plugins webpack uses
- modules including their rules
  - sass-loader
  - file-loader

## More configs 🥴

> ### .prettierrc

It's good pratice to use single-quotes in .js.
So we don't have to do that ourselves we'll let prettier take care of that by adding the following:

```

{
"singleQuote": true
}

```

> ### .eslintrc.js
>
> Let's add:

```

module.exports = {
env: {
browser: true,
es6: true
},
plugins: ['prettier'],
extends: ['eslint:recommended', 'plugin:prettier/recommended'],
globals: {
Atomics: 'readonly',
SharedArrayBuffer: 'readonly'
},
parserOptions: {
ecmaVersion: 2018,
sourceType: 'module'
},
rules: {}
};

```

Feel free to make comments in your configs so you understand whats going on!

In here we tell it what plugins to use and which version of js.

## Ignore files for days!

> ### .gitignore

Let's add:

- `.DS_STORE`
- `.vscode`

to our .gitignore

> ### .prettierignore

#### For things that don't need to be prettified

Let's add

- `dist/`
- `node_modules`
  to the file.

> ### .eslintignore

Let's add:

- `dist/`
- `node_modules/`
- `webpack.config.js`
- `*.scss`

## DONE! 🏁

That was easy, wasn't it?

### Have fun coding!
