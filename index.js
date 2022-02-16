function timeConversion(s) {
let amPm = s.charAt(8);
let militaryHour = "";
if (amPm == "A") {
    if (s.substring(0, 2) == "12") {
        militaryHour = "00";
}
else {

}
}
}
/* These are all cases below:
   1.) 12 AM -> 00
   2.) 1AM to 12PM -> do nothing
   3.) 1PM to 11PM -> take original hour, add 12
Now that we have cases, we can just convert to if else statements. The first thing to do is create a variable to store AM or PM. let amPm = s.charAt(8) because index 8 is the capital A or capital P. Next thing to do is create another variable to store the hour that we converted. We can set that variable to empty string for now. Now we want to differentiate between AM or PM so we can use if statements for that. If amPm == A, and then we can have our else block hold all of our PM times. So now within this we have to detect our first case- that is midnight 12AM.  */