const string = `.skin 
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  *::before,
  *::after {
   box-sizing:border-box
  }
  
  body {
    background: #93b8ca;
  }
  
  .clearfix {
    content: "";
    display: block;
    clear: both;
  }
  
  .face_1 {
    margin: 25px auto;
    position: relative;
    width: 210px;
    height: 200px;
    background-color: #1e90ff;
    border: 2px solid #000000;
    border-radius: 47% 47% 45% 45%;
  }
  
  .face_2 {
    position: absolute;
    bottom: 0;
    left: 15px;
    width: 180px;
    height: 150px;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 50% 50% 45% 45%;
  }
  
  .eye_box {
    position: absolute;
    top: -27.5px;
    right: 45px;
    width: 90px;
    height: auto;
  }
  
  .eye_left,
  .eye_right {
    width: 45px;
    height: 55px;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 46%;
  }
  .eye_left {
    float: left;
  }
  .eye_right {
    float: right;
  }
  
  .puli_left,
  .puli_right {
    position: absolute;
    top: 30px;
    width: 10px;
    height: 10px;
    background-color: #000;
    border-radius: 50%;
  }
  .puli_left {
    left: 30px;
  }
  .puli_right {
    right: 30px;
  }
  
  .nose_1 {
    position: absolute;
    top: 18.5px;
    left: 75.5px;
    width: 25px;
    height: 25px;
    background-color: #ff0000;
    border: 2px solid #000;
    border-radius: 50%;
  }
  
  .nose_1_shadow {
    position: absolute;
    top: 5px;
    left: 11px;
    width: 11px;
    height: 11px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 2px 2px rgba(255, 255, 0.4);
  }
  
  .nose_2 {
    height: 70px;
    width: 1px;
    position: absolute;
    top: 42.5px;
    left: 88px;
    border-left: 2px solid #000000;
  }
  
  .mouth {
    position: absolute;
    top: 12.5px;
    left: 30px;
    height: 100px;
    width: 120px;
    border-bottom: 2px solid #000000;
    border-radius: 0 0 45% 45%;
  }
  
  .whisker_left,
  .whisker_right {
    position: absolute;
    top: 30px;
    width: 90px;
    height: 90px;
  }
  .whisker_left {
    left: 0;
  }
  .whisker_right {
    right: 0;
  }
  
  .whisker_left span:nth-child(1),
  .whisker_right span:nth-child(1) {
    position: absolute;
    top: 15px;
    height: 30px;
    width: 50px;
    border-top: 2px solid #000000;
  }
  .whisker_left span:nth-child(1) {
    left: 15px;
    transform: rotate(10deg);
  }
  .whisker_right span:nth-child(1) {
    right: 15px;
    transform: rotate(-10deg);
  }
  
  .whisker_left span:nth-child(2),
  .whisker_right span:nth-child(2) {
    position: absolute;
    top: 30px;
    height: 30px;
    width: 50px;
    border-top: 2px solid #000;
  }
  .whisker_left span:nth-child(2) {
    left: 17.5px;
  }
  .whisker_right span:nth-child(2) {
    right: 17.5px;
  }
  
  .whisker_left span:nth-child(3),
  .whisker_right span:nth-child(3) {
    position: absolute;
    top: 45px;
    height: 30px;
    width: 50px;
    border-top: 2px solid #000;
  }
  .whisker_left span:nth-child(3) {
    left: 21px;
    transform: rotate(-10deg);
  }
  .whisker_right span:nth-child(3) {
    right: 21px;
    transform: rotate(10deg);
  }
  
  .collar {
    position: absolute;
    top: 175px;
    left: 25px;
    width: 160px;
    height: 25px;
    background-color: #ff0000;
    border: 2px solid #000;
    border-radius: 30px;
  }
  .bell_1 {
    position: absolute;
    top: 7.5px;
    left: 65px;
    width: 30px;
    height: 30px;
    background-color: #ffff00;
    border: 2px solid #000;
    border-radius: 50%;
  }
  .bell_2 {
    position: absolute;
    top: 8.5px;
    left: -0.5px;
    width: 26.5px;
    height: 8px;
    border-top: 2px solid #000;
  }
  .bell_3 {
    position: absolute;
    top: 11px;
    left: -0.5px;
    width: 28.5px;
    height: 11.5px;
    border-top: 2px solid #000;
  }
  .bell_4 {
    position: absolute;
    top: 15px;
    left: 10px;
    width: 7.5px;
    height: 5px;
    background-color: #000;
    border-radius: 50%;
  }
  .bell_5 {
    position: absolute;
    top: 18.5px;
    left: 12.5px;
    width: 15px;
    height: 10px;
    border-left: 2px solid #000;
  }`;

export default string;
