(function () {
    
    'use strict';
    /*jslint devel: true */
    /*global document: false */
    
    var Person = function (name) {
        this.name = name;
    },
        bill = new Person('Bill'),
        greeting = document.getElementById('greeting');
    
    Person.prototype.sayHello = function () {
        if (greeting) {
            greeting.innerHTML = 'How\'s it hangin\', ' + this.name + '?';
        }
    };
    
    bill.sayHello();
    
}());