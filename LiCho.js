let i = 0;

Slider(i);

function Slider(n) {
        i = i + n;

        slideShow(i);
}

function slideShow(num) {
        let sliders = document.querySelectorAll('.slider-img');

        if(num == sliders.length) {
                num = 0;
                i = 0;
        }
        if(num < 0) {
                num = sliders.length - 1;
                i = sliders.length - 1;
        }

        for(s of sliders) {
                s.style.display = "none";
        }

        sliders[num].style.display = "block";
}