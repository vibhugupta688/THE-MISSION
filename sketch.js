var player1;
var player11Image, playerImage;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10; 
var wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20; 
var wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30; 
var wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40; 
var wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49, wall50;
var wall51, wall52, wall53, wall54, wall55, wall56, wall57, wall58, wall59, wall60; 
var wall61, wall62, wall64, wall64, wall65, wall66, wall67, wall68, wall69, wall70; 
var wall71, wall72, wall73, wall74, wall75, wall76, wall77, wall78, wall79, wall80; 
var wall81, wall82, wall83, wall84, wall85, wall86, wall87, wall88, wall89, wall90; 
var wall91, wall92, wall93, wall94, wall95, wall96, wall97, wall98, wall99, wall100; 
var wall101, wall102, wall103, wall104, wall105, wall106, wall107, wall108, wall109, wall110; 
var wall111, wall112, wall113, wall114, wall115, wall116, wall117, wall118, wall119, wall120; 
var wall121, wall122, wall123, wall124, wall125, wall126, wall127, wall128, wall129, wall130; 
var b1, b2, b3, b4;
var person, personImage;
var badperson, badperson2, badpersonImage;
var time = 90;
var power1, power1_2;
var power1Image, power2Image;
var power2, power2_2;
var hammerpower = 0 , timepower = 0;
var winImage, looseImage;
var hi;








function preload()
{
playerImage = loadImage("knight n.png")
player1Image = loadImage("knight.png");
personImage= loadImage("bot.png");
badpersonImage = loadImage("bot 2 kid.png")
power1Image = loadImage("Hammer.png")
power2Image = loadImage("Timer.png")
winImage = loadImage("1.jpg")
looseImage = loadImage("2.jpg")
}
















function setup(){
  createCanvas(750,450)




 
  player1 = createSprite(10,10,15,15)	;
 player1.addImage(playerImage);
 player1.scale= 0.15;
 


 badperson = createSprite(215,120,20,20);
 badperson.addImage(badpersonImage);
 badperson.scale = 0.12;

		
 badperson2 = createSprite(215,120+48+48+48,20,20);
 badperson2.addImage(badpersonImage);
 badperson2.scale = 0.12;

power1 = createSprite(100,300,20,20);
power1.addImage(power1Image);
power1.scale = 0.01;

power1_2 = createSprite(400,13,20,20);
power1_2.addImage(power1Image);
power1_2.scale = 0.01;

power2 = createSprite(190,126);
power2.addImage(power2Image);
power2.scale = 0.02;

power2_2 = createSprite(447,340);
power2_2.addImage(power2Image);
power2_2.scale = 0.02;

wall1 = createSprite(25,10,2,25);
wall1.shapeColor = "white"
wall2 = createSprite(37,22,25,2);
wall2.shapeColor = "white";
wall3 = createSprite(36,45,76,2);
wall3.shapeColor = "white";
wall4 = createSprite(75,47,2,46);
wall4.shapeColor = "white";
wall5 = createSprite(76,69,45,2);
wall5.shapeColor = "white";
wall6 = createSprite(12,69,28,2);
wall6.shapeColor = "white";
wall7 = createSprite(25,110,2,25);
wall7.shapeColor = "white";
wall8 = createSprite(52,95,2,55);
wall8.shapeColor = "white";
wall9 = createSprite(38,122,27,2);
wall9.shapeColor = "white";
wall10 = createSprite(75,120,2,50);
wall10.shapeColor = "white";
wall11 = createSprite(50,144,50,2);
wall11.shapeColor = "white";
wall12 = createSprite(36,169,80,2);
wall12.shapeColor = "white";
wall13 = createSprite(87,122,25,2);
wall13.shapeColor = "white";
wall14 = createSprite(100,10,2,65);
wall14.shapeColor = "white";
wall15 = createSprite(98,82,2,28);
wall15.shapeColor = "white";
wall16 = createSprite(100,158,2,74);
wall16.shapeColor = "white";
wall17 = createSprite(88,194,24,2);
wall17.shapeColor = "white";
wall18 = createSprite(38,194,24,2);
wall18.shapeColor = "white";
wall19 = createSprite(50,182,2,26);
wall19.shapeColor = "white";
wall20 = createSprite(77,206,2,24);
wall20.shapeColor = "white";
wall21 = createSprite(137,122,24,2);
wall21.shapeColor = "white";
wall22 = createSprite(123,97,52,2);
wall22.shapeColor = "white";
wall23 = createSprite(148,109,2,24);
wall23.shapeColor = "white";
wall24 = createSprite(113,42,24,2);
wall24.shapeColor = "white";
wall25 = createSprite(124,47,2,46);
wall25.shapeColor = "white";
wall26 = createSprite(147,69,48,2);
wall26.shapeColor = "white"; 
wall27 = createSprite(171,107,2,77);
wall27.shapeColor = "white";
wall28 = createSprite(160-12,145,120-24,2); 
wall28.shapeColor = "white";
wall29 =  createSprite(123,157,2,24);
wall29.shapeColor = "white"; 
wall30 =  createSprite(147,181,2,24); 
wall30.shapeColor = "white";
wall31 =  createSprite(123+48,157+24+12,2,24+24); 
wall31.shapeColor = "white";
wall32 =  createSprite(123+13,157+24+12,24,2);
wall32.shapeColor = "white";
wall33 =  createSprite(123,157+24+12+23,2,24+24); 
wall33.shapeColor = "white";
wall34 =  createSprite(123-48,157+24+12+24,24+24+24+24,2);
wall34.shapeColor = "white"; 
wall35 =  createSprite(123-48-48,157+24+12+24-12+24,2,24); 
wall35.shapeColor = "white"; 
wall36 =  createSprite(123-48-48+24,157+24+12+24+24,24+24,2); 
wall36.shapeColor = "white"; 
wall37 =  createSprite(123-48-48+24+24,157+24+12+24+24+48,2,48+24+24); 
wall37.shapeColor = "white"; 
wall38 =  createSprite(123-48-48+24+24-24,157+24+12+24+24+48,2,24+24); 
wall38.shapeColor = "white"; 
wall39 =  createSprite(123-48-48+24-24,157+24+12+24+48,48,2); 
wall39.shapeColor = "white"; 
wall40 =  createSprite(123-48-48+24-12,157+144+12,24,2); 
wall40.shapeColor = "white"; 
wall41 =  createSprite(123-48-48-12,157+120+12,24,2); 
wall41.shapeColor = "white"; 
wall42 =  createSprite(123-48-48,157+120+12+36,2,24); 
wall42.shapeColor = "white"; 
wall43 =  createSprite(123-48-36,157+120+60,24,2); 
wall43.shapeColor = "white"; 
wall44 =  createSprite(123+24,157+24+60,24+24,2); 
wall44.shapeColor = "white"; 
wall45 =  createSprite(123+48,157+60,24+24,2); 
wall45.shapeColor = "white"; 
wall46 =  createSprite(123+48,157+60+24+12,2,24); 
wall46.shapeColor = "white"; 
wall47 =  createSprite(123-24,157+60+48,2,48);
wall47.shapeColor = "white";  
wall48 =  createSprite(123-24,157+60+48+24+24+24,2,48); 
wall48.shapeColor = "white"; 
wall49 =  createSprite(123,157+60+48,48,2); 
wall49.shapeColor = "white"; 
wall50 =  createSprite(123-12,157+60+48+24,24,2)
wall50.shapeColor = "white"; 
wall51 =  createSprite(123,157+60+48+36,2,24); 
wall51.shapeColor = "white"; 
wall52 =  createSprite(123+24,157+60+48+48,48,2)
wall52.shapeColor = "white"; 
wall53 =  createSprite(123+48,157+60+48+36,2,24); 
wall53.shapeColor = "white"; 
wall54 =  createSprite(123+24+48,157+60+48+24,48+48,2)
wall54.shapeColor = "white"; 
wall55 =  createSprite(123+24,157+60+48+48+24,48,2)
wall55.shapeColor = "white"; 
wall56 =  createSprite(123+24+48,157+60+48+12,2,24)
wall56.shapeColor = "white"; 
wall57 =  createSprite(123+48+24,157+60-24,2,48+48)
wall57.shapeColor = "white"; 
wall58 =  createSprite(123+12+36+48,157+60+24,48,2)
wall58.shapeColor = "white"; 
wall59 =  createSprite(123+48+24+48,157+60-12,2,48+48+48+24)
wall59.shapeColor = "white"; 
wall60 =  createSprite(123+12+36+48,157-12,48,2)
wall60.shapeColor = "white"; 
wall61 = createSprite(123+48,12,2,24)
wall61.shapeColor = "white"; 
wall62 =  createSprite(123+36,24,24,2)
wall62.shapeColor = "white"; 
wall63 =  createSprite(123+48,48,48,2)
wall63.shapeColor = "white"; 
wall64 =  createSprite(123+48+24,48,2,48)
wall64.shapeColor = "white"; 
wall65 =  createSprite(123+48+24+24,48+12,2,24+48)
wall65.shapeColor = "white"; 
wall66 =  createSprite(123+36+48,25,24,2)
wall66.shapeColor = "white"; 
wall67 =  createSprite(123+12+24+24 ,24+48+48-12,24,2)
wall67.shapeColor = "white"; 
wall68 =  createSprite(123+12+24+24+48+12,24+24,24+24,2)
wall68.shapeColor = "white"; 
wall69 =  createSprite(123+12+24+24+48+12+24,25,24+24,2)
wall69.shapeColor = "white"; 
wall70 =  createSprite(123+12+24+24+48+12+24+12,25+48,24+24+24,2)
wall70.shapeColor = "white"; 
wall71 =  createSprite(123+12+24+24+48+12+24+12,25+48+48,24+24+24,2)
wall71.shapeColor = "white"; 
wall72 =  createSprite(123+12+24+24+48+11,25+48+24,24+24,2)
wall72.shapeColor = "white"; 
wall73 =  createSprite(123+12+24+24+48+11+48,25+36,2,48+24)
wall73.shapeColor = "white"; 
wall74 =  createSprite(123+12+24+24+48+11+48+24,24,2,48)
wall74.shapeColor = "white"; 
wall75 =  createSprite(123+12+24+24+48+11+48+48-12,25+36+48-12,48+24,2)
wall75.shapeColor = "white"; 
wall76 =  createSprite(123+12+24+24+48+11+48+48-12,25+36-12,24,2)
wall76.shapeColor = "white"; 
wall77 =  createSprite(123+12+24+24+48+11+48+48,25+36,2,24)
wall77.shapeColor = "white"; 
wall78 =  createSprite(123+12+24+24+48+11+48+48,25+36+48+24,2,24+48)
wall78.shapeColor = "white"; 
wall79 =  createSprite(123+12+24+24+48+11+48+48+24,25+36+48+24-48-12,2,48+48)
wall79.shapeColor = "white"; 
wall80 =  createSprite(123+12+24+24+48+11+48+48+24+12,25+36+24-48-12,24+48,2)
wall80.shapeColor = "white"; 
wall81 =  createSprite(123+12+24+24+48+11+48+48+24+24,25+36+24+48+24+24-12,48+48,2)
wall81.shapeColor = "white"; 
wall82 =  createSprite(123+12+24+48+11+48,25+36+24+48+24+36,2,48+48)
wall82.shapeColor = "white"; 
wall83 =  createSprite(123+12+24+48+11+48+48,25+36+24+48+24+48,2,48+24)
wall83.shapeColor = "white"; 
wall84 =  createSprite(123+12+48+11+48+48,25+36+24+48+48,2,24)
wall84.shapeColor = "white"; 
wall85 =  createSprite(123+12+48+11+48+48,25+36+24+48+48+48+24,2,24)
wall85.shapeColor = "white"; 
wall86 =  createSprite(123+12+48+11+48+48,25+36+24+48+48+48+24-12,48,2)
wall86.shapeColor = "white"; 
wall87 =  createSprite(123+12+48+11+48+48-12,25+36+24+48+48+48-12,24,2)
wall87.shapeColor = "white"; 
wall88 =  createSprite(123+12+48+11+48+48+12,1+36+48+48+48-12,24,2)
wall88.shapeColor = "white"; 
wall89 =  createSprite(123+12+48+11+48+48+12,1+36+48+48+24-12,24+48,2)
wall89.shapeColor = "white"; 
wall90 =  createSprite(123+12+48+11+48+48+12+120+12,1+36+48+48+24-12,2,48+48+48)
wall90.shapeColor = "white"; 
wall91 =  createSprite(123+12+48+11+24+24+12+120+12,1+36+48+24-12,2,48+48)
wall91.shapeColor = "white"; 
wall92 =  createSprite(123+12+48+11+24+24+12+120+12+24,1+36+48+24+12,2,48)
wall92.shapeColor = "white"; 
wall93 =  createSprite(123+12+48+11+24+24+12+120+12+24+24,24,2,48)
wall93.shapeColor = "white"; 
wall94 =  createSprite(123+12+48+11+24+24+24+12+120+12+24+24,24+48+12,2,24+48)
wall94.shapeColor = "white"; 
wall95 =  createSprite(123+24+11+24+24+24+12+120+12+24+24,1+24+12+12,24+48,2)
wall95.shapeColor = "white"; 
wall96 =  createSprite(123+24+11+24+24+24+12+120+12+24+24,1+24+12+12+24,24,2)
wall96.shapeColor = "white"; 
wall97 =  createSprite(123+24+11+24+24+24+120+12+24,1+24+12+12+24+48+24,24+24,2)
wall97.shapeColor = "white"; 
wall98 =  createSprite(123+1+24+11+48+24+24+24+12+120+12+24+1+24,24,24,2)
wall98.shapeColor = "white"; 
wall99 =  createSprite(123+24+11+48+24+24+24+12+120+12+24+1,24+120,24,2)
wall99.shapeColor = "white"; 
wall100 =  createSprite(123+24+11+48+24+24+24+12+120+12+24+24+1,24+120+24,24,2)
wall100.shapeColor = "white"; 
wall101 =  createSprite(123+24+11+36+24+12+120+12+24+1,24+120+24+24,24+48+24,2)
wall101.shapeColor = "white"; 
wall102 =  createSprite(123+24+11+48+24+24+24+12+12+120+12+24+1,24+120+48,2,48)
wall102.shapeColor = "white"; 
wall103 =  createSprite(123+24+11+36+12+120+12+24+1,24+120+24+24+24,48+48,2)
wall103.shapeColor = "white"; 
wall104 =  createSprite(123+24+11+36+24+24+48+120+12+24+1,24+120+24+48+24,24+48,2)
wall104.shapeColor = "white"; 
wall105 =  createSprite(123+24+11+36+24+48+120+12+24+1,24+120+24+48+24+24,24+48,2)
wall105.shapeColor = "white"; 
wall106 =  createSprite(123+12+24+11+36+24+48+120+12+24+1,24+120+24+48+24+24+48,48,2)
wall106.shapeColor = "white"; 
wall107 =  createSprite(123+12+11+36+48+120+12+24+1,24+120+24+48+24+24+48+24,48,2)
wall107.shapeColor = "white"; 
wall108 =  createSprite(123+12+11+36+48+120+12+24+1+24,24+120+24+48+24+24+48+12,2,24)
wall108.shapeColor = "white"; 
wall109 =  createSprite(123+12+11+36+48+120+12+24+1+24,24+120+24+48+24+24+12,2,24)
wall109.shapeColor = "white"; 
wall110 =  createSprite(123+12+11+36+48+120+12+24+1+24+24,24+120+24+48+24+24+24+12,2,24)
wall110.shapeColor = "white"; 
wall111 =  createSprite(123+12+11+36+48+120+12+24+1+24+48,24+120+24+48+24+24+12+24,2,24+48)
wall111.shapeColor = "white"; 
wall112 =  createSprite(123+12+11+36+48+120+12+24+1+24+24,24+120+24+48+24+24+24+12+24+24,2,24)
wall112.shapeColor = "white"; 
wall113 =  createSprite(123+12+11+12+48+120+12+1,24+120+24+48+24+24+24+12+24+24-24,2,24+48)
wall113.shapeColor = "white"; 
wall114 =  createSprite(123+12+11+36+48+120+12+24+1,24+120+24+48+24+24+24+12,2,24)
wall114.shapeColor = "white"; 
wall115 =  createSprite(123+12+11+36+48+120+12+1,24+120+24+48+24+24+24+12+24+24,2,24)
wall115.shapeColor = "white"; 
wall116 =  createSprite(123+12+11+36+48+120+12+1+12,24+120+24+48+24+24+24+12+24+24-36,24,2)
wall116.shapeColor = "white"; 
wall117 =  createSprite(123+12+11+36+48+120+12+1,24+120+24+48+24+24+24+12+24+24-36-24,24+24,2)
wall117.shapeColor = "white"; 
wall118 =  createSprite(123+12+11+36+48+120+12+1+24,24+24+48+24+24+24+24+12+24+24,2,24)
wall118.shapeColor = "white"; 
wall119 =  createSprite(123+12+11+12+48+120+12+1,24+24+48+24+24+24+24+12+24+24,2,24)
wall119.shapeColor = "white"; 
wall120 =  createSprite(123+12+11+12+24+120+12+1,24+24+48+24+24+24+24+12+24+24+48,2,24+48)
wall120.shapeColor = "white"; 
wall121 =  createSprite(123+12+120+12+1,24+24+48+24+24+24+24+12+24+24+24,2,24)
wall121.shapeColor = "white"; 
wall122 =  createSprite(123+12+120+12+1+24,24+24+48+24+24+24+24+12+24+12+24+24,48,2)
wall122.shapeColor = "white"; 
wall123 =  createSprite(123+12+120+12+1+24+24+24,24+24+48+24+24+24+24+1+12+24+12+24,48,2) 
wall123.shapeColor = "white"; 
wall124 =  createSprite(123+12+120+12+1+24+24+24+24,24+24+48+24+24+24+24+12+1+12+24,48,2) 
wall124.shapeColor = "white"; 
wall125 =  createSprite(123+120+1,24+24+48+24+24+24+24+12+24+12+24+24+24,48+48,2)
wall125.shapeColor = "white"; 
wall126 =  createSprite(123+120+1+48+12,24+24+48+24+24+24+24+12+24+12+24+24+24+24,24,2)
wall126.shapeColor = "white"; 
wall127 =  createSprite(123+120+1+12-12,24+24+48+24+24+24+24+12+24+12+24+24+24+24,48,2)
wall127.shapeColor = "white"; 
wall128 =  createSprite(123+120+1,24+24+48+24+24+24+24+12+24+24+24+24+24+24,2,24)
wall128.shapeColor = "white"; 
wall129 =  createSprite(123+120+1-48,24+24+48+24+24+24+24+12+24+24+24+24+24,2,24)
wall129.shapeColor = "white"; 
wall130 =  createSprite(123+120+1-48-24,24+24+48+24+24+24+24+12+24+24+24+24+24+24,2,24)
wall130.shapeColor = "white"; 








b1 =  createSprite(250-15,1,500,2)
b1.shapeColor = "black";
b2 =  createSprite(250-15,359,500,2)
b2.shapeColor = "black";
b3 =  createSprite(1,180,2,360)
b3.shapeColor = "black";
b4 =  createSprite(500-15-1,180,4,360)
b4.shapeColor = "black";



person = createSprite(220,195,10,10);
person.addImage(personImage);
person.scale = 0.2;


  }

  













function draw(){
  background("turquoise");




    if(frameCount % 60 === 0){
    time = time-1;
  }


  if(keyDown(UP_ARROW)) {
	
	player1.y = player1.y-2;
  }
  if (keyDown(DOWN_ARROW)) {

	player1.y = player1.y+2;
  }
	  if(keyDown(LEFT_ARROW)) {
      player1.addImage(player1Image);
	player1.x = player1.x-2;
 
  }
if (keyDown(RIGHT_ARROW)) {
  player1.addImage(playerImage);
  player1.scale= 0.15;
   player1.x = player1.x+2;
  } 




  if(player1.isTouching(power1)){
    power1.destroy();
    hammerpower = hammerpower +1;

  }

  if(player1.isTouching(power1_2)){
    power1_2.destroy();
    hammerpower = hammerpower +1;

  }

  if(player1.isTouching(power2)){
    power2.destroy();
    timepower = timepower +1;

  }

  if(player1.isTouching(power2_2)){
    power2_2.destroy();
    timepower = timepower +1;

  }
  
  if(timepower > 0  && keyDown("t") ){
 
    timepower = timepower-1;
    time = time +10;
  }


  if(hammerpower > 0 && player1.isTouching(wall1) && keyDown("b") ){
    wall1.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall2) && keyDown("b") ){
    wall2.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall3) && keyDown("b") ){
    wall3.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall4) && keyDown("b") ){
    wall4.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall5) && keyDown("b") ){
    wall5.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall6) && keyDown("b") ){
    wall6.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall7) && keyDown("b") ){
    wall7.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall8) && keyDown("b") ){
    wall8.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall9) && keyDown("b") ){
    wall9.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall10) && keyDown("b") ){
    wall10.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall11) && keyDown("b") ){
    wall11.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall12) && keyDown("b") ){
    wall12.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall3) && keyDown("b") ){
    wall13.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall14) && keyDown("b") ){
    wall14.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall15) && keyDown("b") ){
    wall15.destroy();
    hammerpower = hammerpower-1;
  }


  
  if(hammerpower > 0 && player1.isTouching(wall16) && keyDown("b") ){
    wall16.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall17) && keyDown("b") ){
    wall17.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall8) && keyDown("b") ){
    wall18.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall19) && keyDown("b") ){
    wall19.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall20) && keyDown("b") ){
    wall20.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall21) && keyDown("b") ){
    wall21.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall22) && keyDown("b") ){
    wall22.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall23) && keyDown("b") ){
    wall23.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall24) && keyDown("b") ){
    wall24.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall25) && keyDown("b") ){
    wall25.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall26) && keyDown("b") ){
    wall26.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall27) && keyDown("b") ){
    wall27.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall28) && keyDown("b") ){
    wall28.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall29) && keyDown("b") ){
    wall29.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall30) && keyDown("b") ){
    wall30.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall31) && keyDown("b") ){
    wall31.destroy();
    hammerpower = hammerpower-1;
  } 
 if(hammerpower > 0 && player1.isTouching(wall32) && keyDown("b") ){
    wall32.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall33) && keyDown("b") ){
    wall33.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall34) && keyDown("b") ){
    wall34.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall35) && keyDown("b") ){
    wall35.destroy();
    hammerpower = hammerpower-1;
  }



  if(hammerpower > 0 && player1.isTouching(wall36) && keyDown("b") ){
    wall36.destroy();
    hammerpower = hammerpower-1;
  } 
 if(hammerpower > 0 && player1.isTouching(wall37) && keyDown("b") ){
    wall37.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall38) && keyDown("b") ){
    wall38.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall39) && keyDown("b") ){
    wall39.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall40) && keyDown("b") ){
    wall40.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall41) && keyDown("b") ){
    wall41.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall42) && keyDown("b") ){
    wall42.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall43) && keyDown("b") ){
    wall43.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall44) && keyDown("b") ){
    wall44.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall45) && keyDown("b") ){
    wall45.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall46) && keyDown("b") ){
    wall46.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall47) && keyDown("b") ){
    wall47.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall48) && keyDown("b") ){
    wall48.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall49) && keyDown("b") ){
    wall49.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall50) && keyDown("b") ){
    wall50.destroy();
    hammerpower = hammerpower-1;
  }
  
  
  if(hammerpower > 0 && player1.isTouching(wall51) && keyDown("b") ){
    wall51.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall52) && keyDown("b") ){
    wall52.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall53) && keyDown("b") ){
    wall53.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall54) && keyDown("b") ){
    wall54.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall55) && keyDown("b") ){
    wall55.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall56) && keyDown("b") ){
    wall56.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall57) && keyDown("b") ){
    wall57.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall58) && keyDown("b") ){
    wall58.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall59) && keyDown("b") ){
    wall59.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall60) && keyDown("b") ){
    wall60.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall61) && keyDown("b") ){
    wall61.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall62) && keyDown("b") ){
    wall62.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall63) && keyDown("b") ){
    wall63.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall64) && keyDown("b") ){
    wall64.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall65) && keyDown("b") ){
    wall65.destroy();
    hammerpower = hammerpower-1;
  }


  
  if(hammerpower > 0 && player1.isTouching(wall66) && keyDown("b") ){
    wall66.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall67) && keyDown("b") ){
    wall67.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall68) && keyDown("b") ){
    wall68.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall69) && keyDown("b") ){
    wall69.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall70) && keyDown("b") ){
    wall70.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall71) && keyDown("b") ){
    wall71.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall72) && keyDown("b") ){
    wall72.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall73) && keyDown("b") ){
    wall73.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall74) && keyDown("b") ){
    wall74.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall75) && keyDown("b") ){
    wall75.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall76) && keyDown("b") ){
    wall76.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall77) && keyDown("b") ){
    wall77.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall78) && keyDown("b") ){
    wall78.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall79) && keyDown("b") ){
    wall79.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall80) && keyDown("b") ){
    wall80.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall81) && keyDown("b") ){
    wall81.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall82) && keyDown("b") ){
    wall82.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall83) && keyDown("b") ){
    wall83.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall84) && keyDown("b") ){
    wall84.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall85) && keyDown("b") ){
    wall85.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall86) && keyDown("b") ){
    wall86.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall87) && keyDown("b") ){
    wall87.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall88) && keyDown("b") ){
    wall88.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall89) && keyDown("b") ){
    wall89.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall90) && keyDown("b") ){
    wall90.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall91) && keyDown("b") ){
    wall91.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall92) && keyDown("b") ){
    wall92.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall93) && keyDown("b") ){
    wall93.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall94) && keyDown("b") ){
    wall94.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall95) && keyDown("b") ){
    wall95.destroy();
    hammerpower = hammerpower-1;
  }

  
  if(hammerpower > 0 && player1.isTouching(wall96) && keyDown("b") ){
    wall96.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall97) && keyDown("b") ){
    wall97.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall98) && keyDown("b") ){
    wall98.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall99) && keyDown("b") ){
    wall99.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall100) && keyDown("b") ){
    wall100.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall101) && keyDown("b") ){
    wall101.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall102) && keyDown("b") ){
    wall102.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall103) && keyDown("b") ){
    wall103.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall104) && keyDown("b") ){
    wall104.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall105) && keyDown("b") ){
    wall105.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall106) && keyDown("b") ){
    wall106.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall107) && keyDown("b") ){
    wall107.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall108) && keyDown("b") ){
    wall108.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall109) && keyDown("b") ){
    wall109.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall110) && keyDown("b") ){
    wall110.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall111) && keyDown("b") ){
    wall111.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall112) && keyDown("b") ){
    wall112.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall113) && keyDown("b") ){
    wall113.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall114) && keyDown("b") ){
    wall114.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall115) && keyDown("b") ){
    wall115.destroy();
    hammerpower = hammerpower-1;
  }



  if(hammerpower > 0 && player1.isTouching(wall116) && keyDown("b") ){
    wall116.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall117) && keyDown("b") ){
    wall117.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall118) && keyDown("b") ){
    wall118.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall119) && keyDown("b") ){
    wall119.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall120) && keyDown("b") ){
    wall120.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall121) && keyDown("b") ){
    wall121.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall122) && keyDown("b") ){
    wall122.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall123) && keyDown("b") ){
    wall123.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall124) && keyDown("b") ){
    wall124.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall125) && keyDown("b") ){
    wall125.destroy();
    hammerpower = hammerpower-1;
  }


  if(hammerpower > 0 && player1.isTouching(wall126) && keyDown("b") ){
    wall126.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall127) && keyDown("b") ){
    wall127.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall128) && keyDown("b") ){
    wall128.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall129) && keyDown("b") ){
    wall129.destroy();
    hammerpower = hammerpower-1;
  }
  if(hammerpower > 0 && player1.isTouching(wall130) && keyDown("b") ){
    wall130.destroy();
    hammerpower = hammerpower-1;
  }



if(player1.isTouching(person)){
  person.addImage(winImage);
  person.scale = 0.6;
  person.x = 220+23;
  person.y =195-15;
}



if(player1.isTouching(badperson)){
  person.addImage(looseImage);
  person.scale = 0.6;
  person.x = 220+23;
  person.y =195-15;
}



if(player1.isTouching(badperson2)){
  person.addImage(looseImage);
  person.scale = 0.6;
  person.x = 220+23;
  person.y =195-15;
}



if(time === 0){
  person.addImage(looseImage);
  person.scale = 0.6;
  person.x = 220+23;
  person.y =195-15;
}

  player1.collide(wall1);
  player1.collide(wall2);
  player1.collide(wall3);
  player1.collide(wall4);
  player1.collide(wall5);
  player1.collide(wall6);
  player1.collide(wall7);
  player1.collide(wall8);
  player1.collide(wall9);
  player1.collide(wall10);
  player1.collide(wall11);
  player1.collide(wall12);
  player1.collide(wall13);
  player1.collide(wall14);
  player1.collide(wall15);
  player1.collide(wall16);
  player1.collide(wall17);
  player1.collide(wall18);
  player1.collide(wall19);
  player1.collide(wall20);
  player1.collide(wall21);
  player1.collide(wall22);
  player1.collide(wall23);
  player1.collide(wall24);
  player1.collide(wall25);
  player1.collide(wall26);
  player1.collide(wall27);
  player1.collide(wall28);
  player1.collide(wall29);
  player1.collide(wall30);
  player1.collide(wall31);
  player1.collide(wall32);
  player1.collide(wall33);
  player1.collide(wall34);
  player1.collide(wall35);
  player1.collide(wall36);
  player1.collide(wall37);
  player1.collide(wall38);
  player1.collide(wall39);
  player1.collide(wall40);
  player1.collide(wall41);
  player1.collide(wall42);
  player1.collide(wall43);
  player1.collide(wall44);
  player1.collide(wall45);
  player1.collide(wall46);
  player1.collide(wall47);
  player1.collide(wall48);
  player1.collide(wall49);
  player1.collide(wall50);
  player1.collide(wall51);
  player1.collide(wall52);
  player1.collide(wall53);
  player1.collide(wall54);
  player1.collide(wall55);
  player1.collide(wall56);
  player1.collide(wall57);
  player1.collide(wall58);
  player1.collide(wall59);
  player1.collide(wall60);
  player1.collide(wall61);
  player1.collide(wall62);
  player1.collide(wall63);
  player1.collide(wall64);
  player1.collide(wall65);
  player1.collide(wall66);
  player1.collide(wall67);
  player1.collide(wall68);
  player1.collide(wall69);
  player1.collide(wall70);
  player1.collide(wall71);
  player1.collide(wall72);
  player1.collide(wall73);
  player1.collide(wall74);
  player1.collide(wall75);
  player1.collide(wall76);
  player1.collide(wall77);
  player1.collide(wall78);
  player1.collide(wall79);
  player1.collide(wall80);
  player1.collide(wall81);
  player1.collide(wall82);
  player1.collide(wall83);
  player1.collide(wall84);
  player1.collide(wall85);
  player1.collide(wall86);
  player1.collide(wall87);
  player1.collide(wall88);
  player1.collide(wall89);
  player1.collide(wall90);
  player1.collide(wall91);
  player1.collide(wall92);
  player1.collide(wall93);
  player1.collide(wall94);
  player1.collide(wall95);
  player1.collide(wall96);
  player1.collide(wall97);
  player1.collide(wall98);
  player1.collide(wall99);
  player1.collide(wall100);
  player1.collide(wall101);
  player1.collide(wall102);
  player1.collide(wall103);
  player1.collide(wall104);
  player1.collide(wall105);
  player1.collide(wall106);
  player1.collide(wall107);
  player1.collide(wall108);
  player1.collide(wall109);
  player1.collide(wall110);
  player1.collide(wall111);
  player1.collide(wall112);
  player1.collide(wall113);
  player1.collide(wall114);
  player1.collide(wall115);
  player1.collide(wall116);
  player1.collide(wall117);
  player1.collide(wall118);
  player1.collide(wall119);
  player1.collide(wall120);
  player1.collide(wall121);
  player1.collide(wall122);
  player1.collide(wall123);
  player1.collide(wall124);
  player1.collide(wall125);
  player1.collide(wall126);
  player1.collide(wall127);
  player1.collide(wall128);
  player1.collide(wall129);
  player1.collide(wall130);



  player1.collide(b1);
  player1.collide(b2);
  player1.collide(b3);
  player1.collide(b4);
  


  

  

  drawSprites();
  fill("black");
  textSize(20);
  textFont("Impact");
  text("Time left : "+time + " sec",5,390 )
  fill("red");
  text("Powers : ",165,390 )
  fill("black");
  text("              Hammer :"+hammerpower+"  Time Increaser : "+timepower,190,390 )
  fill("darkblue");
  text("You are the soldier on your  ",500,20 )
  text("mission of saving a man from   ",500,40 )
  text("the terrorists. You only have  ",500,60 )
  text("60 sec for saving him & 30 sec  ",500,80 )
  text("for reading the instructions.  ",500,100 )

  text("Now listen carefully!  ",500,140 )
  text("Move across the maze & take   ",500,160 )
  text("the powerups i.e. hammer &  ",500,180 )
  text("time increasers. Use the    ",500,200 )
  text("powerups wisely & reach man.  ",500,220 )

  text("How to use powerups :- ",500,260 )
  text("1. Hammer - keep Touching the  ",500,280 )
  text("wall u want to break & press 'B' . ",498,300 )

  text("2. Time Increaser - Just press ",500,340 )  
  text(" 'T' to get 10 more seconds. ",500,360 )

  text(" All the best soldier! 🙂👍",500,390 )
  textSize(30);
  stroke("navy");
  textFont("mistral regular");
  text("- VibhuG", 630,440)
	}

  

