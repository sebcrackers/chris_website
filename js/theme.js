/* $(function () {

  bsCustomFileInput.init();

});


        // JavaScript for the countdown timer
        $(function () {
            const second = 1000,
                  minute = second * 60,
                  hour = minute * 60,
                  day = hour * 24;

            // Set the date for the 2024 Election Day (October 19, 2024 at 9:00 AM local time)
            const countDown = new Date("Oct 19, 2024 09:00:00").getTime();

            const x = setInterval(function() {
                const now = new Date().getTime();
                const distance = countDown - now;

                document.getElementById("days").innerText = Math.floor(distance / day);
                document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
                document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
                document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

                // When countdown is over
                if (distance < 0) {
                    document.getElementById("counterheadline").innerText = "It's Election Day!";
                    document.getElementById("countdown").style.display = "none";
                    clearInterval(x);
                }
            }, 1000);
        }()); 
        */