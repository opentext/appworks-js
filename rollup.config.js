import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'src/appworks.ts',
    moduleName: "Appworks",
    plugins: plugins(),
    external: null,
    targets: [
        {
            dest: dest(),
            format: 'iife',
            sourceMap: true
        }
    ]
};

function dest() {
    let pkg = require('./package.json');
    if (process.env.BUILD == 'min') {
        return pkg['main:min'];
    } else {
        return pkg['main'];
    }
}

function plugins() {
    // as we are using a different version of Typescript to the one supplied by rollup we need to require it here
    let use = [typescript({
        typescript: require('typescript')
    })];
    if (process.env.BUILD === 'min') {
        use.push(uglify());
    }
    return use;
}
