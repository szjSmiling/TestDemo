### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Webfunny 前端项目 js 异常捕捉
See [Webfunny](https://github.com/a597873885/webfunny_monitor/blob/master/DES.md)
```
第一步、下载(clone)最新部署包，初始化
  1. git clone https://github.com/a597873885/webfunny_monitor.git
  2. npm run init
  3. npm install
  4. npm install pm2 -g
第二步、配置数据库(Mysql)连接
  1. 下载 https://dev.mysql.com/downloads/mysql/5.6.html#downloads
  2. 切换到D盘，进入解压目录cd ProjectTools\mysql-8.0.11-winx64\bin, 安装mysqld作为window服务,自动启动(mysqld install)
  3. 启动服务net start mysql
  4. 连接到本机MySQL，键入命令mysql -u root -p，回车后提示输密码
  5. use mysql
  5. net stop mysql
```

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

