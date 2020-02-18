'use strict';
class User {
    constructor(name,surname) {
        this.name = name;
        this.surname = surname;
    };
    getFullName() {
        return `${this.name} ${this.surname}`;
    };
};

class Student extends User {
    constructor(name,surname, year) {
        super(name,surname);
        this.year = year;
    }
    getCourse(nowYear) {
        return nowYear - this.year;
    }
}
let student = new Student('Dmitry', 'Nikulnikov', 2015);

console.log(student.getFullName());

console.log(student.getCourse(2020));


class Clock {
    constructor({template}) {
        this.template = template;
    }
    render() {
        let date = new Date();
    
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
    
        console.log(output);
      }
      stop() {
        clearInterval(this.timer);
      };
      start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
      };
};

let clock = new Clock({template: 'h:m:s'});
clock.start();

