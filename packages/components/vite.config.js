import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/rollup'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), DefineOptions(),
  dts({
    //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
    tsConfigFilePath: '../../tsconfig.json'
  }),
  //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
  dts({
    outputDir: 'dist/lib',
    tsConfigFilePath: '../../tsconfig.json'
  })
  ],
  build: {
    target: 'modules',
    //打包文件目录
    outDir: "dist/es",
    //压缩
    minify: false,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: ['index.js'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'dist/es',
          preserveModulesRoot: 'src'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'dist/lib',
          preserveModulesRoot: 'src'
        }
      ]
    },
    lib: {
      entry: 'index.ts',
      formats: ['es', 'cjs']
    }
  },
})
