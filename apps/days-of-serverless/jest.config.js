module.exports = {
  name: 'days-of-serverless',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/days-of-serverless',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
