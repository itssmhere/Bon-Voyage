var price = 0

function flight() {
    var arrival = document.getElementById("htmlArrival").value;
    var destination = document.getElementById("htmlDestination").value;
    var people = document.getElementById('htmlPeople').value;
    var trip = document.getElementById('htmlTrip').value;
    if (arrival == 'asia') {
        if (destination == 'europe') {
        	price += (1000*people*trip) ;
        }
        else if (destination == 'namerica') {
        	price += (1500*people*trip);
        }
        else {
        	price += (600*people*trip);
        }
        document.getElementById("flight").innerHTML = 'Your estimated cost is (in US dollars): ' + price;
    }
    else if (arrival == 'europe') {
        if (destination == 'asia') {
        	price += (1000*people*trip);
        }
        else if (destination == 'namerica') {
        	price += (1000*people*trip);
        }
        else {
        	price += (400*people*trip);
        }
        document.getElementById("flight").innerHTML = 'Your estimated cost is (in US dollars): ' + price;
    }
    else {
        if (destination == 'asia') {
        	price += (1500*people*trip);
        }
        else if (destination == 'europe') {
        	price += (1000*people*trip);
        }
        else {
        	price += (400*people*trip);
        }
        document.getElementById("flight").innerHTML = 'Your estimated cost is (in US dollars): ' + price;
    }
}
function meals() {
    var days = document.getElementById('htmlDays').value;
    totalMeals = days * 3
    document.getElementById("meals").innerHTML = totalMeals;
}
function food() {
    var cheap = document.getElementById("htmlCheap").value;
    var medium = document.getElementById('htmlMedium').value;
    var exp = document.getElementById('htmlExp').value;
    var ppl = document.getElementById('htmlPpl').value;
    var destination = document.getElementById("htmlDestination").value;
    if (destination == 'asia') {
        price += ((cheap*2)+(medium*8)+(exp*30))*ppl
    }
    else if (destination == 'europe') {
        price += ((cheap*12)+(medium*30)+(exp*65))*ppl
    }
    else {
        price += ((cheap*5)+(medium*20)+(exp*50))*ppl
    }
    document.getElementById("food").innerHTML = 'Your estimated cost is (in US dollars): ' + price;
}