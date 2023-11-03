
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');
*{
    box-sizing : border-box;
}
.bottom-btn{
    background : ${({ theme }) => theme.textColor};
    padding : 5px;
    margin:.2rem;
    color : ${({ theme }) => theme.background};
    border : none;
    width : 40px;
    border-radius : 10px;
}
.bottom-span{
    font-size : 18px;
    padding : 10px;
}
.logo{
    font-family: 'Black Ops One', cursive;
    font-size : 30px;
}
.links{
    display:flex;
    justify-content : center;
    align-items : center;
    gap : 1rem;
}
.refresh{
    padding : 15px;
}
.btn-container{
    position : fixed;
    left : 40%;
    bottom : 10%;

}
div.header {
    width : 1000px;
    display: flex;
    justify-content: space-between;
    margin : 5%  auto 0  auto;

}

.user-profile{
    border-radius : 20px;
    background : ${({ theme }) => theme.textColor};
    color :  pink;
    height : auto;
    width : 1000px;
    display : flex;
    justify-content: space-around;
    margin : 0 auto;
}
.user{
    width : 50%;
    display : flex;
    margin-top : 30px;
    margin-bottom : 30px;
    font-size : 1.5rem;
    padding : 1rem;
    gap : 20%;
    justify-content : center;
    align-items : center;
    color : ${({ theme }) => theme.background};  
    border-right : 1px solid ${({ theme }) => theme.background};
}

.total-tests{
    padding : 5%;
    font-size : 30px
}
.table, .graph-user-page{
    margin : auto;
    width : 1000px;
}

.scroll-container {
    width: 200px;
    height: 500px;
    overflow: hidden;
    position: fixed;
    top : 10%;
    right : 2%;
    border : 1px solid black;
  }
  .content {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-right: 17px; /* Adjust as needed to prevent content from shifting */
    box-sizing: content-box;
  }

body{
    margin : 0;
    padding : 0;
    background:${({ theme }) => theme.background};
    color : ${({ theme }) => theme.textColor};  
    transition : all 0.25s linear;
}
  
//app main div
.canvas{
    display : grid;
    // min-height : 100vh;
    grid-template-row : auto 1fr auto;
    gap : 0.5rem;
    // padding : 2rem;
    width : 100vw;
    // align-items : center;
    // text-align : center;
}


//entair-input-box
.type-box{
    max-width : 1000px;
    // width : 100%;
    // height : 50%;
    // height : 140px;
    // margin : 0 auto 0 auto;
    position : fixed;
    top : 25%;
    left : 17%;
}

//words div
.words{
    font-size : 24px;
    display : flex;
    flex-wrap : wrap;
    color : ${({ theme }) => theme.typeBoxText}
}

//each word
.word{
    margin : 5px;
    padding-right :2px;
}

//user-input
.hidden-input{
    opacity : 0;
}

//current character
.current{
    border-left : 1px solid;
    animation : blinking 2s infinite;
    animation-timing-function : ease;
    @keyframes blinking{
        0%{border-left-color : ${({ theme }) => theme.textColor}}
        25%{border-left-color : ${({ theme }) => theme.background}}
        50%{border-left-color : ${({ theme }) => theme.textColor}}
        75%{border-left-color : ${({ theme }) => theme.background}}
        100%{border-left-color : ${({ theme }) => theme.textColor}}
    }
}

.current-right{
    border-right : 1px solid;
    animation : blinkingRight 2s infinite;
    animation-timing-function : ease;
    @keyframes blinkingRight{
        0%{border-right-color : ${({ theme }) => theme.textColor}}
        25%{border-right-color : ${({ theme }) => theme.background}}
        50%{border-right-color : ${({ theme }) => theme.textColor}}
        75%{border-right-color : ${({ theme }) => theme.background}}
        100%{border-right-color : ${({ theme }) => theme.textColor}}
    }
}

//change color of char if correct
.correct{
    color : green;
}

//change color of char if incorrect 
.incorrect{
    color : red;
}

.upper-menu{
    display : flex;
    justify-content : space-between;
    // align-items : center;
    margin-left : auto;
    margin-right : auto;
    width : 1000px;
   font-size : 1rem

}

.modes{
    display : flex;
    gap : 0.4rem;
}

.time-mode:hover{
    color : green;
    cursor : pointer;
}

.footer{
    width : 1000px;
    display : flex;
    justify-content : space-between;
    margin-left : auto;
    margin-right : auto;
    position : fixed;
    bottom : 3%;
    left : 17%;
}

.stats-box{
    display : flex;
    width : 1000px;
    height : auto;
    margin-left : auto;
    margin-right : auto;
}

.left-stats{
    width : 30%;
    padding : 30px;
}

.right-stats{
    width : 70%;    
}

.title{
    font-size : 20px;
    color : ${({ theme }) => theme.typeBoxText}}
}

.subtitle{
    font-size : 25px;
}



`;
