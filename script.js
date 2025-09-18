//your JS code here. If required.
const line = document.getElementById("line")
        let angle = 0

        function rotate() {
            // console.log(angle)
            line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`
            angle += 2
        }

        setInterval(rotate, 20)