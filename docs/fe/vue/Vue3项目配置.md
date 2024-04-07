

##  创建项目

```
npm init vite@latest name -- --template vue-ts
```



## 编码规范配置

> ESLint：编码规范检查
> Prettier：代码格式化工具

### 安装

```shell
# eslint => ESLint的核心代码
# @typescript-eslint/parser => ESLint的解析器，用于解析ts，从而检查和规范ts代码
# @typescript-eslint/eslint-plugin => 一个ESLint插件，包含了各类定义好的检测ts代码的规范
# eslint-plugin-vue => vue3的代码校验
# prettier => prettier插件的核心代码
# eslint-config-prettier => 解决ESLint中的样式规范和prettier中样式规范的冲突，以prettier的样式规范为准，使ESLint中的样式规范自动失效
# eslint-plugin-prettier => 将prettier作为ESLint规范来使用
cnpm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-vue prettier eslint-config-prettier eslint-plugin-prettier
```

### 配置

#### `.eslintrc.js`配置文件

> https://eslint.org/docs/latest/user-guide/configuring/configuration-files#configuration-file-formats
> https://eslint.vuejs.org/rules

```js
module.exports = {
    parser: '@typescript-eslint/parser', //定义ESLint的解析器
    extends: [
        'prettier/@typescript-eslint',  // 使@typescript-eslint中的样式规范失效，遵循prettier中的样式规范
        'plugin:prettier/recommended' // 使用prettier中的样式规范，且如果使ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出
    ],
    settings: {
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    },
    parserOptions: {
        "ecmaVersion": 2019,
        "sourceType": 'module',
        "ecmaFeatures": {
            jsx: true
        }
    },
    env: {
        //指定代码的运行环境
        browser: true,
        node: true,
    }
};
```

#### `.prettierrc.js`配置文件

> https://prettier.io/docs/en/configuration.html

```js
module.exports = {
    printWidth: 120,
    semi: false,
    singleQuote: true,
    trailingComma: "all",
    bracketSpacing: false,
    jsxBracketSameLine: true,
    arrowParens: "avoid",
    insertPragma: true,
    tabWidth: 4,
    useTabs: false,
};
```

#### `.eslintignore`ESLint忽略检查文件

```
node_modules
*.md
.vscode
.idea
dist
/public
.eslintrc.js
src/assets
```

#### `.prettierignore`Prettier忽略格式化文件

```
/dist/*
/node_modules/**
**/*.svg
/public/*
```

### 代码检查 & 自动修复 & 自动格式化

`package.json`的`scripts`中添加

> `--ext`: 配置要检查文件的后缀
> `eslint --ext .js --ext .ts --ext .vue src`: 只检查src文件夹下的js/ts/vue文件

```
"scripts": {
    "lint": "eslint --ext .js --ext .ts --ext .vue src",
    "lint-fix": "eslint --ext .js --ext .ts --ext .vue src --fix",
    "prettier": "prettier --write ."
}
```

```shell
# 代码检查
cnpm run lint

# 自动修复  tips: 部分代码修复可能会影响功能，所以不会自动修复，会给出提示
cnpm run lint-fix

# prettier 自动格式化
cnpm run prettier
```

### 统一代码风格

> 需安装插件`EditorConfig for VS Code`

`.editorconfig`

```
# https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
insert_final_newline = false
trim_trailing_whitespace = false
```



## Vite配置

### 配置路径别名

`vite.config.ts`

```ts
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  //src配置路径
  resolve: {
    alias: {
        //@替代src
      "@": path.resolve(__dirname, 'src')
    }
  }
})
 
```

解决：找不到模块“path”或其相应的类型声明

```shell
# 安装node声明文件
cnpm i @types/node --save-dev
```

找到`tsconfig.json`配置文件,找到配置项`compilerOptions `添加配置,这一步的作用是让 IDE 可以对路径进行智能提示

```
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
```



### 环境变量

`.env.dev`

```
# 开发环境
NODE_ENV='dev'

# 为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
# ts中通过`import.meta.env.VITE_APP_BASE_API`取值
VITE_APP_PORT = 5173
VITE_APP_BASE_API = '/dev-api'
```

### 反向代理解决跨域问题 & 配置项目运行端口

`vite.config.ts`

```ts
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // 获取`.env`环境配置文件
  const env = loadEnv(mode, process.cwd());

  return { 
    server: {
      // host:'localhost'，//只能本地访问
      host:'0.0.0.0',//局域网别人也可访问
      port: Number(env.VITE_APP_PORT),
      // 运行时自动打开浏览器
      // open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'http://localhost:1218',
          changeOrigin: true,
          rewrite: path =>
            path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
        }
      }
    }
  }
})
```

### 引入scss全局变量

`vite.config.ts`

```ts
export default defineConfig(({ mode }) => {
  return {
    // 引入scss全局变量
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/app-theme.scss";`
        }
      }
    }
  }
})
```

`src/styles/app-theme.scss`

```scss
$dark_main_color: #021b32;
```



## TypeScript配置

`tsconfig.json`

> 通过vite创建项目后的默认配置

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": ["ESNext", "DOM"],
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```

---

### 解决：找不到模块“@/router”或其相应的类型声明。

`tsconfig.json`新增如下配置

```json
"baseUrl": ".",
"paths": {
  "@/*": [ "src/*" ]
}
```

### 解决：template中使用$store报错

`vite-env.d.ts`

```ts
import { Store } from '@/store'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store;
  }
}
```



## package.json

`package.json`

```
{
  "name": "small-tools-web",
  "private": true,
  "version": "1.0.1",
  "type": "module",
  "scripts": {
    // 运行
    "dev": "vite --mode dev",
    // 构建生成 dist 文件夹
    "build:prod": "vue-tsc --noEmit && vite build --mode prod",
    // 在本地启动一个静态 Web 服务器，将 dist 文件夹运行在 http://localhost:8080
    "preview": "vite preview --port 8080 --mode prod",
    // eslint检查
    "lint": "eslint --ext .js --ext .ts --ext .vue src",
    // eslint自动修复
    "lint-fix": "eslint --ext .js --ext .ts --ext .vue src --fix",
    // prettier自动格式化代码
    "prettier": "prettier --write ."
  },
  "dependencies": {
    "vue": "^3.2.37",
    "vue-router": "^4.1.2"
  },
  "devDependencies": {
    "@types/node": "^18.0.5",
    "@typescript-eslint/eslint-plugin": "^5.30.6",
    "@typescript-eslint/parser": "^5.30.6",
    "@vitejs/plugin-vue": "^3.0.0",
    "eslint": "^8.20.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-vue": "^9.2.0",
    "prettier": "^2.7.1",
    "typescript": "^4.6.4",
    "vite": "^3.0.0",
    "vue-tsc": "^0.38.4"
  }
}
```

---

```
# devDependencies: 里面的插件只用于开发环境，不用于生产环境 
# dependencies: 需要发布到生产环境的

# 写入到 dependencies 对象
npm i module_name -S    =>    npm install module_name --save

# 写入到 devDependencies 对象
npm i module_name -D    =>    npm install module_name --save-dev
```



## Sass

### 安装

```shell
npm install sass --save-dev
```



## Vue-Router

> https://router.vuejs.org/zh

### 安装

```shell
npm install vue-router@4
```

### 入门配置

`src/router/index.ts`

```ts
import {createRouter, createWebHashHistory} from 'vue-router';

// 静态路由
export const routes = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/404.vue')
    },
];

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
```

`src/main.ts`

```ts
// ****** ↓↓↓ 路由 ↓↓↓ ******
import router from '@/router';

const app = createApp(App);
app.use(router);
app.mount('#app')
```

`src/views/error-page/404.vue`

```vue

<template>
  <h1>404</h1>
</template>
```

`src/App.vue`

```vue

<template>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view/>
</template>
```

访问`http://ip:端口/#/404`



## Element-Plus

> https://element-plus.gitee.io/zh-CN

### 安装

```shell
npm install element-plus --save
npm install @element-plus/icons-vue
```

### 配置

`main.ts`

```ts
// ****** ↓↓↓ element-plus ↓↓↓ ******
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

### Volar 支持

`tsconfig.json`中通过`compilerOptions.types`指定全局组件类型

```json
{
  "compilerOptions": {
    "types": [
      "element-plus/global"
    ]
  }
}
```

### demo

```html
<template>
    <el-button link>按钮</el-button>
    <el-icon class="is-loading">
        <Loading />
    </el-icon>
    <div>
        <el-button :icon="Search" circle />
        <el-button type="primary" :icon="Edit" circle />
        <el-button type="success" :icon="Check" circle />
        <el-button type="info" :icon="Message" circle />
        <el-button type="warning" :icon="Star" circle />
        <el-button type="danger" :icon="Delete" circle />
    </div>
</template>
 
<script lang="ts" setup>
import { Check, Delete, Edit, Message, Search, Star, } from '@element-plus/icons-vue'
</script>
```



## 自定义样式

### 自定义样式

`main.ts`

```ts
import '@/styles/index.scss';
```

`src/styles/index.scss`

```scss
@import './element-plus-theme';

body {
  background-color: #021b32;
}
```

`src/styles/element-plus-theme.scss`

```scss
// ****** ↓↓↓ 覆盖 element-plus 的样式 ↓↓↓ ******

// 按钮
.el-button--text {
  // background-color: #8f6732 !important; 
  margin-left: 3px;
  border: none !important;
}
```



## Pinia

> https://pinia.vuejs.org

### 安装

```shell
npm install pinia --save
```

### 配置

`main.ts`

```ts
const app = createApp(App)

// pinia
import { createPinia } from 'pinia';
const pinia = createPinia()
app.use(pinia)
	
// store
import useStore from "@/store";
app.config.globalProperties.$store = useStore();

app.mount('#app')
```

### 使用

`src/store/index.ts`

```ts
import useAppStore from './modules/app';

const useStore = () => ({
    app: useAppStore()
});

export default useStore;
```

`src/store/modules/app.ts`

```ts
import { AppState } from '@/types/store/app';
import { localStorage } from '@/utils/storage';
import { defineStore } from 'pinia';

const useAppStore = defineStore({
    id: 'app',
    state: (): AppState => ({
        name: localStorage.get('name') || 'Small Tools',
    }),
    actions: {
        setName(name: string) {
            this.name = name;
            localStorage.set('name', name);
        }
    }
});

export default useAppStore;
```

`src/utils/storage.ts`

```ts
/**
 * window.localStorage => 浏览器永久存储，用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去删除。
 */
export const localStorage = {
    set(key: string, val: any) {
        window.localStorage.setItem(key, JSON.stringify(val));
    },
    get(key: string) {
        const json: any = window.localStorage.getItem(key);
        return JSON.parse(json);
    },
    remove(key: string) {
        window.localStorage.removeItem(key);
    },
    clear() {
        window.localStorage.clear();
    },
};

/**
 * window.sessionStorage => 浏览器本地存储，数据保存在当前会话中，在关闭窗口或标签页之后将会删除这些数据。
 */
export const sessionStorage = {
    set(key: string, val: any) {
        window.sessionStorage.setItem(key, JSON.stringify(val));
    },
    get(key: string) {
        const json: any = window.sessionStorage.getItem(key);
        return JSON.parse(json);
    },
    remove(key: string) {
        window.sessionStorage.removeItem(key);
    },
    clear() {
        window.sessionStorage.clear();
    },
};
```

页面引用

```
<template>
    <p>store: {{ name }}</p>
    <p>store: {{ app.name }}</p>
    <p>store: {{ $store.app.name }}</p>
    <el-button @click="changeStore('666')">change store</el-button>
</template>
 
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import useStore from "@/store";

const { app } = useStore()
// const name = ref(app.name)
// 响应式
const { name: name } = storeToRefs(app)

function changeStore(value: string) {
    app.setName(value)
}
</script>
```



## Axios和API封装

> http://www.axios-js.com/zh-cn/docs

### 安装

```shell
cnpm install axios --save
```

### axios工具封装

`src/utils/request.ts`	

```ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
import { localStorage } from '@/utils/storage';
import useStore from '@/store';


// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 请求超时时间：50s
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});


// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    }
    const { user } = useStore();
    if (user.token) {
      // 授权认证
      config.headers.Authorization = user.token;
    }
    // 租户ID
    config.headers['TENANT_ID'] = '1'
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    const { code, msg } = res;
    if (code === 200) {
      return res;
    } else {
      // token过期
      if (code === -1) {
        ElMessageBox.confirm("您的登录账号已失效，请重新登录", {
          confirmButtonText: "再次登录",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          // 清除浏览器全部缓存
          localStorage.clear();
          // 跳转登录页
          window.location.href = '/';
          location.reload();
        });
      } else {
        ElMessage({
          message: msg || '系统出错',
          type: 'error',
          duration: 5 * 1000
        });
      }
      return Promise.reject(new Error(msg || 'Error'));
    }
  },
  (error) => {
    const { msg } = error.response.data;
    // 未认证
    if (error.response.status === 401) {
      ElMessageBox.confirm("您的登录账号已失效，请重新登录", {
        confirmButtonText: "再次登录",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        // 清除浏览器全部缓存
        localStorage.clear();
        // 跳转登录页
        window.location.href = '/';
        location.reload();
      });
    } else {
      ElMessage({
        message: "网络异常，请稍后再试!",
        type: "error",
        duration: 5 * 1000
      });
      return Promise.reject(new Error(msg || 'Error'));
    }
  }
);

// 导出实例
export default service;
```

### api封装

`src/api/	

```ts
// 拿到所有api
const modulesFiles = import.meta.globEager('./*/*.*');
const modules: any = {};
for (const key in modulesFiles) {
  const moduleName = key.replace(/(.*\/)*([^.]+).*/gi, '$2');
  const value: any = modulesFiles[key];
  if (value.default) {
    // 兼容js
    modules[moduleName] = value.default;
  } else {
    // 兼容ts
    modules[moduleName] = value;
  }
}
// console.log(666, modules);
export default modules;
```

`main.ts`

```ts
const app = createApp(App);

// 配置全局api
import api from '@/api'
app.config.globalProperties.$api = api;

app.mount('#app')
```

### api调用demo

`src/api/system/sys_login.ts`

```ts
import { Captcha } from '@/types/api/system/login';
import request from '@/utils/request';
import { AxiosPromise } from 'axios';

// 获取验证码
export function getCaptcha(): AxiosPromise<Captcha> {
    return request({
        url: '/captcha?t=' + new Date().getTime().toString(),
        method: 'get',
    });
}
```

`src/types/api/system/login.d.ts`

```ts
// 验证码类型声明
export interface Captcha {
    img: string;
    uuid: string;
}
```

`src/views/login/index.vue`

```ts
<template>
    <p>Hello...</p>
</template>
 
<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
// 组件实例
const { proxy }: any = getCurrentInstance();
// 获取验证码
async function handleCaptcha() {
    const res = await proxy.$api.sys_login.getCaptcha()
    console.log('res:', res);
}
handleCaptcha()
</script>
```



## 权限

### 用户登录成功后将用户信息存储到store中

`src/views/login/index.vue`

```ts
function handleLogin() {
  loginFormRef.value.validate((valid: boolean) => {
    if (valid) {
      state.loading = true;
      user.login(state.loginForm).then(() => {
        router.push({ path: state.redirect || '/', query: state.otherQuery });
        state.loading = false;
      }).catch(() => {
        state.loading = false;
        handleCaptchaGenerate();
      });
    } else {
      return false;
    }
  });
}
```

### store

`src/store/modules/user.ts`

```ts
import { defineStore } from 'pinia';
import { LoginFormData } from '@/types/api/system/login';
import { UserState } from '@/types/store/user';

import { localStorage } from '@/utils/storage';
import { login, logout } from '@/api/system/sys_login';
import { getUserPerm } from '@/api/system/user';
import { resetRouter } from '@/router';

const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userId: 0,
    openId: '',
    token: localStorage.get('token') || '',
    nickname: '',
    avatarUrl: '',
    roleNames: [],
    permissionTreeList: [],
  }),
  actions: {
    async RESET_STATE() {
      this.$reset();
    },
    /**
     * 登录
     */
    login(loginData: LoginFormData) {
      const { username, password, code, uuid } = loginData;
      return new Promise((resolve, reject) => {
        login({
          username: username.trim(),
          password: password,
          grant_type: 'captcha',
          code: code,
          uuid: uuid,
        }).then((response) => {
          const { tokenType, value } = response.data;
          const token = tokenType + ' ' + value;
          localStorage.set('token', token);
          this.token = token;
          resolve(token);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    /**
     *  获取用户信息（昵称、头像、角色集合、权限集合）
     */
    getUserInfo() {
      return new Promise((resolve, reject) => {
        getUserPerm().then(({ data }: any) => {
          if (!data) {
            return reject('Verification failed, please Login again.');
          }
          const { userId, openId, nickname, avatarUrl, roleNames, permissionTreeList } = data;
          this.userId = userId;
          this.openId = openId;
          this.nickname = nickname;
          this.avatarUrl = avatarUrl;
          this.roleNames = roleNames;
          this.permissionTreeList = permissionTreeList;
          resolve(data);
        }).catch((error: any) => {
          reject(error);
        });
      });
    },

    /**
     *  注销
     */
    logout() {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          localStorage.remove('token');
          this.RESET_STATE();
          resetRouter();
          resolve(null);
        }).catch((error) => {
          reject(error);
        });
      });
    },

    /**
     * 清除 Token
     */
    resetToken() {
      return new Promise((resolve) => {
        localStorage.remove('token');
        this.RESET_STATE();
        resolve(null);
      });
    },
  },
});

export default useUserStore;
```

`src/store/modules/permission.ts`

```ts
import { PermissionState } from '@/types/store/permission';
import { RouteRecordRaw } from 'vue-router';
import { defineStore } from 'pinia';
import { constantRoutes } from '@/router';
import useStore from '@/store';

const modules = import.meta.glob('../../views/**/**.vue');
export const Layout = () => import('@/layout/index.vue');
export const parentView = () => import('@/layout/parentView.vue');

export const filterAsyncRoutes = (
  routes: RouteRecordRaw[],
  roleNames: string[]
) => {
  const res: RouteRecordRaw[] = [];
  routes.forEach((route) => {
    const tmp = { ...route } as any;
    if (tmp.component === 'Layout') {
      tmp.component = Layout;
    } else if (tmp.component === 'parentView') {
      tmp.component = parentView
    } else {
      const component = modules[`../../views/${tmp.component}.vue`] as any;
      if (component) {
        tmp.component = modules[`../../views/${tmp.component}.vue`];
      } else {
        tmp.component = modules[`../../views/error-page/404.vue`];
      }
    }
    res.push(tmp);
    if (tmp.children) {
      tmp.children = filterAsyncRoutes(tmp.children, roleNames);
    }

  });
  return res;
};

/**
 * 侧边栏权限路由
 */
const usePermissionStore = defineStore({
  id: 'permission',
  state: (): PermissionState => ({
    routes: [],
    addRoutes: [],
  }),
  actions: {
    setRoutes(routes: RouteRecordRaw[]) {
      this.addRoutes = routes;
      this.routes = constantRoutes.concat(routes);
    },
    generateRoutes(roleNames: string[]) {
      const { user } = useStore();
      const accessedRoutes = filterAsyncRoutes(user.permissionTreeList, roleNames);
      return new Promise((resolve, reject) => {
        this.setRoutes(accessedRoutes);
        resolve(accessedRoutes);
      });
    },
  },
});

export default usePermissionStore;
```

### router

`src/router/index.ts`

```
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import useStore from '@/store';

// 静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/test',
        component: () => import('@/views/test/index.vue')
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/404.vue')
    },
];

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes as RouteRecordRaw[],
});

// 重置路由
export function resetRouter() {
    const { permission } = useStore();
    permission.routes.forEach((route) => {
        const name = route.name;
        if (name && router.hasRoute(name)) {
            router.removeRoute(name);
        }
    });
}

export default router;
```

### 刷新路由时权限

`permission.ts`

```ts
import router from '@/router';
import { ElMessage } from 'element-plus';
import useStore from '@/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false }); // 进度环显示/隐藏

// 白名单路由
const whiteList = ['/login', '/auth-redirect'];

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const { user, permission } = useStore();
  const hasToken = user.token;
  if (hasToken) {
    // 登录成功，跳转到首页
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done();
    } else {
      const hasGetUserInfo = user.roleNames.length > 0;
      if (hasGetUserInfo) {
        if (to.matched.length === 0) {
          from.name ? next({ name: from.name as any }) : next('/401');
        } else {
          next();
        }
      } else {
        try {
          await user.getUserInfo();
          const roleNames = user.roleNames;
          const accessRoutes: any = await permission.generateRoutes(roleNames);
          accessRoutes.forEach((route: any) => {
            router.addRoute(route);
          });
          next({ ...to, replace: true });
        } catch (error) {
          // 移除 token 并跳转登录页
          await user.resetToken();
          ElMessage.error((error as any) || 'Has Error');
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    // 未登录可以访问白名单页面(登录页面)
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
```

`main.ts`

```ts
// 路由权限
import '@/permission';
```



## 动态路由布局

### 动态路由布局相关页面

具体见源码`src/layout`部分

`src/layout/index.vue`

```vue
<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <Sidebar class="sidebar-container" />
    <div :class="{ hasTagsView: needTagsView }" class="main-container">
      <div :class="{ 'fixed-header': true }">
        <navbar />
        <tags-view v-if="needTagsView" />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { AppMain, Navbar, TagsView } from './components/index';
import Sidebar from './components/Sidebar/index.vue';

import useStore from '@/store';


const { width } = useWindowSize();
const WIDTH = 992;

const { app, setting } = useStore();

const sidebar = computed(() => app.sidebar);
const device = computed(() => app.device);
const needTagsView = computed(() => setting.tagsView);

const classObj = computed(() => ({
  hideSidebar: !sidebar.value.opened,
  openSidebar: sidebar.value.opened,
  withoutAnimation: sidebar.value.withoutAnimation,
  mobile: device.value === 'mobile',
}));

watchEffect(() => {
  if (width.value < WIDTH) {
    app.toggleDevice('mobile');
    app.closeSideBar(true);
  } else {
    app.toggleDevice('desktop');
  }
});

function handleClickOutside() {
  app.closeSideBar(false);
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
```

`src/layout/parentView.vue`

```vue
<template>
  <router-view />
</template>
<script lang="ts">
export default {
  name: 'ParentView',
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>

```

`src/layout/components/AppMain.vue`

```vue
<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="router-fade" mode="out-in">
        <keep-alive :include="cachedViews">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useStore from '@/store';

const { tagsView } = useStore();

const cachedViews = computed(() => tagsView.cachedViews);
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    min-height: calc(100vh - 84px);
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
```

`src/layout/components/index.ts`

```ts
export { default as Navbar } from './Navbar.vue';
export { default as AppMain } from './AppMain.vue';
export { default as TagsView } from './TagsView/index.vue';
```

`src/layout/components/Navbar.vue`

```vue
<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container"
      @toggleClick="toggleSideBar" />

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div>
          <el-avatar :src="avatarUrl" />
          <div class="user-info">
            <span>{{ nickname }}</span>
            <CaretBottom style="width: 0.6em; height: 0.6em; margin-left: 5px" />
          </div>
        </div>

        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/">
              <el-dropdown-item>首页</el-dropdown-item>
            </router-link>
            <router-link to="/system/personal-center">
              <el-dropdown-item>个人中心</el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://gitee.com/zhengqingya">
              <el-dropdown-item>Gitee</el-dropdown-item>
            </a>
            <router-link to="/other/anonymity">
              <el-dropdown-item>提建议</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="logout"> 退出 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ElMessageBox } from 'element-plus';

import useStore from '@/store';

// 组件依赖
import Breadcrumb from '@/components/Breadcrumb/index.vue';
import Hamburger from '@/components/Hamburger/index.vue';

const { app, user, tagsView } = useStore();

const route = useRoute();
const router = useRouter();

const sidebar = computed(() => app.sidebar);
const device = computed(() => app.device);
const avatarUrl = computed(() => user.avatarUrl);
const nickname = computed(() => user.nickname);

function toggleSideBar() {
  app.toggleSidebar();
}

function logout() {
  ElMessageBox.confirm('确定注销并退出系统吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    user
      .logout()
      .then(() => {
        tagsView.delAllViews();
      })
      .then(() => {
        router.push(`/login?redirect=${route.fullPath}`);
      });
  });
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: $dark_main_color;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 60px;

      .user-info {
        cursor: pointer;
        position: absolute;
        right: -50px;
        top: 15px;
        font-size: 18px;
      }
    }
  }
}
</style>
```

`src/layout/components/Sidebar/index.vue`

```vue
<template>
  <div :class="{ 'has-logo': true }">
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :collapse="isCollapse" :background-color="variables.menuBg"
        :text-color="variables.menuText" :active-text-color="variables.menuActiveText" :unique-opened="true"
        :collapse-transition="false" mode="vertical">
        <sidebar-item v-for="route in routes" :item="route" :key="route.path" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import SidebarItem from './SidebarItem.vue';
import Logo from './Logo.vue';
import variables from '@/styles/variables.module.scss';
import useStore from '@/store';

const { permission, app } = useStore();

const route = useRoute();
const routes = computed(() => permission.routes);
const isCollapse = computed(() => !app.sidebar.opened);

const activeMenu = computed(() => {
  const { meta, path } = route;
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu as string;
  }
  return path;
});
</script>
```

`src/layout/components/Sidebar/Link.vue`

```vue
<template>
  <a v-if="isExternal(to)" :href="to" target="_blank" rel="noopener">
    <slot />
  </a>
  <div v-else @click="push">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { isExternal } from '@/utils/validate';
import { useRouter } from 'vue-router';

import useStore from '@/store';

const { app } = useStore();

const sidebar = computed(() => app.sidebar);
const device = computed(() => app.device);

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const push = () => {
      if (device.value === 'mobile' && sidebar.value.opened == true) {
        app.closeSideBar(false);
      }
      router.push(props.to).catch((err) => {
        console.log(err);
      });
    };
    return {
      push,
      isExternal,
    };
  },
});
</script>
```

`src/layout/components/Sidebar/Logo.vue`

```vue
<template>
  <div class="sidebar-logo-container" :class="{ collapse: isCollapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        class="sidebar-logo-link"
        to="/"
      >
        <img v-if="logo" :src="logo" class="sidebar-logo" />
        <h1 v-else class="sidebar-title">{{ title }}</h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo" />
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue';

const props = defineProps({
  collapse: {
    type: Boolean,
    required: true,
  },
});

const state = reactive({
  isCollapse: props.collapse,
});

const { isCollapse } = toRefs(state);

const title = ref('Small Tools');
const logo = ref(
  'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
);
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #00284c;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
      margin-left: 12px;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
```

`src/layout/components/Sidebar/SidebarItem.vue`

```vue
<template>
  <div v-if="!item.hidden">
    <template v-if="
      hasOneShowingChild(item.children, item) &&
      (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
      (!item.meta || !item.meta.alwaysShow)
    ">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{ 'submenu-title-noDropdown': !isNest }">
          <el-icon v-if="onlyOneChild.meta && onlyOneChild.meta.icon">
            <component :is="onlyOneChild.meta.icon" />
          </el-icon>
          <template #title>
            {{ onlyOneChild.meta.title }}
          </template>
        </el-menu-item>
      </app-link>
    </template>

    <el-sub-menu v-else :index="resolvePath(item.path)">
      <template #title>
        <el-icon v-if="item.meta && item.meta.icon">
          <component :is="item.meta.icon" />
        </el-icon>
        <span v-if="item.meta && item.meta.title">{{
            item.meta.title
        }}</span>
      </template>

      <sidebar-item v-for="child in item.children" :key="child.path" :item="child" :is-nest="true"
        :base-path="resolvePath(child.path)" class="nest-menu" />
    </el-sub-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import path from 'path-browserify';
import { isExternal } from '@/utils/validate';
import AppLink from './Link.vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isNest: {
    type: Boolean,
    required: false,
  },
  basePath: {
    type: String,
    required: true,
  },
});

const onlyOneChild = ref();

function hasOneShowingChild(children = [] as any, parent: any) {
  if (!children) {
    children = [];
  }

  const showingChildren = children.filter((item: any) => {
    if (item.meta && item.meta.hidden) {
      return false;
    } else {
      // Temp set(will be used if only has one showing child)
      onlyOneChild.value = item;
      return true;
    }
  });

  // When there is only one child router, the child router is displayed by default
  if (showingChildren.length === 1) {
    return true;
  }

  // Show parent if there are no child router to display
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true };
    return true;
  }

  return false;
}

function resolvePath(routePath: string) {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
}
</script>

<style lang="scss" scoped>
</style>
```

`src/layout/components/TagsView/index.vue`

```vue
<template>
  <div class="tags-view__container">
    <scroll-pane ref="scrollPaneRef" class="tags-view__wrapper" @scroll="handleScroll">
      <router-link v-for="tag in visitedViews" :key="tag.path" :data-path="tag.path"
        :class="isActive(tag) ? 'active' : ''" :to="{ path: tag.path, query: tag.query }" class="tags-view__item"
        @click.middle="!isAffix(tag) ? closeSelectedTag(tag) : ''" @contextmenu.prevent="openMenu(tag, $event)">
        {{ tag.meta.title }}
        <span v-if="!isAffix(tag)" class="icon-close" @click.prevent.stop="closeSelectedTag(tag)">
          <svg-icon icon-class="close" />
        </span>
      </router-link>
    </scroll-pane>
    <ul v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="tags-view__menu">
      <li @click="refreshSelectedTag(selectedTag)">
        刷新
      </li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">
        关闭
      </li>
      <li @click="closeOtherTags">
        关闭其它
      </li>
      <li v-if="!isFirstView()" @click="closeLeftTags">
        关闭左侧
      </li>
      <li v-if="!isLastView()" @click="closeRightTags">
        关闭右侧
      </li>
      <li @click="closeAllTags(selectedTag)">
        关闭所有
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  getCurrentInstance,
  nextTick,
  ref,
  watch,
  onMounted,
  ComponentInternalInstance,
} from 'vue';

import path from 'path-browserify';

import { useRoute, useRouter } from 'vue-router';
import { TagView } from '@/types/store/tagsview';

import ScrollPane from './ScrollPane.vue';
import useStore from '@/store';

const { tagsView, permission } = useStore();

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const router = useRouter();
const route = useRoute();

const visitedViews = computed<any>(() => tagsView.visitedViews);
const routes = computed<any>(() => permission.routes);

const affixTags = ref([]);
const visible = ref(false);
const selectedTag = ref({});
const scrollPaneRef = ref();
const left = ref(0);
const top = ref(0);

watch(
  route,
  () => {
    addTags();
    moveToCurrentTag();
  },
  {
    //初始化立即执行
    immediate: true,
  }
);

watch(visible, (value) => {
  if (value) {
    document.body.addEventListener('click', closeMenu);
  } else {
    document.body.removeEventListener('click', closeMenu);
  }
});

function filterAffixTags(routes: any[], basePath = '/') {
  let tags: TagView[] = [];

  routes.forEach((route) => {
    if (route.meta && route.meta.affix) {
      const tagPath = path.resolve(basePath, route.path);
      tags.push({
        fullPath: tagPath,
        path: tagPath,
        name: route.name,
        meta: { ...route.meta },
      });
    }

    if (route.children) {
      const childTags = filterAffixTags(route.children, route.path);
      if (childTags.length >= 1) {
        tags = tags.concat(childTags);
      }
    }
  });
  return tags;
}

function initTags() {
  const res = filterAffixTags(routes.value) as [];
  affixTags.value = res;
  for (const tag of res) {
    // Must have tag name
    if ((tag as TagView).name) {
      tagsView.addVisitedView(tag);
    }
  }
}

function addTags() {
  if (route.name) {
    tagsView.addView(route);
  }
}

function moveToCurrentTag() {
  nextTick(() => {
    for (const r of visitedViews.value) {
      if (r.path === route.path) {
        scrollPaneRef.value.moveToTarget(r);
        // when query is different then update
        if (r.fullPath !== route.fullPath) {
          tagsView.updateVisitedView(route);
        }
      }
    }
  });
}

function isActive(tag: TagView) {
  return tag.path === route.path;
}

function isAffix(tag: TagView) {
  return tag.meta && tag.meta.affix;
}

function isFirstView() {
  try {
    return (
      (selectedTag.value as TagView).fullPath ===
      visitedViews.value[1].fullPath ||
      (selectedTag.value as TagView).fullPath === '/index'
    );
  } catch (err) {
    return false;
  }
}

function isLastView() {
  try {
    return (
      (selectedTag.value as TagView).fullPath ===
      visitedViews.value[visitedViews.value.length - 1].fullPath
    );
  } catch (err) {
    return false;
  }
}

function refreshSelectedTag(view: TagView) {
  tagsView.delCachedView(view);
  const { fullPath } = view;
  nextTick(() => {
    router.replace({ path: '/redirect' + fullPath }).catch((err) => {
      console.warn(err);
    });
  });
}

function toLastView(visitedViews: TagView[], view?: any) {
  const latestView = visitedViews.slice(-1)[0];
  if (latestView && latestView.fullPath) {
    router.push(latestView.fullPath);
  } else {
    // now the default is to redirect to the home page if there is no tags-view,
    // you can adjust it according to your needs.
    if (view.name === 'Dashboard') {
      // to reload home page
      router.replace({ path: '/redirect' + view.fullPath });
    } else {
      router.push('/');
    }
  }
}

function closeSelectedTag(view: TagView) {
  tagsView.delView(view).then((res: any) => {
    if (isActive(view)) {
      toLastView(res.visitedViews, view);
    }
  });
}

function closeLeftTags() {
  tagsView.delLeftViews(selectedTag.value).then((res: any) => {
    if (
      !res.visitedViews.find((item: any) => item.fullPath === route.fullPath)
    ) {
      toLastView(res.visitedViews);
    }
  });
}
function closeRightTags() {
  tagsView.delRightViews(selectedTag.value).then((res: any) => {
    if (
      !res.visitedViews.find((item: any) => item.fullPath === route.fullPath)
    ) {
      toLastView(res.visitedViews);
    }
  });
}

function closeOtherTags() {
  router.push(selectedTag.value);
  tagsView.delOtherViews(selectedTag.value).then(() => {
    moveToCurrentTag();
  });
}

function closeAllTags(view: TagView) {
  tagsView.delAllViews().then((res: any) => {
    toLastView(res.visitedViews, view);
  });
}

function openMenu(tag: TagView, e: MouseEvent) {
  const menuMinWidth = 105;
  const offsetLeft = proxy?.$el.getBoundingClientRect().left; // container margin left
  const offsetWidth = proxy?.$el.offsetWidth; // container width
  const maxLeft = offsetWidth - menuMinWidth; // left boundary
  const l = e.clientX - offsetLeft + 15; // 15: margin right

  if (l > maxLeft) {
    left.value = maxLeft;
  } else {
    left.value = l;
  }

  top.value = e.clientY;
  visible.value = true;
  selectedTag.value = tag;
}

function closeMenu() {
  visible.value = false;
}

function handleScroll() {
  closeMenu();
}

onMounted(() => {
  initTags();
});
</script>

<style lang="scss" scoped>
.tags-view__container {
  height: 34px;
  width: 100%;
  background: $dark_main_color;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);

  .tags-view__wrapper {
    .tags-view__item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: $dark_main_color;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;

      &:first-of-type {
        margin-left: 15px;
      }

      &:last-of-type {
        margin-right: 15px;
      }

      &:hover {
        color: var(--el-color-primary);
      }

      &.active {
        background-color: var(--el-color-primary);
        color: var(--el-color-primary-light-9);
        border-color: var(--el-color-primary);

        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 5px;
        }
      }

      .icon-close {
        border-radius: 50%;
        text-align: center;

        &:hover {
          background-color: #ccc;
          color: #fff;
        }
      }
    }
  }

  .tags-view__menu {
    margin: 0;
    background: $dark_main_color;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    // color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);

    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;

      &:hover {
        background: rgb(77, 156, 130);
      }
    }
  }
}
</style>
```

`src/layout/components/TagsView/ScrollPane.vue`

```vue
<template>
  <el-scrollbar
    ref="scrollContainer"
    :vertical="false"
    class="scroll-container"
    @wheel.prevent="handleScroll"
  >
    <slot />
  </el-scrollbar>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
} from 'vue';
import { TagView } from '@/types/store/tagsview';
import useStore from '@/store';

const tagAndTagSpacing = ref(4);
const { proxy } = getCurrentInstance() as any;

const emits = defineEmits(['scroll']);
const emitScroll = () => {
  emits('scroll');
};

const { tagsView } = useStore();

const visitedViews = computed(() => tagsView.visitedViews);

const scrollWrapper = computed(() => proxy?.$refs.scrollContainer.$refs.wrap$);

onMounted(() => {
  scrollWrapper.value.addEventListener('scroll', emitScroll, true);
});
onBeforeUnmount(() => {
  scrollWrapper.value.removeEventListener('scroll', emitScroll);
});

function handleScroll(e: WheelEvent) {
  const eventDelta = (e as any).wheelDelta || -e.deltaY * 40;
  scrollWrapper.value.scrollLeft =
    scrollWrapper.value.scrollLeft + eventDelta / 4;
}

function moveToTarget(currentTag: TagView) {
  const $container = proxy.$refs.scrollContainer.$el;
  const $containerWidth = $container.offsetWidth;
  const $scrollWrapper = scrollWrapper.value;

  let firstTag = null;
  let lastTag = null;

  // find first tag and last tag
  if (visitedViews.value.length > 0) {
    firstTag = visitedViews.value[0];
    lastTag = visitedViews.value[visitedViews.value.length - 1];
  }

  if (firstTag === currentTag) {
    $scrollWrapper.scrollLeft = 0;
  } else if (lastTag === currentTag) {
    $scrollWrapper.scrollLeft = $scrollWrapper.scrollWidth - $containerWidth;
  } else {
    const tagListDom = document.getElementsByClassName('tags-view__item');
    const currentIndex = visitedViews.value.findIndex(
      (item) => item === currentTag
    );
    let prevTag = null;
    let nextTag = null;
    for (const k in tagListDom) {
      if (k !== 'length' && Object.hasOwnProperty.call(tagListDom, k)) {
        if (
          (tagListDom[k] as any).dataset.path ===
          visitedViews.value[currentIndex - 1].path
        ) {
          prevTag = tagListDom[k];
        }
        if (
          (tagListDom[k] as any).dataset.path ===
          visitedViews.value[currentIndex + 1].path
        ) {
          nextTag = tagListDom[k];
        }
      }
    }

    // the tag's offsetLeft after of nextTag
    const afterNextTagOffsetLeft =
      (nextTag as any).offsetLeft +
      (nextTag as any).offsetWidth +
      tagAndTagSpacing.value;

    // the tag's offsetLeft before of prevTag
    const beforePrevTagOffsetLeft =
      (prevTag as any).offsetLeft - tagAndTagSpacing.value;
    if (afterNextTagOffsetLeft > $scrollWrapper.scrollLeft + $containerWidth) {
      $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth;
    } else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) {
      $scrollWrapper.scrollLeft = beforePrevTagOffsetLeft;
    }
  }
}

defineExpose({
  moveToTarget,
});
</script>

<style lang="scss" scoped>
.scroll-container {
  .el-scrollbar__bar {
    bottom: 0px;
  }

  .el-scrollbar__wrap {
    height: 49px;
  }
}

.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
}
</style>
```



------

## 按钮权限

### 自定义指令 - 按钮权限

`src/directive/permission/index.ts`

```ts
import useStore from '@/store';
import { Directive, DirectiveBinding } from 'vue';

// 自定义权限指令`v-hasPerm` `v-hasRole`

/**
 * 按钮权限校验
 * array :  v-hasPerm="['sys:user:add','sys:user:edit']"
 * single : v-hasPerm="'sys:user:add'"
 */
export const hasPerm: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { user } = useStore();
    const { value } = binding;

    // 当前路由
    const currentRouteUrl = window.location.hash.replace('#/', '')
    console.log('当前路由：', currentRouteUrl)
    const btnPermList = getBtnPermList(currentRouteUrl, user.permissionTreeList, [])
    console.log('拥有的按钮权限：', btnPermList);
    if (value) {
      // DOM绑定需要的按钮权限标识
      const requiredPerms = value instanceof Array ? value : [value];
      console.log('需要的按钮权限：', requiredPerms);
      const hasPerm = btnPermList.some(btnPerm => {
        return requiredPerms.includes(btnPerm);
      });
      if (!hasPerm) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(
        "need perms! Like v-has-perm=\"['sys:user:add','sys:user:edit']\""
      );
    }
  },
};


/**
 * 获取当前路由下的按钮权限
 * @param currentRouteUrl 当前路由url ex: system/user/index
 * @param permissionTreeList 权限菜单树
 * @param btnPermList 按钮权限
 * @returns 按钮权限
 */
function getBtnPermList(currentRouteUrl: string, permissionTreeList: any, btnPermList: Array<string>): Array<string> {
  if (permissionTreeList) {
    permissionTreeList.forEach((e: {
      meta: any;
      component: string;
      children: any;
    }) => {
      if (e.component === currentRouteUrl || e.component === currentRouteUrl + '/index') {
        e.meta.btnPermList.forEach((btnPerm: string) => {
          btnPermList.push(btnPerm)
        })
      }
      const childList = e.children
      if (childList) {
        getBtnPermList(currentRouteUrl, childList, btnPermList)
      } else {
        return btnPermList
      }
    });
  }
  return btnPermList
}

/**
 * 角色权限校验
 */
export const hasRole: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;
    if (value) {
      // DOM绑定需要的角色编码
      const requiredRoles = value;
      const { user } = useStore();
      const hasRole = user.roleNames.some((perm) => {
        return requiredRoles.includes(perm);
      });
      if (!hasRole) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error("need roles! Like v-has-role=\"['admin','test']\"");
    }
  },
};
```

`src/directive/index.ts`

```ts
export { hasPerm, hasRole } from './permission';
```

### 注册自定义指令

`main.ts`

```ts
// 自定义指令(按钮权限)
import * as directive from '@/directive';
Object.keys(directive).forEach((key) => {
  app.directive(key, (directive as { [key: string]: Directive })[key]);
});
```

### 页面使用demo

```vue
<el-button v-hasPerm="'add'" type="primary" @click="handleCreate">添加</el-button>
```



------



## debug调试

### 方式一：`debugger`

1. 代码中添加`debugger`
2. 浏览器`F12` 即可进入调试

```js
methods: {
    async refreshTableData() {
      debugger
      this.$refs.baseTable.refresh()
    }
}
```

### 方式二：vscode

![](https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/images/20240305180250.png)

`launch.json`

> 有个这个文件后，可直接在vscode中F5打开当前服务

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "pwa-chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://127.0.0.1:5173",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

### 方式三：谷歌插件`Vue.js devtools`

> https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg

![](https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/images/20240305180319.png)

### 方式四：浏览器F12 -> 源代码中直接debug

![](https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/images/20240305180413.png)