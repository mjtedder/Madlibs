var inquirer = require("inquirer");

function MadLib(nouns, adjectives, verbs) {
    this.nouns = nouns;
    this.adjectives = adjectives;
    this.verbs = verbs;
    this.story = "Once upon a [noun] there was a [adjective] village filled with [noun].  The villagers loved to [verb] all day long.";
}

var nouns = [];
var adjectives = [];
var verbs = [];
var loop = 0;

var getWords = function (loop) {
    console.log(loop);
    if (loop < 2) {
        inquirer.prompt({
            name: "noun",
            message: "Enter a noun: "
        }).then(function (answers) {
            nouns.push(answers.noun);
            loop++;
            getWords(loop);
        })
    }
    if (loop >= 2 && loop < 3) {
        inquirer.prompt({
            name: "adjective",
            message: "Enter an adjective: "
        }).then(function (answers) {
            adjectives.push(answers.adjective);
            loop++;
            getWords(loop);
        })
    }
    if (loop >= 3 && loop < 4) {
        inquirer.prompt({
            name: "verb",
            message: "Enter a verb: "
        }).then(function (answers) {
            verbs.push(answers.verb);
            var madLib = new MadLib(nouns, adjectives, verbs);
            console.log(madLib);
        })
    }
}
getWords(loop);