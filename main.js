const gnb_lis=document.querySelectorAll("#gnb>li");

// 각 1depth li를 반복하면서 이벤트연결
gnb_lis.forEach(li =>{

    // 마우스 포인터가 해당영역에 들어가면
    li.addEventListener("mouseenter",()=>{
        const sub = e.currentTarget.querySelector(".sub");
        sub.style.display = "block";

        //자식인 1depth a 요소는  활성화 유지
        const depth1 = e.currentTarget.children[0];
        depth1.classList.add("on")
    })

    li.addEventListener("mouseleave", e=>{
        const sub = e.currentTarget.querySelector(".sub");
        sub.style.display = "none"
        const depth1 = e.currentTarget.children[0];
        depth1.classList.remove("on")
    })

    li.addEventListener("focusin",()=>{
        const sub = e.currentTarget.querySelector(".sub");
        sub.style.display = "block"

        for(let li of gnb_lis){
            li.querySelector('a').classList.remove("on");
        }
    })
})