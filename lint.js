import { ESLint } from 'eslint';

const eslint = new ESLint();
const result = await eslint.lintFiles('test.vue');
console.log(result[0].messages);
