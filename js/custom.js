// Event Listeners function for changing player names

function nameChange_p1()
{
  window["p1_name"] = prompt("Enter the name of PLAYER 1 :");
  var p1_name_obj = document.querySelector(".player1 > .player-name");
  p1_name_obj.textContent = window["p1_name"];
}

function nameChange_p2()
{
  window["p2_name"] = prompt("Enter the name of PLAYER 2 :");
  var p2_name_obj = document.querySelector(".player2 > .player-name");
  p2_name_obj.textContent = window["p2_name"];
}

// Adding Event Listeners to Player Names, so that on click, player names can be changed
document.querySelector(".player1 > .player-name").addEventListener("click",nameChange_p1);
document.querySelector(".player2 > .player-name").addEventListener("click",nameChange_p2);


// Function to roll dice
function roll_dice()
{
  var p1_val, p2_val;
  p1_val = Math.floor( Math.random() * 6 ) + 1;
  p2_val = Math.floor( Math.random() * 6 ) + 1;

  var p1_dice_class, p2_dice_class;
  p1_dice_class = `dice${p1_val}`;
  p2_dice_class = `dice${p2_val}`;

  var p1_obj, p2_obj;
  p1_obj = document.getElementsByClassName(p1_dice_class)[0];
  p2_obj = document.getElementsByClassName(p2_dice_class)[1];

  p1_obj.classList.add("visible");
  p2_obj.classList.add("visible");

  var head_obj, win_msg;
  if( p1_val > p2_val )
  {
    if( window["p1_name"] === undefined )
      {win_msg = `🚩 Player 1 WINS!`;}
    else
      {win_msg = `🚩 ${window["p1_name"]} WINS!`;}
  }
  else if( p1_val < p2_val )
  {
    if( window["p2_name"] === undefined )
      {win_msg = `Player 2 WINS! 🚩`;}
    else
      {win_msg = `${window["p2_name"]} WINS! 🚩`;}
  }
  else
  {
    win_msg = `🎌 It's a TIE ! 🎌`
  }
  head_obj = document.querySelector("h1");
  head_obj.textContent = win_msg;

  var btn_obj = document.querySelector("button");
  btn_obj.textContent = "Play Again !"
  btn_obj.setAttribute("onclick","reset_game()");

}

// Function to reset the game
function reset_game()
{
  var cls_name, dice_obj_list;
  for(i=1;i<=6;i++)
  {
    cls_name = `dice${i}`;
    dice_obj_list = document.getElementsByClassName(cls_name);
    dice_obj_list[0].classList.remove("visible");
    dice_obj_list[1].classList.remove("visible");
  }

  var head_obj = document.querySelector("h1");
  head_obj.textContent = "Roll the Dice ! Let's See Who Wins !";

  var btn_obj = document.querySelector("button");
  btn_obj.textContent = "Roll";
  btn_obj.setAttribute("onclick","roll_dice()");
}
