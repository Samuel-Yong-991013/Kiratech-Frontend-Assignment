//This file is so that TypeScript knows how to handle single-file components '.vue'
// Prior to creating this, I also ran "npm install --save-dev vue-tsc @vue/runtime-core"
// Without this, I'll get the "could not find a declaration file for module"
// -Sam

declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  