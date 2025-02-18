import './index.css';
import 'vue-datepicker-next/index.css';
import { createApp } from 'vue';
import { DatePickerPlugin } from '../../../packages/refine-vue/src/package';
import DatePicker from 'vue-datepicker-next';
import App from './App.vue';

const app = createApp(App);
app.use(DatePickerPlugin, { DatePicker });
app.mount('#app');
