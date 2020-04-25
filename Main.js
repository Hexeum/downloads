
$( document ).ready(function() {

var vid = document.getElementById("vid");
var icon = $(".icon")[0];

var twitchIcon = "https://github.com/Hexeum/downloads/raw/master/ValIcons/twitch.png"

Start();

function Start()
{
  InitAnimation();
  vid.addEventListener('loadeddata', function() {RunPlayback();}, false);
  vid.load();
}

function InitAnimation()
{
  $(".detailsTxt")[0].style.clipPath += "polygon(0 0, 0 0, 0 100%, 0% 100%)";
  icon.style.transform += "scale(0)";
  icon.style.transform += "rotate(180deg)";
}


async function RunPlayback()
{
  for(i = 0; i < 2; i++)
  {
    await loadImage();
    console.log("Should be waiting");
    await StartAnimation("YEEET");
  }
}

function loadImage()
{
  return new Promise(resolve => {
    let image = new Image();
    image.onload = () => {
      $("#iconImage").attr("src", image.src);
      resolve();
    };
    image.src = twitchIcon;
  });
}


function StartAnimation(text)
{
  vid.pause();
  vid.currentTime = "0";
  $(".detailsTxt")[0].innerHTML = text;

  //show icon
  anime({
    targets: '.icon',
    scale: (1),
    duration: 500,
    easing: 'easeOutElastic(1,.7)',
    rotate : 0
  })

  //Text in
  setTimeout(() => {
    $(".detailsTxt")[0].classList.remove("textAnimationOut");
    $(".detailsTxt")[0].classList.add("textAnimationIn");
    $(".detailsTxt")[0].style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
  }, 500);

  //Text out
  setTimeout(() => {
    $(".detailsTxt")[0].classList.remove("textAnimationIn");
    $(".detailsTxt")[0].classList.add("textAnimationOut");
    $(".detailsTxt")[0].style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)";
  }, 4200);


  //Play after delay
  setTimeout(() => {
    vid.play();
  }, 100);

  //Hide Icon
  setTimeout(() => {
    anime({
      targets: '.icon',
      scale: (0),
      duration: 800,
      easing: 'easeOutElastic(1,.7)',
      rotate : -180
    })
  }, 5100);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 5500);
  })
}

});