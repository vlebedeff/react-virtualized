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

if (env === 'commonjs') {
  module.exports = {
    ignore: buildIgnore,
    plugins: [
      'transform-runtime',
      ['flow-react-proptypes', {deadCode: true}],
      ['transform-react-remove-prop-types', {mode: 'wrap'}],
    ],
    presets: ['env', 'react', 'flow', 'stage-1'],
  };
}

if (env === 'es') {
  module.exports = {
    ignore: buildIgnore,
    plugins: [
      'transform-runtime',
      ['flow-react-proptypes', {deadCode: true}],
      ['transform-react-remove-prop-types', {mode: 'wrap'}],
    ],
    presets: [['env', {modules: false}], 'react', 'flow', 'stage-1'],
  };
}

if (env === 'rollup') {
  module.exports = {
    comments: false,
    plugins: ['external-helpers'],
    presets: [['env', {modules: false}], 'react', 'flow', 'stage-1'],
  };
}

if (env === 'test') {
  module.exports = {
    comments: false,
    presets: ['env', 'react', 'flow', 'stage-1'],
  };
}

if (env === 'development') {
  module.exports = {
    plugins: [
      [
        'react-transform',
        {
          transforms: [
            {
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module'],
            },
            {
              transform: 'react-transform-catch-errors',
              imports: ['react', 'redbox-react'],
            },
          ],
        },
      ],
    ],
    presets: ['env', 'react', 'flow', 'stage-1'],
  };
}

if (env === 'production') {
  module.exports = {
    comments: false,
    plugins: ['transform-runtime'],
    presets: [['env', {modules: false}], 'react', 'flow', 'stage-1'],
  };
}
