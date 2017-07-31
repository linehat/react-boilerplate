# React-Boilerplate

## 支持
- [x] 热加载
- [x] react-router v4
- [x] webpack3
- [x] eslint
- [x] prettier
- [x] webpack插件整理
- [x] 集成antd
- [ ] 基于antd的简单页面逻辑(登录、首页、列表)
- [ ] 系统环境支持(开发、测试、生产) 
- [ ] 组件异步加载
- [ ] redux

## 目录说明
- dist: 打包后的文件目录
- public: 开发时DLL文件目录(对package.json中的依赖生成DLL以优化编译性能)
- src: 项目代码目录
- entry: index.html模版文件
- webpack: webpack相关目录,以避免重复定义

## 运行
- npm install
- npm run local.dll(dependencies有变动就运行一次)
- npm run local.dev

## 打包
- npm run build