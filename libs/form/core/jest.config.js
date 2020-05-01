module.exports = {
  name: 'form-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/form/core',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
