# 项目前端

### 项目后端单体服务地址
<https://github.com/zyx666yyds/xian-oj-back>
### 项目后端微服务地址

<https://github.com/zyx666yyds/xianOJ-backend-microserver>

### 项目代码沙箱地址

<https://github.com/zyx666yyds/zyxoj-sandbox>


## 需根据使用后端单体或微服务修改以下配置
![image](https://github.com/zyx666yyds/xian-oj/assets/94099079/c8d6b3ac-7225-4637-b633-7af573f8dfd7)
```
修改/generated/core/OpenAPI.ts文件的BASE，本项目后端单体服务使用的为http://localhost:8121/api
微服务网关地址为http://localhost:8101/api
```

![image](https://github.com/zyx666yyds/xian-oj/assets/94099079/5e15f472-5a8c-45da-97fd-55fbe14b2467)

## 快速根据后端接口生成前端axios代码
```
openapi --input http://localhost:8121/api/v3/api-docs/default --output ./generated --client axios
```

## Project setup
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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
