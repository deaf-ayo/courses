(function(global, $) {

  let Greetr = (firstName, lastName, language) => new Greetr.init(firstName, lastName, language);

  Greetr.prototype = {};

  Greetr.init = function(firstName = '', lastName = '', language = 'en') {
    let self = this;
    self.firstName = firstName;
    self.lastName = lastName;
    self.language = language;
  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

})(window, jQuery);