var exercise = {};

// add a zero to .get returns below 10
function addZero(i) {
    if (i<10) {
        i = "0" + i;
    }
    return i;
}

exercise.roman = function(time){

    //-------------------------------------
    //  YOUR CODE
    //    Return an object with roman time. 
    //    Time is reported using 6 columns.
    //
    //  For example, for 05:13:47 PM
    //    { 
    //       hour_col1 : 1, 
    //       hour_col2 : 7,
    //       min_col1  : 1, 
    //       min_col2  : 3, 
    //       sec_col1  : 4, 
    //       sec_col2  : 7
    //     };
    // 
    //-------------------------------------
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    hour = hour.addZero;
        var hour1 = hour.charAt(0);
        var hour2 = hour.charAt(1);

    min = min.addZero;
        var min1 = min.charAt(0);
        var min2 = min.charAt(1);

    sec = sec.addZero;
        var sec1 = sec.charAt(0);
        var sec2 = sec.charAt(1);

    var rTime = [hour1, hour2, min1, min2, sec1, sec2];
    return rTime
};

exercise.binary = function(time, col){

    //----------------------------------------------------------
    //  YOUR CODE
    //    Return an object with
    //    the binary clock values 
    //    for the given column
    //
    //  For example, for time 05:13:47 PM, and column hour_col2
    //    var binary = { 
    //        position8 : 'off', 
    //        position4 : 'on', 
    //        position2 : 'on', 
    //        position1 : 'on', 
    //    }; 
    // 
    //----------------------------------------------------------
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    var position1;
    var position2;
    var position4;
    var position8;
    
    // strip the required digits from the .get returns
    hour = hour.addZero;
        var hour1 = hour.charAt(0);
        var hour2 = hour.charAt(1);

    min = min.addZero;
        var min1 = min.charAt(0);
        var min2 = min.charAt(1);

    sec = sec.addZero;
        var sec1 = sec.charAt(0);
        var sec2 = sec.charAt(1);
    
    // address hour_col1
    if (col = hour_col1){
        var newHour1 = parseInt(hour1,2);
        position1 = Boolean(newHour1.toString()[0] = 1);
        position2 = Boolean(newHour1.toString()[1] = 1);
    }
     // address hour_col2
    if (col = hour_col2){
        var newHour2 = parseInt(hour2,2);
        position1 = Boolean(newHour2.toString()[0] = 1);
        position2 = Boolean(newHour2.toString()[1] = 1);
        position3 = Boolean(newHour2.toString()[2] = 1);
        position4 = Boolean(newHour2.toString()[3] = 1);
    }

    // address min_col1
    if (col = min_col1){
        var newMin1 = parseInt(min1,2);
        position1 = Boolean(newMin1.toString()[0] = 1);
        position2 = Boolean(newMin1.toString()[1] = 1);
        position3 = Boolean(newMin1.toString()[2] = 1);
    }
    // address min_col2
    if (col = min_col2){
        var newMin2 = parseInt(min2,2);
        position1 = Boolean(newMin2.toString()[0] = 1);
        position2 = Boolean(newMin2.toString()[1] = 1);
        position3 = Boolean(newMin2.toString()[2] = 1);
        position4 = Boolean(newMin2.toString()[3] = 1);
    }

    // address sec_col1
    if (col = sec_col1){
        var newSec1 = parseInt(sec1,2);
        position1 = Boolean(newSec1.toString()[0] = 1);
        position2 = Boolean(newSec1.toString()[1] = 1);
        position3 = Boolean(newSec1.toString()[2] = 1);
    }
    // address sec_col2 
    if (col = sec_col2){
        var newSec2 = parseInt(sec2,2);
        position1 = Boolean(newSec2.toString()[0] = 1);
        position2 = Boolean(newSec2.toString()[1] = 1);
        position3 = Boolean(newSec2.toString()[2] = 1);
        position4 = Boolean(newSec2.toString()[3] = 1);
    }
    var binary = {position1,position2,position3,position4};
return binary; 
};
