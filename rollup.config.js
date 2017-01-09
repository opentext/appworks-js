import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

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
    // this pair of plugins allow us to resolve non-relative imports (such as es6-promise) in our ts files
    use.push(nodeResolve({
        jsnext: true,
        main: true
    }));
    // map Promise to the physical es5 definition
    use.push(commonjs({
        include: 'node_modules/**',
        namedExports: {
            'node_modules/es6-promise/dist/es6-promise.js': ['Promise']
        }
    }));
    return use;
}
