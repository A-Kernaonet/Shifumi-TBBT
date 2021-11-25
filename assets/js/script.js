$(function(){
    let userChoice;
    let cpuChoice;
    const choices = document.querySelectorAll(".userChoice");
    console.log(choices);
    //Modal games
    $('#instruction').click(function(){
        $('#cookiesModal').toggle();
    })
    $('#closeModal').click(function() {
        $('#cookiesModal').hide();
    })
    //fin modal games

 


    // $('#scissors').draggable({ revert: "invalid" });
    // $('#rock').draggable({ revert: "invalid" });
    // $('#paper').draggable({ revert: "invalid" });
    // $('#lizard').draggable({ revert: "invalid" });
    // $('#spock').draggable({ revert: "invalid" });
    $('.userChoice').draggable({ revert: "valid" });
    $('.userChoice').on('dragstart', function (event) {
        userChoice = $(this).attr('id');
        $("#choiceCpu").html('');
    });  
    $('#choiceUser').droppable({
        drop: function(event, ui) {
            $(this).css('background', '#fcdc12');
            fight();
        },
        over: function(event, ui) {
            $(this).css('background', 'orange');
        },
        out: function(event, ui) {
            $(this).css('background', '#931a0d');
        },
        
    });

    function getUSERChoice() {
        // cpuChoice = choices[Math.floor(Math.random() * choices.length)].id;
        $("#choiceUser").html(`<img id="${userChoice}" class="image" src="assets/img/${userChoice}.png">`);
    }

    function getCPUChoice() {
        cpuChoice = choices[Math.floor(Math.random() * choices.length)].id;
        $("#choiceCpu").css('background', '#fcdc12').html(`<img id="${cpuChoice}" class="image" src="assets/img/${cpuChoice}.png">`);
    }

    function fight() {
        getUSERChoice()
        getCPUChoice();
        console.log(`userChoice = ${userChoice}`);
        console.log(`cpuChoice = ${cpuChoice}`);

        if (userChoice == cpuChoice) {
            console.log(`Egalité`);
        }
        else if (
                (userChoice == 'rock' && cpuChoice == 'lizard')
                || (userChoice == 'rock' && cpuChoice == 'scissors')
                || (userChoice == 'scissors' && cpuChoice === 'lizard')
                || (userChoice == 'scissors' && cpuChoice === 'paper')
                || (userChoice == 'paper' && cpuChoice === 'rock')
                || (userChoice == 'paper' && cpuChoice === 'spock')
                || (userChoice == 'lizard' && cpuChoice === 'spock')
                || (userChoice == 'lizard' && cpuChoice === 'paper')
                || (userChoice == 'spock' && cpuChoice === 'scissors')
                || (userChoice == 'spock' && cpuChoice === 'rock')    
            ){
                console.log(`Player wins`);
            }
        else {
            console.log(`CPU wins`);
        }

    }
    //Logique du jeu

    // for (let i = 0){

        // if (joueur === cpu)
        //     resultat = "vous avez gagné !";
        // else if (
        //     (joueur === '#rock' && cpu === '#lizard')
        //     || (joueur === '#rock' && cpu === '#scissors')
        //     || (joueur === '#scissors' && cpu === '#lizard')
        //     || (joueur === '#scissors' && cpu === '#paper')
        //     || (joueur === '#paper' && cpu === '#rock')
        //     || (joueur === '#paper' && cpu === '#spock')
        //     || (joueur === '#lizard' && cpu === '#spock')
        //     || (joueur === '#lizard' && cpu === '#paper')
        //     || (joueur === '#spock' && cpu === '#scissors')
        //     || (joueur === '#spock' && cpu === '#rock')    
        // )
        //     resultat = "Vous avez gagné !!";
        // else
        //     resultat = "Vous avez perdu !";
    // }

});