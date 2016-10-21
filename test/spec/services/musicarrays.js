'use strict';

describe('Service: musicArrays', function () {

  // load the service's module
  beforeEach(module('newGuitarV2App'));

  // instantiate service
  var musicArrays;
  beforeEach(inject(function (_musicArrays_) {
    musicArrays = _musicArrays_;
  }));

  it('should do something', function () {
    expect(!!musicArrays).toBe(true);
  });

});
