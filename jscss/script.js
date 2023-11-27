const words = ["Hanifah Zakiyyah..", "A Mother..", "A Wife...", "Moslema Developer..", "web Programmer"]
            
            let cursor = gsap.to(".cursor", {
                opacity: 0,
                ease: "power2.inOut",
                repeat: -1
            })

            let boxTl = gsap.timeline();
            // boxTl.to(".box", {
            //     duration: 1,
            //     width: "100px",
            //     delay: 0.5,
            //     ease: "power4.inOut"
            boxTl.from(".hi", {
                duration: 1,
                delay:.5,
                y: "-40px",
                ease: "power3.out"
                // onComplete: () => masterTl.play()
            }).from(".i", {
                duration:1,
                delai:2,
                y:"-40px",
                ease: "power3.out",
                onComplete: ()=> masterTl.play()
            // }).to(".box", {
            //     duration: 1,
            //     height: "30px",
            //     ease: "elastic.out"
            // }).to(".box", {
            //     duration:2,
            //     autoAlpha:0.5,
            //     yoyo: true, 
            //     repeat: -1
            })

            let masterTl = gsap.timeline({
                repeat:-1,
                delay: 1
            }).pause()

            words.forEach(word => {
                let tl = gsap.timeline({
                    repeat: 1,
                    yoyo: true,
                    repeatDelay: 1
                })
                tl.to(".text", {
                    duration: 1,
                    text: word
                });
                masterTl.add(tl);
            })