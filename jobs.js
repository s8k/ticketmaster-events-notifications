var schedule = require('node-schedule');

// Main notifications sender job
var rule = new schedule.RecurrenceRule();
rule.minute = 2;

var j = schedule.scheduleJob(rule, function () {
    console.log('The answer to life, the universe, and everything!');
});


module.exports = j;