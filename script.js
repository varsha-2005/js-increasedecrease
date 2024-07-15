let count = 0;
        
        document.getElementById("incbtn").onclick = function() {
            count++;
            document.getElementById("cntlabel").innerHTML = count;
        }
        
        document.getElementById("reset").onclick = function() {
            count = 0;
            document.getElementById("cntlabel").innerHTML = count;
        }
        
        document.getElementById("decbtn").onclick = function() {
            count--;
            document.getElementById("cntlabel").innerHTML = count;
        }