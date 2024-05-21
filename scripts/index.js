// 更改h1标签中的内容
let myHeading = document.querySelector('h1');
console.log('myHeading:', myHeading);
myHeading.textContent = 'Hello world!';

// 给整个页面添加点击事件
document.querySelector('html').addEventListener('click',function(){
    // alert('Ouch! Stop poking me!');
})

// 更改图片
let myImage = document.querySelector('img')
myImage.onclick = function(){
  let src = myImage.getAttribute('src');
  if(src === 'images/firefox-icon.webp'){
    myImage.setAttribute("src", "images/weightLoss.jpg");
  }else{
    myImage.setAttribute('src','images/firefox-icon.webp')
  }
}

// 切换用户
let myButton = document.querySelector('button')
// let myHeading2 = document.querySelector('h1')
function setUserName (){
  // let myName = prompt('请输入你的名字')
  // localStorage.setItem('name',myName)
  // if(!localStorage.getItem('name')){
  //   setUserName()
  // }else{
  //   let storedName = localStorage.getItem('name')
  //   myHeading2.textContent = "Mozilla 酷毙了" + storedName;
  // }

    // if (!myName || myName === null) {
    //   setUserName();
    // } else {
    //   localStorage.setItem("name", myName);
    //   myHeading2.textContent = "Mozilla 酷毙了" + myName;
    // }
    window.location.href = "../yanhua.html";
}
myButton.onclick = ()=>{
  setUserName();
}
let myInput = document.querySelector('input')
myInput.onclick = ()=>{
  window.location.href = '../logon.html'
}
