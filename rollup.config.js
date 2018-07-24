import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
    input: 'main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        vue(),
        serve(),
        resolve(),
        livereload(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.VUE_ENV': JSON.stringify('browser')
        })
    ],
    watch: {}
};