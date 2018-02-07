const env = process.env.NODE_ENV;

const buildIgnore = [
  '*.jest.js',
  '*.e2e.js',
  '*.ssr.js',
  '*.example.js',
  'source/demo',
  'source/jest-*.js',
  'source/TestUtils.js',
];

const config = {
  plugins: [],
  presets: ['react', 'flow', 'stage-1'],
};

if (env === 'commonjs') {
  config.ignore = buildIgnore;
  config.plugins.push(
    'transform-runtime',
    ['flow-react-proptypes', {deadCode: true}],
    ['transform-react-remove-prop-types', {mode: 'wrap'}],
  );
  config.presets.unshift('env');
}

if (env === 'es') {
  config.ignore = buildIgnore;
  config.plugins.push(
    'transform-runtime',
    ['flow-react-proptypes', {deadCode: true}],
    ['transform-react-remove-prop-types', {mode: 'wrap'}],
  );
  config.presets.unshift(['env', {modules: false}]);
}

if (env === 'test') {
  config.plugins.push('transform-es2015-modules-commonjs');
}

if (env === 'production') {
  config.plugins.push('transform-runtime');
  config.presets.unshift(['env', {modules: false}]);
}

module.exports = config;
