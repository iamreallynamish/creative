alert("Welcome to the Password Game!");
alert("Here's how to play the game: \n 1st. Follow what the rules say. \n 2nd. Type in the password in the input. \n Don't worry! This game, It's easy!");
alert("Oh and one more thing!");
alert("Js remember to sing the periodic table song!");
alert("Lastly,");
alert("If you don't get the next rule or think the game code is broken, you might want to try a few more versions that could fit the current rules bcz your current password probably did not match with the game data.");
alert("NOW...");
alert("For the BIG Q!! ----->");
var play = confirm("Do you want to play?");
if (play == true) {
  var play2 = confirm("Are you sure?");
} else {
  window.history.back;
}
if (play2 == true) {
  var play3 = confirm("Are you supppperrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr sure?");
} else {
  window.history.back;
}
if (play3 == true) {
  var play4 = confirm("No, like you ready to be frustrated as hell?");
} else {
  window.history.back;
}
if (play4 == true) {
  alert("Great! Let's start typing!");
  document.getElementById("game").setAttribute("src", "password.js");
} else {
  window.history.back;
}
test();
function test() {
  var _0x5ad921 = document.getElementById("password").value;
  var _0x595d63 = _0x5ad921.match(/\d/g);
  if (_0x5ad921.length == '8') {
    document.getElementById('rule').innerHTML = "Rule 2. Password must contain '@' symbol at the 'mυiʜɈil' character";
    if (_0x5ad921.includes('@') && _0x5ad921.charAt(0x2) === '@') {
      document.getElementById("rule").innerHTML = "Rule 3. The 2nd character can be represented as magnessium equals equals";
      if (_0x5ad921.charAt(0x1) === '2') {
        document.getElementById("rule").innerHTML = "Rule 4. There are exactly 2 numbers in the password";
        if (_0x595d63 && _0x595d63.length === 0x2) {
          document.getElementById("rule").innerHTML = "Rule 5. The first character and last character are different yet both are related to Potassium. (U)";
          if (_0x5ad921.charAt(0x0) === 'K' && _0x5ad921.charAt(0x7) === 'P') {
            document.getElementById('rule').innerHTML = "Rule 6. (Clue for center characters) What's common in Sodium Hydroxide, Milk of Magnesia, Potash Lye and Caustic Lime?";
            if ((_0x5ad921.charAt(0x3) === 'o' || _0x5ad921.charAt(0x3) === 'O') && (_0x5ad921.charAt(0x4) === 'h' || _0x5ad921.charAt(0x4) === 'H')) {
              document.getElementById('rule').innerHTML = "Rule 7. The character matching the rule number is _ _ (l)";
              if (_0x5ad921.charAt(0x6) === 'm') {
                document.getElementById("rule").innerHTML = "Rule 8. The numbers have at least one character between them and are even consecutive numbers.";
                if (_0x5ad921.includes('4')) {
                  document.getElementById('rule').innerHTML = "Rule 9. The only vowel in the password is lowercase and there can only be two lowercase characters.";
                  if (_0x5ad921 == "K2@oH4mP") {
                    document.getElementById("rule").innerHTML = "Rule 10. Add a space after asciiofthirdcharequalstosixtyfour";
                    if (_0x5ad921 == "K2@ oH4mP") {
                      document.getElementById('rule').innerHTML = "Bonus - now type the number of r's (just after this password without any space) there were in the word 'super' when you were asked to play :) Ignore any errors that may come after this bonus q.";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else if (_0x5ad921 === "K2@ oH4mP") {
    document.getElementById("rule").innerHTML = "Bonus - now type the number of r's (just after this password without any space) there were in the word 'super' when you were asked to play :) Ignore any errors that may come after this bonus q.";
  } else {
    document.getElementById('rule').innerHTML = "Rule 1. Password must be 8 characters";
  }
  if (_0x5ad921 == "K2@ oH4mP53") {
    alert("Congratulations, You won the password game!");
    document.getElementById("password").innerHTML = '';
    var _0x5d5f23 = confirm("Would you like to play again?");
    if (_0x5d5f23 == true) {
      location.reload();
    } else {
      alert("Canceled.");
      window.history.back();
    }
  }
  document.getElementById("number").innerHTML = _0x5ad921.length;
}
document.addEventListener('contextmenu', e => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
document.onkeydown = e => {
  if (event.keyCode === 123 || e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0) || e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0) || e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0) || e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
    return false;
  }
};