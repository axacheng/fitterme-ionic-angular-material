### 使用方式
```sh
npm install && bower install && gulp --cordova 'prepare'
```

### 啟動development server：
```sh
gulp watch
```

### 安裝外掛：
```sh
gulp --cordova 'plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=YOUR_CLIENT_ID.apps.googleusercontent.com'
```

### 打包：
```sh
gulp build --env=prod
```


### NOTE: 安裝gulp-obfuscate
```sh
npm install gulp-obfuscate --save
```

### Based on:
Generator-M-Ionic v1.3.2
https://github.com/mwaylabs/generator-m-ionic

