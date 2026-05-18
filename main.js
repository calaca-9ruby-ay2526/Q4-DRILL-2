function checkElec() {
    
    let degree = document.getElementById('degree').value;
    let humidity = document.getElementById('humidity').value

    let heat = Number(degree) + (0.33 * Number(humidity)) - 4

    if (Number(heat) >= 0 && Number(heat) <=27) {
        window.alert ("Heat Index:" + Number(heat) + "\nStatus: Cool/Comfortable");
    }
    else if (Number(heat) >= 28 && Number(heat) <=32) {
       window.alert ("Heat Index:" + Number(heat) + "\nStatus: Warm");
    }
    else if (Number(heat) >= 33 && Number(heat) <=37) {
       window.alert ("Heat Index:" + Number(heat) + "\nStatus: Hot");
    }
    else if (Number(heat) >= 38 && Number(heat) <=41) {
       window.alert ("Heat Index:" + Number(heat) + "\nStatus: Very hot/Caution");
    }
    else if (Number(heat) >= 42) {
        window.alert ("Heat Index:" + Number(heat) + "\nStatus: Extreme Heat/Danger");
    }
}