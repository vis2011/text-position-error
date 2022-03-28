var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player, allPlayers, school, up, upil, allUsers, users, user, Uusername, Upassword, login;
var schoolCount;
var gline, grline;
var home, Menu, fusers;
var gameState = 1;
var gameState = 2;
var gameState = 3;
var messages = []
var elem;
var a, regx, uptForm;
var schoolND , locationD , registerND , mailId , phoneND , NOSD , tvnD ;

function setup() {
  var canvas = createCanvas(windowWidth , windowHeight)
  database = firebase.database();
  if (gameState = 1) {
    home = new homePage();
    home.display();
  }
}