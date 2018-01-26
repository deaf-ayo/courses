(function(global, $) {

  let Greetr = (firstName, lastName, language) => new Greetr.init(firstName, lastName, language);

  let supportedLangs = ['en', 'es'];

  let greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  let formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  let logMessage = {
    en: 'Logged in',
    es: 'Inicio sesion'
  }

  Greetr.prototype = {
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },
    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid language';
      }
    },
    greeting: function() {
      return `${greetings[this.language]} ${this.firstName}!`;
    },
    formalGreeting: function() {
      return `${formalGreetings[this.language]}, ${this.fullName()}.`
    },
    greet: function(formal) {
       let msg;
       // if undefined or null, coerce to 'false'
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }
      // 'this' refers to the calling object at execution time and makes the method chainable
      return this;
    },
    log: function() {
      if (console) {
        console.log(`${logMessage[this.language]}: ${this.fullName()}`);
      }
      return this;
    },
    setLang: function(lang) {
      this.language = lang;
      this.validate();
      return this;
    }
  };

  Greetr.init = function(firstName = '', lastName = '', language = 'en') {
    let self = this;
    self.firstName = firstName;
    self.lastName = lastName;
    self.language = language;
  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

})(window, jQuery);