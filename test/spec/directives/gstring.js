'use strict';

describe('Directive: gString', function () {

  // load the directive's module
  beforeEach(module('newGuitarV2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<g-string></g-string>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the gString directive');
  }));
});
