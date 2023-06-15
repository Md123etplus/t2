let score = JSON.parse(localStorage.getItem('score'))||{
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if (!score ){
score={
  wins: 0,
  losses: 0,
  ties: 0
};*/

function pickcomputermove(){
   const Rn=Math.random();
   let computerMove= '';
   if(Rn>=0 && Rn<1/3){
   computerMove='Rock'; 
   }else if(Rn>=1/3 && Rn<2/3){
 computerMove='Paper';
 } else if(Rn>=2/3 && Rn<1){
 computerMove='Scissors';
 };
 return computerMove;
};
function playgame(playermove){
      const computerMove = pickcomputermove();
     let result='';
     if(playermove==='Scissors'){
      if(computerMove==='Rock'){
        result='You lose.';
       }else if(computerMove==='Paper'){
         result='You won.';
        }else if(computerMove==='Scissors'){
         result='Tie.';
        };

      } else if(playermove==='Paper'){
          if(computerMove==='Rock'){
            result='You won.';
          }else if(computerMove==='Paper'){
            result='Tie.';
          }else if(computerMove==='Scissors'){
            result='You lose.';
          }

      }else if( playermove ==='Rock'){
        if(computerMove==='Rock'){
          result='Tie.';
        }else if(computerMove==='Paper'){
          result='You lose.';
        }else if(computerMove==='Scissors'){
          result='You won.';
        }

      };
      if(result==='You won.'){
        score.wins+=1;
      }else if( result==='You lose.'){
        score.losses+=1;
      }else if(result==='Tie.'){
        score.ties+=1;
      };
    
      localStorage.setItem('score',JSON.stringify(score));
      updateScoreElement();

      document.querySelector('.js-result')
        .innerHTML= result;

        document.querySelector('.js-moves')
        .innerHTML=` You
              <img src="images/${playermove}-emoji.png" class="move-icon">
              <img src="images/${computerMove}-emoji.png" class="move-icon">
               Computer`;

    };
    function updateScoreElement(){
      document.querySelector('.js-score')
.innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

    };