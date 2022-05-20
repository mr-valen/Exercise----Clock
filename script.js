        setInterval(() => {
        
            let hours = document.getElementById("hours");
            let minutes = document.getElementById("minutes");
            let seconds = document.getElementById("seconds");
            let ampm = document.getElementById("ampm");
            
            let hh = document.getElementById("hh");
            let mm = document.getElementById("mm");
            let ss = document.getElementById("ss");

            let h_dot = document.querySelector(".h_dot");
            let m_dot = document.querySelector(".m_dot");
            let s_dot = document.querySelector(".s_dot");

            let h = new Date().getHours();
            let m = new Date().getMinutes();
            let s = new Date().getSeconds();
            let amp = 24 > h >= 12 ? "PM" : "AM";
            
            // 12 hs clock

            if (h > 12){
                h = h-12;
            }
            if (h === 0){
                h = 12;
            }
            // add 0 before single digit

            h = (h < 10)? h = "0" + h : h = "" + h
            m = (m < 10)? m = "0" + m : m = "" + m
            s = (s < 10)? s = "0" + s : s = "" + s


            hours.innerHTML = h;
            minutes.innerHTML = m;
            seconds.innerHTML = s;
            ampm.innerHTML = amp;

            hh.style.strokeDashoffset = 440 - (440*h) / 12;
            mm.style.strokeDashoffset = 440 - (440*m) / 60;
            ss.style.strokeDashoffset = 440 - (440*s) / 60;
            h_dot.style.transform = 'rotate('+(h*30)+'deg)';
            m_dot.style.transform = 'rotate('+(m*6)+'deg)';
            s_dot.style.transform = 'rotate('+(s*6)+'deg)';
            
        })
