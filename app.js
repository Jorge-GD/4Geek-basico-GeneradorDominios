window.onload = function () {
    console.log("Hello Rigo from the console!");

    DomainNameGenerator();
    document.querySelector("#boton").addEventListener("click", () => {
        document.querySelector("#Excusa").innerHTML = RandomDomainNameGenerator()
    });



};


const pronoun = ["the", "our"];
const adj = ["great", "big", "Asleep", "Beautiful"];
const noun = ["jogger", "racoon", "us", "gamora", "dog", "bird"];
const dot = [".es", ".us", ".com", ".pep", ".io"];


function DomainNameGenerator() {

    let dotica = "";
    let nounico = "";

    for (let prona = 0; prona < pronoun.length; prona++) {
        for (let prone = 0; prone < adj.length; prone++) {
            for (let proni = 0; proni < noun.length; proni++) {
                for (let prono = 0; prono < dot.length; prono++) {
                    dotica = dot[prono].split('.');


                    if (dotica[1] === dot[prono]) {
                        console.log(pronoun[prona] + adj[prone] + dot[prono]);

                    }
                    else {

                        console.log(pronoun[prona].concat(adj[prone], noun[proni], dot[prono]));

                    }




                }
            }
        }
    }
}

function RandomDomainNameGenerator() {


    let dominito = [
        pronoun[Math.floor(Math.random() * pronoun.length)],
        adj[Math.floor(Math.random() * adj.length)],
        noun[Math.floor(Math.random() * noun.length)],
        dot[Math.floor(Math.random() * dot.length)]
    ];

    return dominito.reduce((acc, item) => {
        return (acc + item);
    });
}