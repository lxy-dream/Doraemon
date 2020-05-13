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
    margin: 50px auto;
    position: relative;
    width: 420px;
    height: 400px;
    background-color: #1e90ff;
    border: 2px solid #000000;
    border-radius: 47% 47% 45% 45%;
  }
  
  .face_2 {
    position: absolute;
    bottom: 0;
    left: 30px;
    width: 360px;
    height: 300px;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 50% 50% 45% 45%;
  }
  
  .eye_box {
    position: absolute;
    top: -45px;
    right: 90px;
    width: 180px;
    height: auto;
  }
  
  .eye_left,
  .eye_right {
    width: 90px;
    height: 110px;
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
    top: 60px;
    width: 20px;
    height: 20px;
    background-color: #000;
    border-radius: 50%;
  }
  .puli_left {
    left: 60px;
  }
  .puli_right {
    right: 60px;
  }
  
  .nose_1 {
    position: absolute;
    top: 47px;
    left: 151px;
    width: 50px;
    height: 50px;
    background-color: #ff0000;
    border: 2px solid #000;
    border-radius: 50%;
  }
  
  .nose_1_shadow {
    position: absolute;
    top: 10px;
    left: 25px;
    width: 15px;
    height: 15px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 2px 2px rgba(255, 255, 0.4);
  }
  
  .nose_2 {
    height: 130px;
    width: 2px;
    position: absolute;
    top: 95px;
    left: 176px;
    border-left: 2px solid #000000;
  }
  
  .mouth {
    position: absolute;
    top: 25px;
    left: 60px;
    height: 200px;
    width: 240px;
    border-bottom: 2px solid #000000;
    border-radius: 0 0 45% 45%;
  }
  
  .whisker_left,
  .whisker_right {
    position: absolute;
    top: 60px;
    width: 180px;
    height: 180px;
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
    top: 30px;
    height: 60px;
    width: 100px;
    border-top: 2px solid #000000;
  }
  .whisker_left span:nth-child(1) {
    left: 30px;
    transform: rotate(20deg);
  }
  .whisker_right span:nth-child(1) {
    right: 30px;
    transform: rotate(-20deg);
  }
  
  .whisker_left span:nth-child(2),
  .whisker_right span:nth-child(2) {
    position: absolute;
    top: 60px;
    height: 60px;
    width: 100px;
    border-top: 2px solid #000;
  }
  .whisker_left span:nth-child(2) {
    left: 35px;
  }
  .whisker_right span:nth-child(2) {
    right: 35px;
  }
  
  .whisker_left span:nth-child(3),
  .whisker_right span:nth-child(3) {
    position: absolute;
    top: 90px;
    height: 60px;
    width: 100px;
    border-top: 2px solid #000;
  }
  .whisker_left span:nth-child(3) {
    left: 50px;
    transform: rotate(-20deg);
  }
  .whisker_right span:nth-child(3) {
    right: 50px;
    transform: rotate(20deg);
  }
  
  .collar {
    position: absolute;
    top: 350px;
    left: 50px;
    width: 320px;
    height: 50px;
    background-color: #ff0000;
    border: 2px solid #000;
    border-radius: 30px;
  }
  .bell_1 {
    position: absolute;
    top: 15px;
    left: 130px;
    width: 60px;
    height: 60px;
    background-color: #ffff00;
    border: 2px solid #000;
    border-radius: 50%;
  }
  .bell_2 {
    position: absolute;
    top: 17px;
    left: 1px;
    width: 53px;
    height: 16px;
    border-top: 2px solid #000;
  }
  .bell_3 {
    position: absolute;
    top: 22px;
    width: 57px;
    height: 23px;
    border-top: 2px solid #000;
  }
  .bell_4 {
    position: absolute;
    top: 30px;
    left: 20px;
    width: 15px;
    height: 10px;
    background-color: #000;
    border-radius: 50%;
  }
  .bell_5 {
    position: absolute;
    top: 37px;
    left: 27px;
    width: 30px;
    height: 20px;
    border-left: 2px solid #000;
  }`

export default string