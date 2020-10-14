# vue-next-components-cli
> 环境 node v12.18.4   vue-class-component@8.0.0-beta.4  

安装 `npm install vue-next-components-cli --save-dev`

使用 `vue-next-components-cli`

```shell
$ vue-next-components-cli
? Your components name? Test
? The path you are about to create? /src/components
```

**项目结构**  
|- components  
|---- Test  
|------- Test.tsx  
|------- Test.scss   

```javascript
// test.tsx
import { Vue } from 'vue-class-component'
import './Test.scss'

export default class Test extends Vue {

    message = 'Hello World!'
    data() {
        return {
            message: 'Hello World!'
        }  
    }

    render() {
        return <div class="Test">{this.message}</div>;
    }
}
```

```scss
// test.scss
.Test{
    
}
```