$(function(){
        $(".main-menu__link, .links__item").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });

        $('.popup-content').magnificPopup({
            type: 'inline'
        });
});

var portfolio = new Vue({
        el: "#portfolio-section",
        data: {
                projects: [
                        {
                                name: "Beambox", 
                                description: "Beambox is a website template with well balanced colors and a nice design.",
                                image: "img/beambox.jpg",
                                link: "#project-modal-1"
                        },
                        {
                                name: "Limelight", 
                                description: "This multipurpose website covers many possibilities, from blogging to showcasing portfolios.",
                                image: "img/limelight.png",
                                link: "#project-modal-2"
                        },
                        {
                                name: "Ten-x", 
                                description: "Dark landing page.",
                                image: "img/ten-x.jpg",
                                link: "#project-modal-3"
                        },
                        {
                                name: "Beambox", 
                                description: "Another landing page.",
                                image: "img/seo.maza.png",
                                link: "#project-modal-4"
                        }
                ]
        }
});