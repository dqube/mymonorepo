module.exports = {
  name: 'common-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/core',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
