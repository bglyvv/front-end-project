$(document).ready(function () {
    
    // back to top
    // let mybutton = document.getElementById("backtotop");
    // window.onscroll = function() {scrollFunction()};

    // function scrollFunction() {
    //     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    //         mybutton.style.display = "block";
    //     } 
    //     else {
    //         mybutton.style.display = "none";
    //     }
    // }

    // animation of backtotop
    // $(mybutton).mouseenter(function(){
    //     $(this).children().first().animate({"top":"-60%"})
    //     $(this).children().first().css({"top":"70%"})
    //     $(this).children().first().animate({"top":"32%"})
    // })

    // sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('nav').addClass("sticky");
        } else {
            $('nav').stop(true,true).removeClass("sticky");
        }
    });

    

    // function of navbar
    function myFunction(x) {
        if (x.matches) { // If media query matches
            $(".main").mouseenter(function () {
                $(this).children().last().css({ "display": "block" });
            })
            $(".main").mouseleave(function () {
                $(this).children().last().css({ "display": "none" });

            })

            // function of navbar arrows

            $(".rightarrow").mouseenter(function () {
                $(".rightarrowinfo").not($(this).next()).hide();
                $(this).children().last().fadeIn();
            })

            $(".rightarrow").mouseleave(function () {
                $(this).children().last().hide();

            })

            $(".leftarrow").mouseenter(function () {
                $(".leftarrowinfo").not($(this).next()).hide();
                $(this).children().last().fadeIn();
            })

            $(".leftarrow").mouseleave(function () {
                $(this).children().last().hide();

            })

        } else {
            $(".fa-window-close").click(function(){
                $(".sidebar").animate({"right":"-1000px"})
            })
            $(".fa-bars").click(function(){
                $(".sidebar").animate({"right":"0"})
            })
            $(".main").click(function (event) {
                $(".content").not($(this).children().last()).hide();
                $(this).children().last().not($(".subcontent")).css({ "display": "block" });
                if($(this)==$(".subcontent").parent().parent().parent()){
                    console.log("hello")
                }
            })
            $(".subs").click(function () {
                $(".subcontent").not($(this).children().last()).hide();
                $(this).children().last().css({ "display": "block" });
            })
            $(".rightarrow").click(function (event) {
                event.preventDefault()
                $(".rightarrowinfo").not($(this).next()).hide();
                $(this).children().last().fadeIn();
            })

            $(".leftarrow").click(function () {
                event.preventDefault()
                $(".leftarrowinfo").not($(this).next()).hide();
                $(this).children().last().fadeIn();
            })
        }
    }

    var x = window.matchMedia("(min-width: 992px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes



    // function of slider arrows

    $(".next").click(next)

    $(".next").mouseenter(function () {
        $("#slider .images .item .nextnumber").fadeIn()
    })

    $(".next").mouseleave(function () {
        $("#slider .images .item .nextnumber").fadeOut()
    })

    $(".prev").click(prev)

    $(".prev").mouseenter(function () {
        $("#slider .images .item .prevnumber").fadeIn()
    })

    $(".prev").mouseleave(function () {
        $("#slider .images .item .prevnumber").fadeOut()
    })


    let interval = setInterval(next, 3000)



    $(".next,.prev").click(function () {
        clearInterval(interval)
        interval = setInterval(next, 3000);
    })

    function next() {
        var currentImg = $(".active");
        var nextImg = currentImg.next();

        if (nextImg.length == 1) {
            currentImg.removeClass("active");
            nextImg.addClass("active");
            $("#slider .images .item .nextnumber").text("0" + ($(".active").index() + 2))
            if ($(".active").index() + 2 > $("#slider .images .item").length) {
                $("#slider .images .item .nextnumber").text("0" + 1)
            }

            $("#slider .images .item .prevnumber").text("0" + ($(".active").index()))
            if ($(".active").index() + 2 > $("#slider .images .item").length) {
                $("#slider .images .item .nextnumber").text("0" + 1)
            }
        }



        else {
            $("#slider .images .item .nextnumber").text("0" + 2)
            $("#slider .images .item .prevnumber").text("0" + ($("#slider .images .item").length))
            currentImg.removeClass("active")
            nextImg = $(".images").children().first();
            nextImg.addClass("active")
        }


    }


    function prev() {
        var currentImg = $(".active");
        var prevImg = currentImg.prev();



        if (prevImg.length == 1) {
            currentImg.removeClass("active");
            prevImg.addClass("active")
            console.log($(".active").index())

            $("#slider .images .item .nextnumber").text("0" + ($(".active").index() + 2))
            if ($(".active").index() + 2 > $("#slider .images .item").length) {
                $("#slider .images .item .nextnumber").text("0" + 1)
            }

            $("#slider .images .item .prevnumber").text("0" + ($(".active").index()))
            if ($(".active").index() == 0) {
                $("#slider .images .item .prevnumber").text("0" + ($(".item").length))
            }
        }



        else {
            $("#slider .images .item .prevnumber").text("0" + ($("#slider .images .item").length - 1))
            $("#slider .images .item .nextnumber").text("0" + 1)
            currentImg.removeClass("active")
            prevImg = $(".images").children().last();
            prevImg.addClass("active")
        }


    }



    // Add to cart display

    $(".types .flower").mouseenter(function () {
        let text = $(this).children().last()
        text.children().eq(2).stop(true, true).animate({ "margin-right": "-400px" })
        text.children().eq(1).children().first().stop(true, true).animate({ "margin-left": "0px" })
    })
    $(".types .flower").mouseleave(function () {
        let text = $(this).children().last()
        text.children().eq(2).stop(true, true).animate({ "margin-right": "0px" })
        text.children().eq(1).children().first().stop(true, true).animate({ "margin-left": "-170px" })

    })


    // tab menu
    let menu = document.querySelectorAll("#flowers .list ul li a")
    let types = document.querySelectorAll("#flowers .types .type")


    for (let element of menu) {
        element.onclick = function () {
            document.querySelector(".activeflower").classList.remove("activeflower");
            this.classList.add("activeflower")
            let data_id = this.getAttribute("data-id")
            for (let type of types) {
                if (data_id == type.getAttribute("data-id")) {
                    document.querySelector(".activetype").classList.remove("activetype")
                    type.classList.add("activetype")
                }

            }
        }
    }



    //video section

    $("#video .video .outer,#video .video img").mouseenter(function () {
        $("#video .video img").css('transform', 'scale(' + 1.05 + ')')
    })
    $("#video .video img").mouseleave(function () {
        $("#video .video img").css('transform', 'scale(' + 1 + ')')
    })

    $("#video .video .outer").click(function () {
        window.location = "https://www.youtube.com/watch?time_continue=1&v=K-0cjGCNYfs&_ga=2.126556296.4699611.1577879082-1931381707.1577026708"
    })

    // email section

    function isInViewport(node) {
        var rect = node.getBoundingClientRect()
        return (
          (rect.height > 0 || rect.width > 0) &&
          rect.bottom >= 0 &&
          rect.right >= 0 &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        )
      }

      $(window).scroll(function() {
        var scrolled = $(window).scrollTop()
        $('#email').each(function(index, element) {
          var initY = $(this).offset().top
          var height = $(this).height()
        
          var visible = isInViewport(this)
          if(visible) {
            var diff = scrolled - initY
            var ratio = Math.round((diff / height) * 100)
            $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
          }
        })
      })



    // Add to cart local storage

    if (localStorage.getItem("cart") == null) {
        localStorage.setItem("cart", JSON.stringify([]));
    }

    let addtocartAll = document.querySelectorAll("#flowers .option")


    for (let addtocart of addtocartAll) {
        addtocart.onclick = function (event) {
            event.preventDefault();
            if (localStorage.getItem("cart") == null) {
                localStorage.setItem("cart", JSON.stringify([]));
            }
            let cart = JSON.parse(localStorage.getItem("cart"));
            
            let name = "" ;
            if(this.parentElement.firstElementChild.getAttribute("class")=="button view-cart oa option"){
                name=this.parentElement.parentElement.parentElement.parentElement.firstElementChild.innerText
            }
            else{
                name = this.parentElement.firstElementChild.innerText
            }
            console.log(name)

            let src = ""
            if(this.parentElement.firstElementChild.getAttribute("class")=="button view-cart oa option"){
                src = this.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.getAttribute("src")
            }
            else if(this.getAttribute("class") == "button justify-content-center option shop-listb"){
                src = this.parentElement.parentElement.previousElementSibling.getAttribute("src")
            }
            else if(this.getAttribute("class") == "option index"){
                src = this.parentElement.previousElementSibling.firstElementChild.getAttribute("src")
            }
            
            let price = 0;
            if(this.getAttribute("class")=="button view-cart oa option"){
                price = Number(this.parentElement.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.innerText)
            }
            else if(this.getAttribute("class")=="button justify-content-center option shop-listb"){
                price = 259
            }
            else if(this.getAttribute("class") == "option index"){
                price = Number(this.nextElementSibling.innerText)
            }

            // console.log(price)
            let count = 1
            if(this.getAttribute("class")=="button view-cart oa option"){
                count = Number(document.querySelector("main #flowers .info .counter-cart .counter .number .quantity").innerText)
            }

            let existingPro = cart.find(p => p.Name.toLowerCase() == name.toLowerCase());

            if (existingPro === undefined) {
                cart.push({
                    Name: name,
                    Src: src,
                    Price: price,
                    Count: count
                })

            }
            else {
                existingPro.Count += count;
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            countProduct()
            priceProduct()


        }
    }

    function countProduct() {
        let sum = 0
        let cart = JSON.parse(localStorage.getItem("cart"));
        for (let products of cart) {
            sum += products.Count
        }
        document.querySelector("header nav .icons .cart .bag .amount").innerText = sum

    }

    countProduct()

    function priceProduct() {
        let price = 0
        let cart = JSON.parse(localStorage.getItem("cart"));
        for (let products of cart) {
            price += products.Price * products.Count
        }
        document.querySelector("header nav .icons .total .price").innerText = "$" + price
        document.querySelector("header nav .icons .cart-dropdown .cart-bottom .subtotal-holder .amount p").innerText = "$" + price
    }

    priceProduct()


    // progress bar number animation

    let percentages = document.querySelectorAll("main #progress-bar .percentage");
    
    
    for(let percentage of percentages){
        let count = percentage.innerText
        let temp = 0
        function counting(){
            if(temp<count){
                setTimeout(function(){
                    percentage.innerText = temp;
                    temp+=1;
                    counting();
                },50)
            }
            else{
                setTimeout(function(){
                    percentage.innerText = count
                },1000)
            }
        }
        counting()
    }
    
    
    // accordions


    let sides = document.querySelectorAll("main #accordion .sides")

    for (let side of sides){
        let headers = side.querySelectorAll(".accordion .accordion-header")
        for(let header of headers){
            header.onclick = function(event){
                $(side.querySelectorAll(".accordion-body")).not($(this).next()).slideUp()
                $(this).next().slideToggle()
                $(side.querySelectorAll(".activeaccordion")).not($(this).parent()).removeClass("activeaccordion")
                $(this).parent().toggleClass("activeaccordion")
                
            }
        }
    }
     
    $("main #accordion .sides .accordion .accordion-header").hover(function(){
        $(this).addClass("activeheader")       
    },function(){
        $(this).removeClass("activeheader")
    })

    // tabs
    let tab_headers = document.querySelectorAll("main #tab .tab .tab-header h6")
    

    for(let tab_header of tab_headers){
        tab_header.onclick = function(){
            let side = this.parentElement.parentElement
            side.querySelector(".selected").classList.remove("selected");
            this.classList.add('selected')
            let data_id = this.getAttribute("data-id");
            let tab_contents = side.querySelectorAll("main #tab .tab .tab-body .content")
            console.log(tab_contents)
            for(let tab_content of tab_contents){
                tab_content.getAttribute("data-id")
                if(data_id == tab_content.getAttribute("data-id")){
                    console.log(data_id)
                    tab_content.classList.remove("d-none")
                    console.log(tab_content)
                }
                else{
                    tab_content.classList.add("d-none")
                }
            }
        }
    }

    // shop list
    $(".shop-list .image").mouseenter(function(){
        $(this).children().last().removeClass("d-none")
    })

    $(".shop-list .image").mouseleave(function(){
        $(this).children().last().addClass("d-none")
    })

    //  orange page

    
    $("main #flowers .info .counter-cart .counter .number .ascending").click(function(){
        let quantity = Number($("main #flowers .info .counter-cart .counter .number .quantity").text());
        quantity++;
        $("main #flowers .info .counter-cart .counter .number .quantity").text(quantity)
    })


    $("main #flowers .info .counter-cart .counter .number .descending").click(function(){
        let quantity = Number($("main #flowers .info .counter-cart .counter .number .quantity").text());
        console.log(quantity)
        quantity--;
        
        $("main #flowers .info .counter-cart .counter .number .quantity").text(quantity)
        if(quantity <= 1){
            $("main #flowers .info .counter-cart .counter .number .quantity").text(1);
        }

    })

    
    // review counter
    $("main .taboa .tab .tab-header .count").text($("main .taboa .tab .tab-body .customer").length)

    // add review
    $("input").focus(function(){
        $(this).css({"border-color":"black"})
    })
    $("input").blur(function(){
        $(this).css({"border-color":"#e8e8e8"})
    })

    $("#search-box").focus(function(){
        $(this).css({"border":"none"})
    })

    // owl carousel
    $('.featureditems').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause: true,
        direction:"prev",
        responsive:{
            0:{
                items:1
            },
            500:{
                items:3
            },
            1000:{
                items:4
            }
        },
        navText : ["<i class='fa fa-chevron-right fa-lg'></i>","<i class='fa fa-chevron-left fa-lg'></i>"]
    })
    

    $('.instagramowl').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:4
            },
            1000:{
                items:8
            }
        }
    })
    

    $("main #owl .item").mouseenter(function(){
        $(this).children().last().children().first().css({"visibility":"visible"})
    })

    $("main #owl .item").mouseleave(function(){
        $(this).children().last().children().first().css({"visibility":"hidden"})
    })

    // search icon
    $(".searchicon").click(function(){
        $(this).parent().next().toggleClass("d-none")
    })

    // backtotop
    if ($(window).scrollTop() > 500) {
        $('.back-to-top').show();
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.back-to-top').show();
        } else {
            $('.back-to-top').hide();
        }
    });

    $('.back-to-top').click(function () {
        $('html').animate({ scrollTop: 0 }, 'slow');
    });

    $('.back-to-top').hover(function () {
        $('.upper').animate({ "top": "-38%" }, 'fast');
        $('.lower').animate({ "top": "31%" }, 'fast');
    }, function () {
        $('.upper').animate({ "top": "31%" }, 'fast');
        $('.lower').animate({ "top": "100%" }, 'fast');
    });
    
})

