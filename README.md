# Vue 3 + TypeScript + Vite+ Element Plus +sass

element-plus 自动导入
pnpm i element-plus
首先按照插件：
pnpm install -D unplugin-vue-components unplugin-auto-import

导入：
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'


配置：
plugins{
AutoImport({resolvers:[ElementPlusResolver()]}),
Components({resolvers:[ElementPlusResolver()]})

element plus 图标的使用
安装：
pnpm install @element-plus/icons-vue

main.ts 里注册：
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app=createApp(App)
for(const [key,component] of Object.entries(ElementPlusIconsVue)){
app.component(key,component)
}


安装路由：
pnpm install vue-router@4