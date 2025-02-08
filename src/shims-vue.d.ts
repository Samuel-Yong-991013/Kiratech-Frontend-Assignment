//This file is so that TypeScript knows how to handle single-file components '.vue'
// Prior to creating this, I also ran "npm install --save-dev vue-tsc @vue/runtime-core"
// -Sam

declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  