//This displays an alert to ask the visitor to subscribe (saved as a function)
function subscribe (){
    
    alert("Welcome to Marine Jungle!")
    var newsletterResponse = prompt("Would you like to subscribe to our monthly email newsletter? [y] = yes, [n] = no")
    
    if(newsletterResponse == "n" || newsletterResponse == "no"){
        alert("No problem, enjoy the rest of our website!")
    }
    
    if(newsletterResponse == "y" || newsletterResponse == "yes") {
        var emailAddress = prompt("Please enter your email address to subscribe:")
        alert(`Success! ${emailAddress} has been added to our mailing list!`)};
    }

    subscribe()


// Note on the subscribe function: I have tried several ways to try to get this message to appear only one/ on one page, but I can't get it to work.
// SOLUTION: will only appear on homepage as only index.html is linked to this JS code (appsub.js)

    // METHOD ONE:
    // if (window.location.href == "index.html"){
        // subscribe()
        // }

        // if (window.location.pathname =='index.html') {
        //     subscribe()
        // }

    // METHOD TWO:
        // var alerted = localStorage.getItem('alerted') || '';
        // if(alerted != 'yes'){
        //     subscribe()
        //     localStorage.setItem('alerted', 'yes');
        // }​​

    // METHOD 3:
    // var something = (function() {
    //     var executed = false;
    //     return function() {
    //         if (!executed) {
    //             executed = true;
    //             // do something
    //         }
    //     };
    // })();
    
    // something(); // "do something" happens
    // something(); // nothing happens

    // $(function){
    //     if($('body').is('.pageType')){
    //         subscribe()
    //     }}
