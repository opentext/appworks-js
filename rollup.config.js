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
    let use = [typescript()];
    if (process.env.BUILD === 'min') {
        use.push(uglify());
    }
    return use;
}
