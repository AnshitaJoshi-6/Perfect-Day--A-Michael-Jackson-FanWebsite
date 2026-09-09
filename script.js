
const IMG = {
  splash: "Images/screen1.png",
  home: "Images/HOMEPAGE.png",
  about: "Images/ABOUT.png",
  albumsGrid: "Images/4.png",
  quizIntro: "Images/15.png",

  albums: [
    "Images/5.png",
    "Images/6.png",
    "Images/7.png",
    "Images/8.png",
    "Images/9.png",
    "Images/10.png",
    "Images/11.png",
    "Images/12.png",
    "Images/13.png",
    "Images/14.png"
  ]
};



const bgMusic =
  document.getElementById(
    "bgMusic"
  );


const musicToggle =
  document.getElementById(
    "musicToggle"
  );


let musicStarted =false;



bgMusic.volume =0.35;



function startMusic() {

  if(musicStarted) 
    {return;}


  bgMusic
    .play()
    .then(

      () => {
        musicStarted =
          true;
        musicToggle.textContent =
          "🔊";
        musicToggle.classList.remove(
          "music-off"
        );
      }
    )
    .catch(

      () => {}
    );
}



musicToggle.addEventListener("click",() => {

    if (bgMusic.paused){
      bgMusic
        .play()
        .then(

          () => {
            musicStarted =
              true;
            musicToggle.textContent =
              "🔊";
            musicToggle.classList.remove(
              "music-off"
            );
          }
        )
        .catch(

          error => {console.log(
              "Music could not start:",
              error
            );
          }
        );
    } 
    else {bgMusic.pause();
      musicToggle.textContent =
        "🔇";
      musicToggle.classList.add(
        "music-off"
      );

    }


  }

);



const ALBUM_TITLES = [
  "Got To Be There",
  "Ben",
  "Music & Me",
  "Forever, Michael",
  "Off the Wall",
  "Thriller",
  "Bad",
  "Dangerous",
  "HIStory",
  "Invincible"
];




const RECT = {



  navHome: {
    top: 0,
    left: 0,
    width: 25,
    height: 10
  },

  navAbout: {
    top: 0,
    left: 25,
    width: 25,
    height: 10
  },

  navGallery: {
    top: 0,
    left: 50,
    width: 25,
    height: 10
  },

  navQuiz: {
    top: 0,
    left: 75,
    width: 25,
    height: 10
  },

  homeExplore: {
    top: 85,
    left: 38,
    width: 24,
    height: 12
  },


  

  postcard0: {
    top: 50,
    left: 8,
    width: 10,
    height: 24
  },

  postcard1: {
    top: 50,
    left: 20,
    width: 10,
    height: 27
  },

  postcard2: {
    top: 50,
    left: 34,
    width: 10,
    height: 24
  },

  aboutNext: {
    top: 92,
    left: 90,
    width: 10,
    height: 8
  },



  albumGridBox: {
    top: 14,
    left: 5,
    width: 90,
    height: 58
  },

  albumGridCols: 5,

  albumGridRows: 2,

  albumsNext: {
    top: 92,
    left: 90,
    width: 10,
    height: 8
  },




  albumDetailNext: {
    top: 92,
    left: 90,
    width: 10,
    height: 8
  },



  quizStart: {
    top: 76,
    left: 36,
    width: 28,
    height: 10
  }

};



const SCREENS = [
  "splash",
  "home",
  "about",
  "albums",
  "album-detail",
  "quiz-intro",
  "quiz-question",
  "quiz-result"
];


function showScreen(name) {

  SCREENS.forEach(screen => {

    document
      .getElementById("screen-" + screen)
      .classList.toggle(
        "active",
        screen === name
      );

  });


  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

}




function addHotspot(frameEl, rect, onClick, label) {

  const button =
    document.createElement(
      "button"
    );


  button.className =
    "hotspot";


  button.type =
    "button";


  button.style.top =
    rect.top + "%";


  button.style.left =
    rect.left + "%";


  button.style.width =
    rect.width + "%";


  button.style.height =
    rect.height + "%";


  if (
    label
  ) {

    button.setAttribute(
      "aria-label",
      label
    );

  }


  button.addEventListener(
    "click",
    onClick
  );


  frameEl.appendChild(
    button
  );


  return button;

}


function clearHotspots(frameEl) {

  frameEl
    .querySelectorAll(
      ".hotspot"
    )
    .forEach(

      element => {

        element.remove();

      }

    );

}



function buildSplash() {

  const frame =document.getElementById(
      "frame-splash" );


  clearHotspots(frame);


  addHotspot(frame,

    {top: 0,
      left: 0,
      width: 100,
      height: 100
    },

    () => {startMusic();

      showScreen(
        "home"
      );
    },"Enter site"
  );
}


function buildHome() {

  const frame =
    document.getElementById(
      "frame-home"
    );


  clearHotspots(
    frame
  );


  addHotspot(frame,
    RECT.navHome,

    () => {

      showScreen(
        "home"
      );

    },

    "Home"

  );


  addHotspot(frame,
    RECT.navAbout,
    () => {

      showScreen(
        "about"
      );

    },

    "About"

  );


  addHotspot(frame,RECT.navGallery,
    () => {

      showScreen(
        "albums"
      );

    },

    "Gallery"

  );

  addHotspot(frame,
    RECT.navQuiz,

    () => { resetQuiz();

      showScreen(
        "quiz-intro"
      );

    },

    "Quiz"

  );


  addHotspot(frame,
    RECT.homeExplore,

    () => {

      showScreen(
        "about"
      );

    },

    "Explore"

  );

}




function buildAbout() {
  const frame =
    document.getElementById(
      "frame-about"
    );
  clearHotspots(
    frame
  );

  [
    RECT.postcard0,
    RECT.postcard1,
    RECT.postcard2
  ].forEach(

    (rect, index) => {

      addHotspot(

        frame,

        rect,

        () => {},

        "Postcard " +
        (index + 1)

      );

    }

  );


  frame
    .querySelectorAll(
      ".hotspot"
    )
    .forEach(

      hotspot => {

        hotspot.addEventListener(

          "click",

          () => {

            frame.classList.remove(
              "pop-pulse"
            );


            void frame.offsetWidth;


            frame.classList.add(
              "pop-pulse"
            );

          }

        );

      }

    );


  addHotspot(
  frame,
  RECT.aboutNext,
  () => {
    showScreen("albums");
  },
  "Next"
);

}




function buildAlbumsGrid() {

  const frame =
    document.getElementById(
      "frame-albums"
    );


  clearHotspots(
    frame
  );


  const box =
    RECT.albumGridBox;


  const cols =
    RECT.albumGridCols;


  const rows =
    RECT.albumGridRows;


  const cellWidth =
    box.width / cols;


  const cellHeight =
    box.height / rows;


  let albumIndex =
    0;


  for (
    let row = 0;
    row < rows;
    row++
  ) {

    for (
      let column = 0;
      column < cols;
      column++
    ) {

      if (
        albumIndex >=
        ALBUM_TITLES.length
      ) {

        break;}


      const rect = {top:
          box.top +
          row * cellHeight,

        left:
          box.left +
          column * cellWidth,

        width:
          cellWidth,

        height:
          cellHeight};


      addHotspot(frame,
        rect,
        ((index) =>
            () => openAlbum(index)
        )(albumIndex),

        ALBUM_TITLES[
          albumIndex
        ]
      );
      albumIndex++;

    }

  }


  addHotspot(frame,RECT.albumsNext,
    () => {

      openAlbum(0);
    },
    "Next"
  );

}



let currentAlbumIndex = 0;
function openAlbum(index) {

  currentAlbumIndex =
    index;


  const image =
    document.getElementById(
      "albumDetailImg"
    );


  image.src =
    IMG.albums[index];


  image.alt =
    ALBUM_TITLES[index] +
    " album page";


  const frame =document.getElementById("frame-album-detail" );
  clearHotspots(
    frame);


  addHotspot(
    frame,
    RECT.albumDetailNext,

    () => {
      if (

        currentAlbumIndex ===
        IMG.albums.length - 1)
        {
        resetQuiz();
        showScreen(
          "quiz-intro"
        );
        return;}


      currentAlbumIndex++;
      openAlbum(
        currentAlbumIndex
      );
    },
    "Next"
  );
  showScreen(
    "album-detail"
  );}


function buildQuizIntro() {

  const frame =
    document.getElementById(
      "frame-quiz-intro"
    );

  clearHotspots(
    frame
  );
  addHotspot(
    frame,
    RECT.quizStart,

    () => {

      resetQuiz();
      renderQuestion();
      showScreen(
        "quiz-question"
      );
    },

    "Start Quiz"
  );}




const QUIZ = [
  { q:
      "What was Michael Jackson's first solo studio album?",
    options: [
      "Ben",
      "Music & Me",
      "Got to Be There",
      "Forever, Michael"

    ],

    correct: 2

  },


  {

    q:
      "Which Michael Jackson album became the best-selling album in history?",
    options: [

      "Bad",
      "Thriller",
      "Dangerous",
      "Off the Wall"

    ],

    correct: 1

  },


  {

    q:
      "Which legendary producer worked with Michael Jackson on Off the Wall, Thriller, and Bad?",
    options: [
      "Quincy Jones",
      "George Martin",
      "Rick Rubin",
      "David Foster"

    ],

    correct: 0

  },

  {

    q:
      "Which iconic dance move did Michael Jackson famously perform during his performance of “Billie Jean” at Motown 25?",
    options: [
      "The Robot",
      "The Moonwalk",
      "The Spin",
      "The Lean"
    ],
    correct: 1
  },
  {
    q:
      "Which Michael Jackson song features the famous line, “Annie, are you OK?”",
    options: [
      "Bad",
      "Smooth Criminal",
      "Dangerous",
      "Dirty Diana"
    ],
    correct: 1
  },
  {
    q:
      "What was the name of Michael Jackson's famous residence?",
    options: [
      "Wonderland Ranch",
      "Neverland Ranch",
      "Moonwalker Estate",
      "Thriller Ranch"
    ],
    correct: 1
  },
  {
    q:
      "Which Michael Jackson album includes “Black or White”, “Remember the Time”, and “Heal the World”?",
    options: [
      "Bad",
      "Dangerous",
      "HIStory",
      "Invincible"
    ],
    correct: 1
  },
  {
    q:
      "How many Grammy Awards did Michael Jackson win in one night in 1984?",
    options: [

      "5",
      "6",
      "8",
      "10"
    ],
    correct: 2
  },
  {
    q:
      "Which Michael Jackson sibling collaborated with him on the song “Scream”?",
    options: [
      "La Toya Jackson",
      "Janet Jackson",
      "Rebbie Jackson",
      "Jermaine Jackson"
    ],
    correct: 1
  },
  {
    q:
      "Which Michael Jackson song is famous for its powerful environmental message and repeatedly asks, “What about us?”",

    options: [
    "Heal the World",
      "Man in the Mirror",
      "They Don't Care About Us",
      "Earth Song"

    ],
    correct: 3
  }
];




let quizIndex =0;
let quizScore =0;
let quizAnswered =false;




function resetQuiz() {
  quizIndex =0;
  quizScore =0;
  quizAnswered =false;}




function renderQuestion() {const item =QUIZ[quizIndex];

  document.getElementById("quizProgress")
    .textContent =`Question ${quizIndex + 1} of ${QUIZ.length}`;


  document.getElementById(
      "quizQuestionText")
    .textContent =item.q;


  const optionsWrapper =document.getElementById(
      "quizOptions");


  optionsWrapper.innerHTML = "";


  quizAnswered =false;


  document.getElementById("quizNextBtn")
    .style.display ="none";

  item.options.forEach(

    (optionText,index) => {const button =
        document.createElement(
          "button");


      button.className ="quiz-option";

      button.textContent =optionText;


      button.addEventListener("click",
        () => {
          selectAnswer(
            index,
            button
          );
        }
      );
      optionsWrapper.appendChild(button);}
  );
}

function selectAnswer(choiceIndex,buttonElement) {
  if (quizAnswered) {return;}

  quizAnswered =
    true;

  const item = QUIZ[quizIndex];
  const allButtons =document.querySelectorAll("#quizOptions .quiz-option");

  allButtons.forEach(

    button => {

      button.disabled =
        true;

    }

  );


  if (choiceIndex ===item.correct) {
    buttonElement.classList.add("correct")
    quizScore++;}
    
  else {buttonElement.classList.add("wrong");

    allButtons[item.correct].classList.add("correct");}


  document.getElementById("quizNextBtn")
    .style.display ="inline-block";}




document.getElementById("quizNextBtn")
  .addEventListener(
    "click",
    () => {
      quizIndex++;
      if (quizIndex <QUIZ.length) {
        renderQuestion();} 
      else {finishQuiz();}
    }
  );




function finishQuiz() {
  document.getElementById("resultScore")
    .textContent =
      `${quizScore}/${QUIZ.length}`;


  const messageElement =document.getElementById("resultMessage");

  messageElement.classList.remove("linkish");


  messageElement.onclick =null;

  let message;

  let linkToAlbums =false;




  if (quizScore <= 3) 
    {message ="Wanna learn more about the King of Pop?";
    linkToAlbums =true;} 

  else if (quizScore <= 6)
    {message ="Casual MJ Fan";
    linkToAlbums =true;}

  else if (quizScore <= 8)
    {message ="Dedicated Moonwalker";}
  else {message ="Ultimate MJ Fan";}


  messageElement.textContent =
    message;


  if (
    linkToAlbums
  ) {


    messageElement.classList.add(
      "linkish"
    );


    messageElement.onclick =
      () => {

        showScreen(
          "albums"
        );

      };

  }


  showScreen(
    "quiz-result"
  );

}




document.getElementById("playAgainBtn")
  .addEventListener("click",
    () => {
      resetQuiz();
      renderQuestion();
      showScreen("quiz-question");}
  );


document.getElementById("backHomeBtn")
  .addEventListener("click",
    () => {showScreen("home");}
  );

document.getElementById("homeFab")
  .addEventListener(
  "click",
    () => {showScreen("home");}
  );



document.getElementById("debugToggle")
  .addEventListener(
  "click",
    () => {document.body.classList.toggle("debug-hotspots");}
  );

const style =document.createElement(
"style");






style.textContent = `
  @keyframes popPulse {
    0% {
      transform: scale(1);
    }

    40% {
      transform: scale(1.015);
    }

    100% {
      transform: scale(1);
    }
  }

  .pop-pulse {
    animation: popPulse .3s ease;
  }
`;


document.head.appendChild(style);






document.getElementById("frame-splash")
  .querySelector("img")
  .src =IMG.splash;


document.getElementById("frame-home")
  .querySelector("img")
  .src =IMG.home;


document.getElementById("frame-about")
  .querySelector("img")
  .src =IMG.about;


document.getElementById("frame-albums")
  .querySelector("img")
  .src =IMG.albumsGrid;


document.getElementById("frame-quiz-intro")
  .querySelector("img")
  .src =IMG.quizIntro;




buildSplash();
buildHome();
buildAbout();
buildAlbumsGrid();
buildQuizIntro();