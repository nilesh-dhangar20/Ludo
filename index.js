function myfun(){
    var random1=Math.floor(Math.random()*6);
    random1++;
    var random2=Math.floor(Math.random()*6);
    random2++;
 
    var source1=`images/dice${random1}.png`;
    console.log(random1);
    var source2=`images/dice${random2}.png`;
    document.getElementById('img1').setAttribute('src',source1);
    document.getElementById('img2').setAttribute('src',source2);
    if(random1>random2)
    {
          document.getElementById('declare').innerHTML=`player1 win`;
    }
  else if(random1<random2)
    {
          document.getElementById('declare').innerHTML=`player2 win`;
    }
    else{
        document.getElementById('declare').innerHTML=`drow`;
    }

}