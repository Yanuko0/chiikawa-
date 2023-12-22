let menu=document.querySelector("#menu-bar");
//讓menu bar那邊 用document來抓資料.querySelector 是CSS最前面的值  抓的值叫"#menu-bar"
let navbar=document.querySelector(".navbar");
//讓navbar那邊 用document來抓資料.querySelector 是CSS最前面的值  抓的值叫"#navbar"


//按下menubar按鈕之後產生的變化
menu.onclick =() =>{     //按下menu.onclick時產生一個函數() 這個函數會去跑=>{ 程式內容  }  
    menu.classList.toggle("fa-times");
    //當menu被按下去的時候跑menu.classList.toggle("fa-times");
    //toggle是轉換
    //fa-times是導覽列上面的X 是從html 裡面Font Awesom來的
    navbar.classList.toggle("active");
    // navbar改變 轉換成"active"
} //會套用到css header .navbar .active 這邊

//回到上層按鈕
window.onscroll=()=>{
    //視窗 在移動滑鼠時會執行這個函數=>
    if(window.scrollY>60){
        //滑滑鼠 大於60時
        document.querySelector("#scroll-up").classList.add("active");
        //叫出document.querySelector("#scroll-up")的classList 再加上"active"
    }else{
        document.querySelector("#scroll-up").classList.remove("active");
        //叫出document.querySelector("#scroll-up")的classList 取消掉"active"
    }
}