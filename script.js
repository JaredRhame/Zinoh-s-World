var loopingTxt = ['create', 'zone out to music', 'play videos games', 'learn'];

        textSequence(0);
        function textSequence(i) {

            if (loopingTxt.length > i) {
                setTimeout(function() {
                    document.getElementById("sequence").innerHTML = loopingTxt[i];
                    textSequence(++i);
                }, 1500); // 1 second (in milliseconds)

            } else if (loopingTxt.length == i) { // Loop
                textSequence(0);
            }

        }
