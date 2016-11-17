# labrador-dev

Labrador 框架开发环境

本项目的目的是为了开发Labrador核心框架而搭建的环境，并非使用Labrador框架构建的demo，在你自己的Labrador项目中也不需要依赖此项目

欢迎向Labrador贡献代码，QQ交流群 282140496

## 开始

```sh
# 首先克隆此仓库到本地目录
git clone https://github.com/maichong/labrador-dev.git 

# 进入根目录
cd labrador-dev

# 安装依赖
npm install 

# 安装demo的依赖
cd demo
npm install
cd ..

# 克隆Labrador核心框架
npm run clone

# 监听Labrador核心框架变化
npm run watch

# 开发Labrador核心库

# ...
# 在这里施展你的魔法
# ...

# 编译demo查看效果
cd demo
labrador build -d -f

```

## 命令

#### npm run clone

此命令能将 `labrador`、`labrador-cli`、`labrador-redux`、`labrador-test`、`al-ui`等库克隆到本地目录。

#### npm run pull

拉取更新所有本地Labrador库

#### npm run watch

监听本地所有以 `labrador*` 和 `al-*` 开头的文件夹，如果文件更新，则自动复制到 `demo/node_modules/` 对应的目录下。

#### npm run publish [package]

发布指定的包到NPM。
