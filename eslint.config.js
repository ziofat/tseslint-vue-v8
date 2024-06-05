import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import vueeslint from 'eslint-plugin-vue';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...vueeslint.configs['flat/recommended'],
    {
        plugins: {
            'typescript-eslint': tseslint.plugin,
        },
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                project: true,
                tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
                extraFileExtensions: ['.vue'],
            },
        },
    }
);

