$(function(){
    if(Home===true) { setUser(); }
    else {
        let userChoice;
        let cpuChoice;
        let cptUser = 0;
        let cptCpu = 0;
        let winningGames = 5;
        const choices = document.querySelectorAll(".userChoice");
        console.log(choices);

        // variable pour déclarer le choix du personnage, le récuperer du local storage et l'intégrer dans la page games.html
        var persoUserImg = localStorage.getItem('persoUserImg');

        if(!persoUserImg || persoUserImg==null || persoUserImg=='') {
        $('#persoUser').attr('src', 'assets/img/leonard-removebg-preview.png');
        
        }
        else {
        $('#persoUser').attr('src', 'assets/img/'+persoUserImg+'-removebg-preview.png');
        
        }
        
        // variable pour déclarer le pseudo, le récupérer du local storage(et/ou mettre un pseudo par défaut) et le mettre dans la page games.html
        var pseudoUser = localStorage.getItem('persoPseudo');
       
        if(!pseudoUser || pseudoUser==null || pseudoUser=='') {
        $('#userName').text('Player');
        }
        else {
        $('#userName').text(pseudoUser);
        }





        //Modal games
        $('#instruction').click(function(){
            $('#cookiesModal').toggle();
        })
        $('#closeModal').click(function() {
            $('#cookiesModal').hide();
        })
        //fin modal games

        // mise en place de la fonction drag and drop
        $('.userChoice').draggable({ revert: "valid",  revert: true });
        $('.userChoice').on('dragstart', function (event) {
            userChoice = $(this).attr('id');
            $("#choiceCpu").html('');
            $("#choiceUser").html('');
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

        // Début des déclarations et la mise en place de la fonction pour le fight
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
                cptUser++;
                $('#scoreUser').html(cptUser);
                Winner();
            }
            else {
                cptCpu++;
                $('#scoreCpu').html(cptCpu);
                Winner();
            }
            

        }
            
        function Winner() {
            if((cptUser==winningGames)||(cptCpu==winningGames))
            {
                if(cptUser==winningGames) { 
                    $('#modalWin').show();
                    $('header').hide();
                    $('#main').hide();
                }
                else {
                    $('#modalLose').show();
                    $('header').hide();
                    $('#main').hide();
                    
                }
            }
        }


        
    }

    // Pour pouvoir choisir son personnage et son pseudo et l'envoyer sur une autre page grâce au local storage, c'est à dire un cookie

    function setUser() {
        localStorage.setItem('persoUserImg','');
        localStorage.setItem('persoPseudo','');

        $('.persoUser').click(function() {
            localStorage.setItem('persoUserImg',$(this).attr('id'));
            $('.persoUser').css('border-bottom', '0px solid yellow');
            $(this).css('border-bottom', '5px solid yellow');
            
        });
        

        $('#start').click(function() {
            localStorage.setItem('persoPseudo',$("#pseudoInput").val());
        });
    }

});