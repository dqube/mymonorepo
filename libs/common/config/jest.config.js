module.exports = {
  name: 'common-config',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/config',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
