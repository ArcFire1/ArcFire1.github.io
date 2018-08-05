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
                                link: "#project-modal-1",
                                modalLink: "project-modal-1",
                                modalImage: "img/beambox-full.png",
                                demoLink: false,
                                githubLink: "https://github.com/ArcFire1/beambox"
                        },
                        {
                                name: "Limelight", 
                                description: "This multipurpose website covers many possibilities, from blogging to showcasing portfolios.",
                                image: "img/limelight.png",
                                link: "#project-modal-2",
                                modalLink: "project-modal-2",
                                modalImage: "img/limelight-full.png",
                                demoLink: "http://l33654q5.beget.tech/",
                                githubLink: "https://github.com/ArcFire1/limelight"
                        },
                        {
                                name: "Ten-x", 
                                description: "Dark landing page.",
                                image: "img/ten-x.jpg",
                                link: "#project-modal-3",
                                modalLink: "project-modal-3",
                                modalImage: "img/ten-x-full.jpg",
                                demoLink: "http://j25774hd.beget.tech/",
                                githubLink: false
                        },
                        {
                                name: "Beambox", 
                                description: "Another landing page.",
                                image: "img/seo.maza.png",
                                link: "#project-modal-4",
                                modalLink: "project-modal-4",
                                modalImage: "img/seo.maza-full.png",
                                demoLink: false,
                                githubLink: false
                        }
                ]
        },
        methods: {
                isLinkAvailable: function(){
                        if (this.demoLink == "#") {

                        }
                }
        }
});