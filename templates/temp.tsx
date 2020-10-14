import { Vue } from 'vue-class-component'
import './<%= projectName %>.scss'

export default class <%= projectName %> extends Vue {

    message = 'Hello World!'
    data() {
        return {
            message: 'Hello World!'
        }  
    }

    render() {
        return <div class="<%= projectName %>">{this.message}</div>;
    }
}