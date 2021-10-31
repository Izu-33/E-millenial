var product1 = {
    name: 'Samsung TV',
    price: 500000
};

var product2 = {
    name: 'Pixel 4a',
    price: 250000
};

var product3 = {
    name: 'PS5',
    price: 300000
};

var product4 = {
    name: 'Macbook Air',
    price: 800000
};

var product5 = {
    name: 'Apple Watch',
    price: 95000
};
var product6 = {
    name: 'Air Pods',
    price: 500000
};

var products = [product1, product2, product3, product4, product5, product6];
var counter = 0;
nfObject = new Intl.NumberFormat('en-US');

function addToCart1() {
    var cartCounter = document.getElementById('counter');
    var theBtn = document.getElementById('button1');
    if (theBtn.innerHTML == "REMOVE FROM CART") {
        theBtn.innerHTML = "ADD TO CART";
        theBtn.style.backgroundColor = '#ff9a3d';
        counter--;
        cartCounter.innerHTML = nfObject.format(counter);

        var tableRow = document.getElementById('row-1');
        tableRow.innerHTML = '';
    }else {
        theBtn.innerHTML = "REMOVE FROM CART";
        theBtn.style.backgroundColor = '#ffcd9e';
        counter++;
        cartCounter.innerHTML = counter;
        // Create new table row and table cells.
        tableRow = document.createElement('tr');
        tableRow.setAttribute('id', 'row-1');
        var cell1 = document.createElement('td');
        var cell2 = document.createElement('td');
        var cell3 = document.createElement('td');
        cell3.setAttribute('id', 'totalItemPrice1'); /**Target for later Use. */
        var cell4 = document.createElement('td');
        var cell5 = document.createElement('td');

        // Create buttons for cell 4.
        var outerDiv = document.createElement('div');
        var firstInnerDiv = document.createElement('div');
        var secondInnerDiv = document.createElement('div');

        var subButton = document.createElement('button');
        subButton.setAttribute('id', 'decrement1');
        subButton.setAttribute('class', 'filter');
        subButton.setAttribute('type', 'button');
        subButton.setAttribute('onclick', 'decrementQuantity1()');
        subButton.innerHTML = "-";

        var addButton = document.createElement('button');
        addButton.setAttribute('id', 'increment1');
        addButton.setAttribute('class', 'filter');
        addButton.setAttribute('type', 'button');
        addButton.setAttribute('onclick', 'incrementQuantity1()');
        addButton.innerHTML = "+";

        var quantity = document.createElement('p');
        quantity.setAttribute('id', 'qty1');
        var itemQuantity1 = 1;
        quantity.innerHTML = itemQuantity1;

        // Create remove button for cell 5.
        var removeButton = document.createElement('button');
        removeButton.setAttribute('type', 'button');
        removeButton.setAttribute('class', 'removeButton');
        removeButton.setAttribute('onclick', 'removeFromCart1()');
        removeButton.innerHTML = "Remove";

        // Get table body and append row. Then append cells to row.
        tableBody = document.getElementById('tbody');
        tableBody.appendChild(tableRow);

        tableRow.appendChild(cell1);
        tableRow.appendChild(cell2);
        tableRow.appendChild(cell3);
        tableRow.appendChild(cell4);
        tableRow.appendChild(cell5);

        // Put add and sub buttons together with quantity in a div.
        firstInnerDiv.appendChild(subButton);
        secondInnerDiv.appendChild(addButton);

        outerDiv.appendChild(firstInnerDiv);
        outerDiv.appendChild(quantity);
        outerDiv.appendChild(secondInnerDiv);

        // Put values in cells.
        cell1.innerHTML = counter;
        cell2.innerHTML = product1.name;
        cell3.innerHTML = product1.price;
        cell4.appendChild(outerDiv);
        cell5.appendChild(removeButton);

        var totalAmount = document.getElementById('total-amount');
        totalAmount.innerHTML = Number(totalAmount.innerHTML) + product1.price;
    }
}

function addToCart2() {
    var cartCounter = document.getElementById('counter');
    var theBtn = document.getElementById('button2');
    if (theBtn.innerHTML == "REMOVE FROM CART") {
        theBtn.innerHTML = "ADD TO CART";
        theBtn.style.backgroundColor = '#ff9a3d';
        counter--;
        cartCounter.innerHTML = nfObject.format(counter);
        var tableRow = document.getElementById('row-2');
        tableRow.innerHTML = '';
    }else {
        theBtn.innerHTML = "REMOVE FROM CART";
        theBtn.style.backgroundColor = '#ffcd9e';
        counter++;
        cartCounter.innerHTML = counter;
        // Create new table row and table cells.
        tableRow = document.createElement('tr');
        tableRow.setAttribute('id', 'row-2');
        var cell1 = document.createElement('td');
        var cell2 = document.createElement('td');
        var cell3 = document.createElement('td');
        cell3.setAttribute('id', 'totalItemPrice2');
        var cell4 = document.createElement('td');
        var cell5 = document.createElement('td');

        // Create buttons for cell 4.
        var outerDiv = document.createElement('div');
        var firstInnerDiv = document.createElement('div');
        var secondInnerDiv = document.createElement('div');

        var subButton = document.createElement('button');
        subButton.setAttribute('id', 'decrement2');
        subButton.setAttribute('class', 'filter');
        subButton.setAttribute('type', 'button');
        subButton.setAttribute('onclick', 'decrementQuantity2()');
        subButton.innerHTML = "-";

        var addButton = document.createElement('button');
        addButton.setAttribute('id', 'increment2');
        addButton.setAttribute('class', 'filter');
        addButton.setAttribute('type', 'button');
        addButton.setAttribute('onclick', 'incrementQuantity2()');
        addButton.innerHTML = "+";

        var quantity = document.createElement('p');
        quantity.setAttribute('id', 'qty2');
        var itemQuantity2 = 1;
        quantity.innerHTML = itemQuantity2;

        // Create remove button for cell 5.
        var removeButton = document.createElement('button');
        removeButton.setAttribute('type', 'button');
        removeButton.setAttribute('class', 'removeButton');
        removeButton.setAttribute('onclick', 'removeFromCart2()');
        removeButton.innerHTML = "Remove";

        // Get table body and append row. Then append cells to row.
        tableBody = document.getElementById('tbody');
        tableBody.appendChild(tableRow);

        tableRow.appendChild(cell1);
        tableRow.appendChild(cell2);
        tableRow.appendChild(cell3);
        tableRow.appendChild(cell4);
        tableRow.appendChild(cell5);

        // Put add and sub buttons together with quantity in a div.
        firstInnerDiv.appendChild(subButton);
        secondInnerDiv.appendChild(addButton);

        outerDiv.appendChild(firstInnerDiv);
        outerDiv.appendChild(quantity);
        outerDiv.appendChild(secondInnerDiv);

        // Put values in cells.
        cell1.innerHTML = counter;
        cell2.innerHTML = product2.name;
        cell3.innerHTML = product2.price;
        cell4.appendChild(outerDiv);
        cell5.appendChild(removeButton);

        var totalAmount = document.getElementById('total-amount');
        totalAmount.innerHTML = Number(totalAmount.innerHTML) + product2.price;
    }
}

function addToCart3() {
    var cartCounter = document.getElementById('counter');
    var theBtn = document.getElementById('button3');
    if (theBtn.innerHTML == "REMOVE FROM CART") {
        theBtn.innerHTML = "ADD TO CART";
        theBtn.style.backgroundColor = '#ff9a3d';
        counter--;
        cartCounter.innerHTML = nfObject.format(counter);
        var tableRow = document.getElementById('row-3');
        tableRow.innerHTML = '';
    }else {
        theBtn.innerHTML = "REMOVE FROM CART";
        theBtn.style.backgroundColor = '#ffcd9e';
        counter++;
        cartCounter.innerHTML = counter;
        // Create new table row and table cells.
        tableRow = document.createElement('tr');
        tableRow.setAttribute('id', 'row-3');
        var cell1 = document.createElement('td');
        var cell2 = document.createElement('td');
        var cell3 = document.createElement('td');
        cell3.setAttribute('id', 'totalItemPrice3');
        var cell4 = document.createElement('td');
        var cell5 = document.createElement('td');

        // Create buttons for cell 4.
        var outerDiv = document.createElement('div');
        var firstInnerDiv = document.createElement('div');
        var secondInnerDiv = document.createElement('div');

        var subButton = document.createElement('button');
        subButton.setAttribute('id', 'decrement3');
        subButton.setAttribute('class', 'filter');
        subButton.setAttribute('type', 'button');
        subButton.setAttribute('onclick', 'decrementQuantity3()');
        subButton.innerHTML = "-";

        var addButton = document.createElement('button');
        addButton.setAttribute('id', 'increment3');
        addButton.setAttribute('class', 'filter');
        addButton.setAttribute('type', 'button');
        addButton.setAttribute('onclick', 'incrementQuantity3()');
        addButton.innerHTML = "+";

        var quantity = document.createElement('p');
        quantity.setAttribute('id', 'qty3');
        var itemQuantity3 = 1;
        quantity.innerHTML = itemQuantity3;

        // Create remove button for cell 5.
        var removeButton = document.createElement('button');
        removeButton.setAttribute('type', 'button');
        removeButton.setAttribute('class', 'removeButton');
        removeButton.setAttribute('onclick', 'removeFromCart3()');
        removeButton.innerHTML = "Remove";

        // Get table body and append row. Then append cells to row.
        tableBody = document.getElementById('tbody');
        tableBody.appendChild(tableRow);

        tableRow.appendChild(cell1);
        tableRow.appendChild(cell2);
        tableRow.appendChild(cell3);
        tableRow.appendChild(cell4);
        tableRow.appendChild(cell5);

        // Put add and sub buttons together with quantity in a div.
        firstInnerDiv.appendChild(subButton);
        secondInnerDiv.appendChild(addButton);

        outerDiv.appendChild(firstInnerDiv);
        outerDiv.appendChild(quantity);
        outerDiv.appendChild(secondInnerDiv);

        // Put values in cells.
        cell1.innerHTML = counter;
        cell2.innerHTML = product3.name;
        cell3.innerHTML = product3.price;
        cell4.appendChild(outerDiv);
        cell5.appendChild(removeButton);


        var totalAmount = document.getElementById('total-amount');
        totalAmount.innerHTML = Number(totalAmount.innerHTML) + product3.price;
    }
}

function addToCart4() {
    var cartCounter = document.getElementById('counter');
    var theBtn = document.getElementById('button4');
    if (theBtn.innerHTML == "REMOVE FROM CART") {
        theBtn.innerHTML = "ADD TO CART";
        theBtn.style.backgroundColor = '#ff9a3d';
        counter--;
        cartCounter.innerHTML = nfObject.format(counter);

        var tableRow = document.getElementById('row-4');
        tableRow.innerHTML = '';
    }else {
        theBtn.innerHTML = "REMOVE FROM CART";
        theBtn.style.backgroundColor = '#ffcd9e';
        counter++;
        cartCounter.innerHTML = counter;
        // Create new table row and table cells.
        tableRow = document.createElement('tr');
        tableRow.setAttribute('id', 'row-4');
        var cell1 = document.createElement('td');
        var cell2 = document.createElement('td');
        var cell3 = document.createElement('td');
        cell3.setAttribute('id', 'totalItemPrice4');
        var cell4 = document.createElement('td');
        var cell5 = document.createElement('td');

        // Create buttons for cell 4.
        var outerDiv = document.createElement('div');
        var firstInnerDiv = document.createElement('div');
        var secondInnerDiv = document.createElement('div');

        var subButton = document.createElement('button');
        subButton.setAttribute('id', 'decrement4');
        subButton.setAttribute('class', 'filter');
        subButton.setAttribute('type', 'button');
        subButton.setAttribute('onclick', 'decrementQuantity4()');
        subButton.innerHTML = "-";

        var addButton = document.createElement('button');
        addButton.setAttribute('id', 'increment4');
        addButton.setAttribute('class', 'filter');
        addButton.setAttribute('type', 'button');
        addButton.setAttribute('onclick', 'incrementQuantity4()');
        addButton.innerHTML = "+";

        var quantity = document.createElement('p');
        quantity.setAttribute('id', 'qty4');
        var itemQuantity4 = 1;
        quantity.innerHTML = itemQuantity4;

        // Create remove button for cell 5.
        var removeButton = document.createElement('button');
        removeButton.setAttribute('type', 'button');
        removeButton.setAttribute('class', 'removeButton');
        removeButton.setAttribute('onclick', 'removeFromCart4()');
        removeButton.innerHTML = "Remove";

        // Get table body and append row. Then append cells to row.
        tableBody = document.getElementById('tbody');
        tableBody.appendChild(tableRow);

        tableRow.appendChild(cell1);
        tableRow.appendChild(cell2);
        tableRow.appendChild(cell3);
        tableRow.appendChild(cell4);
        tableRow.appendChild(cell5);

        // Put add and sub buttons together with quantity in a div.
        firstInnerDiv.appendChild(subButton);
        secondInnerDiv.appendChild(addButton);

        outerDiv.appendChild(firstInnerDiv);
        outerDiv.appendChild(quantity);
        outerDiv.appendChild(secondInnerDiv);

        // Put values in cells.
        cell1.innerHTML = counter;
        cell2.innerHTML = product4.name;
        cell3.innerHTML = product4.price;
        cell4.appendChild(outerDiv);
        cell5.appendChild(removeButton);

        var totalAmount = document.getElementById('total-amount');
        totalAmount.innerHTML = Number(totalAmount.innerHTML) + product4.price;
    }
}

function addToCart5() {
    var cartCounter = document.getElementById('counter');
    var theBtn = document.getElementById('button5');
    if (theBtn.innerHTML == "REMOVE FROM CART") {
        theBtn.innerHTML = "ADD TO CART";
        theBtn.style.backgroundColor = '#ff9a3d';
        counter--;
        cartCounter.innerHTML = nfObject.format(counter);
        var tableRow = document.getElementById('row-5');
        tableRow.innerHTML = '';
    }else {
        theBtn.innerHTML = "REMOVE FROM CART";
        theBtn.style.backgroundColor = '#ffcd9e';
        counter++;
        cartCounter.innerHTML = counter;
        // Create new table row and table cells.
        tableRow = document.createElement('tr');
        tableRow.setAttribute('id', 'row-5');
        var cell1 = document.createElement('td');
        var cell2 = document.createElement('td');
        var cell3 = document.createElement('td');
        cell3.setAttribute('id', 'totalItemPrice5');
        var cell4 = document.createElement('td');
        var cell5 = document.createElement('td');

        // Create buttons for cell 4.
        var outerDiv = document.createElement('div');
        var firstInnerDiv = document.createElement('div');
        var secondInnerDiv = document.createElement('div');

        var subButton = document.createElement('button');
        subButton.setAttribute('id', 'decrement5');
        subButton.setAttribute('class', 'filter');
        subButton.setAttribute('type', 'button');
        subButton.setAttribute('onclick', 'decrementQuantity5()');
        subButton.innerHTML = "-";

        var addButton = document.createElement('button');
        addButton.setAttribute('id', 'increment5');
        addButton.setAttribute('class', 'filter');
        addButton.setAttribute('type', 'button');
        addButton.setAttribute('onclick', 'incrementQuantity5()');
        addButton.innerHTML = "+";

        var quantity = document.createElement('p');
        quantity.setAttribute('id', 'qty5');
        var itemQuantity5 = 1;
        quantity.innerHTML = itemQuantity5;

        // Create remove button for cell 5.
        var removeButton = document.createElement('button');
        removeButton.setAttribute('type', 'button');
        removeButton.setAttribute('class', 'removeButton');
        removeButton.setAttribute('onclick', 'removeFromCart5()');
        removeButton.innerHTML = "Remove";

        // Get table body and append row. Then append cells to row.
        tableBody = document.getElementById('tbody');
        tableBody.appendChild(tableRow);

        tableRow.appendChild(cell1);
        tableRow.appendChild(cell2);
        tableRow.appendChild(cell3);
        tableRow.appendChild(cell4);
        tableRow.appendChild(cell5);

        // Put add and sub buttons together with quantity in a div.
        firstInnerDiv.appendChild(subButton);
        secondInnerDiv.appendChild(addButton);

        outerDiv.appendChild(firstInnerDiv);
        outerDiv.appendChild(quantity);
        outerDiv.appendChild(secondInnerDiv);

        // Put values in cells.
        cell1.innerHTML = counter;
        cell2.innerHTML = product5.name;
        cell3.innerHTML = product5.price;
        cell4.appendChild(outerDiv);
        cell5.appendChild(removeButton);

        var totalAmount = document.getElementById('total-amount');
        totalAmount.innerHTML = Number(totalAmount.innerHTML) + product5.price;
    }
}

function addToCart6() {
    var cartCounter = document.getElementById('counter');
    var theBtn = document.getElementById('button6');
    if (theBtn.innerHTML == "REMOVE FROM CART") {
        theBtn.innerHTML = "ADD TO CART";
        theBtn.style.backgroundColor = '#ff9a3d';
        counter--;
        cartCounter.innerHTML = nfObject.format(counter);
        var tableRow = document.getElementById('row-6');
        tableRow.innerHTML = '';
    }else {
        theBtn.innerHTML = "REMOVE FROM CART";
        theBtn.style.backgroundColor = '#ffcd9e';
        counter++;
        cartCounter.innerHTML = counter;
        // Create new table row and table cells.
        tableRow = document.createElement('tr');
        tableRow.setAttribute('id', 'row-6');
        var cell1 = document.createElement('td');
        var cell2 = document.createElement('td');
        var cell3 = document.createElement('td');
        cell3.setAttribute('id', 'totalItemPrice6');
        var cell4 = document.createElement('td');
        var cell5 = document.createElement('td');

        // Create buttons for cell 4.
        var outerDiv = document.createElement('div');
        var firstInnerDiv = document.createElement('div');
        var secondInnerDiv = document.createElement('div');

        var subButton = document.createElement('button');
        subButton.setAttribute('id', 'decrement6');
        subButton.setAttribute('class', 'filter');
        subButton.setAttribute('type', 'button');
        subButton.setAttribute('onclick', 'decrementQuantity6()');
        subButton.innerHTML = "-";

        var addButton = document.createElement('button');
        addButton.setAttribute('id', 'increment6');
        addButton.setAttribute('class', 'filter');
        addButton.setAttribute('type', 'button');
        addButton.setAttribute('onclick', 'incrementQuantity6()');
        addButton.innerHTML = "+";

        var quantity = document.createElement('p');
        quantity.setAttribute('id', 'qty6');
        var itemQuantity6 = 1;
        quantity.innerHTML = itemQuantity6;

        // Create remove button for cell 5.
        var removeButton = document.createElement('button');
        removeButton.setAttribute('type', 'button');
        removeButton.setAttribute('class', 'removeButton');
        removeButton.setAttribute('onclick', 'removeFromCart6()');
        removeButton.innerHTML = "Remove";

        // Get table body and append row. Then append cells to row.
        tableBody = document.getElementById('tbody');
        tableBody.appendChild(tableRow);

        tableRow.appendChild(cell1);
        tableRow.appendChild(cell2);
        tableRow.appendChild(cell3);
        tableRow.appendChild(cell4);
        tableRow.appendChild(cell5);

        // Put add and sub buttons together with quantity in a div.
        firstInnerDiv.appendChild(subButton);
        secondInnerDiv.appendChild(addButton);

        outerDiv.appendChild(firstInnerDiv);
        outerDiv.appendChild(quantity);
        outerDiv.appendChild(secondInnerDiv);

        // Put values in cells.
        cell1.innerHTML = counter;
        cell2.innerHTML = product6.name;
        cell3.innerHTML = product6.price;
        cell4.appendChild(outerDiv);
        cell5.appendChild(removeButton);

        var totalAmount = document.getElementById('total-amount');
        totalAmount.innerHTML = Number(totalAmount.innerHTML) + product6.price;
    }
}

// Open and close cart.
var modal = document.getElementById('modal-container');

function openCart() {
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';
}

function closeCart() {
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
}


// Increase item quantity.
function incrementQuantity1() {
     var blah = document.getElementById('qty1');
     var newQuant = Number(blah.innerHTML) + 1;
     blah.innerHTML = newQuant;
     var priceCell1 = document.getElementById('totalItemPrice1');
     priceCell1.innerHTML =  newQuant * product1.price;

     var totalAmount = document.getElementById('total-amount');
    totalAmount.innerHTML = Number(totalAmount.innerHTML) + product1.price;
}

function incrementQuantity2() {
     var blah = document.getElementById('qty2');
     var newQuant = Number(blah.innerHTML) + 1;
     blah.innerHTML = newQuant;
     var priceCell2 = document.getElementById('totalItemPrice2');
     priceCell2.innerHTML =  newQuant * product2.price;

     var totalAmount = document.getElementById('total-amount');
    totalAmount.innerHTML = Number(totalAmount.innerHTML) + product2.price;
}

function incrementQuantity3() {
     var blah = document.getElementById('qty3');
     var newQuant = Number(blah.innerHTML) + 1;
     blah.innerHTML = newQuant;
     var priceCell3 = document.getElementById('totalItemPrice3');
     priceCell3.innerHTML =  newQuant * product3.price;

     var totalAmount = document.getElementById('total-amount');
    totalAmount.innerHTML = Number(totalAmount.innerHTML) + product3.price;
}

function incrementQuantity4() {
    var blah = document.getElementById('qty4');
    var newQuant = Number(blah.innerHTML) + 1;
    blah.innerHTML = newQuant;
    var priceCell4 = document.getElementById('totalItemPrice4');
    priceCell4.innerHTML =  newQuant * product4.price;

    var totalAmount = document.getElementById('total-amount');
    totalAmount.innerHTML = Number(totalAmount.innerHTML) + product4.price;
}

function incrementQuantity5() {
     var blah = document.getElementById('qty5');
     var newQuant = Number(blah.innerHTML) + 1;
     blah.innerHTML = newQuant;
     var priceCell5 = document.getElementById('totalItemPrice5');
     priceCell5.innerHTML =  newQuant * product5.price;

     var totalAmount = document.getElementById('total-amount');
    totalAmount.innerHTML = Number(totalAmount.innerHTML) + product5.price;
}

function incrementQuantity6() {
    var blah = document.getElementById('qty6');
    var newQuant = Number(blah.innerHTML) + 1;
    blah.innerHTML = newQuant;
    var priceCell6 = document.getElementById('totalItemPrice6');
    priceCell6.innerHTML =  newQuant * product6.price;

    var totalAmount = document.getElementById('total-amount');
    totalAmount.innerHTML = Number(totalAmount.innerHTML) + product6.price;
}

// Decrease item quantity.
function decrementQuantity1() {
    var blah = document.getElementById('qty1');

    if (Number(blah.innerHTML) == 1){
        alert('You cannot have less than 1 item. If you wish to remove the item click remove.');
    }else {
        var newQuant = Number(blah.innerHTML) - 1;
        blah.innerHTML = newQuant;
        var priceCell1 = document.getElementById('totalItemPrice1');
        priceCell1.innerHTML =  newQuant * product1.price;

        var totalAmount = document.getElementById('total-amount');
        totalAmount.innerHTML = Number(totalAmount.innerHTML) - product1.price;
    }
}

function decrementQuantity2() {
    var blah = document.getElementById('qty2');

    if (Number(blah.innerHTML) == 1){
        alert('You cannot have less than 1 item. If you wish to remove the item click remove.');
    }else {
        var newQuant = Number(blah.innerHTML) - 1;
        blah.innerHTML = newQuant;
        var priceCell2 = document.getElementById('totalItemPrice2');
        priceCell2.innerHTML =  newQuant * product2.price;

        var totalAmount = document.getElementById('total-amount');
        totalAmount.innerHTML = Number(totalAmount.innerHTML) - product2.price;
    }
}

function decrementQuantity3() {
    var blah = document.getElementById('qty3');

    if (Number(blah.innerHTML) == 1){
        alert('You cannot have less than 1 item. If you wish to remove the item click remove.');
    }else {
        var newQuant = Number(blah.innerHTML) - 1;
        blah.innerHTML = newQuant;
        var priceCell3 = document.getElementById('totalItemPrice3');
        priceCell3.innerHTML =  newQuant * product3.price;

        var totalAmount = document.getElementById('total-amount');
        totalAmount.innerHTML = Number(totalAmount.innerHTML) - product3.price;
    }
}

function decrementQuantity4() {
    var blah = document.getElementById('qty4');

    if (Number(blah.innerHTML) == 1){
        alert('You cannot have less than 1 item. If you wish to remove the item click remove.');
    }else {
        var newQuant = Number(blah.innerHTML) - 1;
        blah.innerHTML = newQuant;
        var priceCell4 = document.getElementById('totalItemPrice4');
        priceCell4.innerHTML =  newQuant * product4.price;

        var totalAmount = document.getElementById('total-amount');
        totalAmount.innerHTML = Number(totalAmount.innerHTML) - product4.price;
    }
}

function decrementQuantity5() {
    var blah = document.getElementById('qty5');

    if (Number(blah.innerHTML) == 1){
        alert('You cannot have less than 1 item. If you wish to remove the item click remove.');
    }else {
        var newQuant = Number(blah.innerHTML) - 1;
        blah.innerHTML = newQuant;
        var priceCell5 = document.getElementById('totalItemPrice5');
        priceCell5.innerHTML =  newQuant * product5.price;

        var totalAmount = document.getElementById('total-amount');
        totalAmount.innerHTML = Number(totalAmount.innerHTML) - product5.price;
    }
}
function decrementQuantity6() {
    var blah = document.getElementById('qty6');

    if (Number(blah.innerHTML) == 1){
        alert('You cannot have less than 1 item. If you wish to remove the item click remove.');
    }else {
        var newQuant = Number(blah.innerHTML) - 1;
        blah.innerHTML = newQuant;
        var priceCell6 = document.getElementById('totalItemPrice6');
        priceCell6.innerHTML =  newQuant * product6.price;

        var totalAmount = document.getElementById('total-amount');
        totalAmount.innerHTML = Number(totalAmount.innerHTML) - product6.price;
    }
}

// Remove item from cart.
function removeFromCart1() {
    var tableRow = document.getElementById('row-1');
    var tableBody = document.getElementById('tbody');
    
    var priceCell1 = document.getElementById('totalItemPrice1');
    var totalAmount = document.getElementById('total-amount');
    totalAmount.innerHTML = Number(totalAmount.innerHTML) - Number(priceCell1.innerHTML);
    
    tableBody.removeChild(tableRow);

    var cartCounter = document.getElementById('counter');
    counter--;

    // Re-numbering the cart items. 
    var x = 1;
    for (var j = 0; j < tableBody.rows.length; j++) {
        tableBody.rows.item(j).cells[0].innerHTML = x;
        x++;
    }

    cartCounter.innerHTML = nfObject.format(counter);
    var theBtn = document.getElementById('button1');
    theBtn.innerHTML = 'ADD TO CART';
    theBtn.style.backgroundColor = '#ff9a3d';
}

function removeFromCart2() {
    var tableRow = document.getElementById('row-2');
    var tableBody = document.getElementById('tbody');
    
    var priceCell2 = document.getElementById('totalItemPrice2');
    var totalAmount = document.getElementById('total-amount');
    totalAmount.innerHTML = Number(totalAmount.innerHTML) - Number(priceCell2.innerHTML);
    
    tableBody.removeChild(tableRow);
    var cartCounter = document.getElementById('counter');
    counter--;

    // Re-numbering the cart items. 
    var x = 1;
    for (var j = 0; j < tableBody.rows.length; j++) {
        tableBody.rows.item(j).cells[0].innerHTML = x;
        x++;
    }

    cartCounter.innerHTML = nfObject.format(counter);
    var theBtn = document.getElementById('button2');
    theBtn.innerHTML = 'ADD TO CART';
    theBtn.style.backgroundColor = '#ff9a3d';
}

function removeFromCart3() {
    var tableRow = document.getElementById('row-3');
    var tableBody = document.getElementById('tbody');

    var priceCell3 = document.getElementById('totalItemPrice3');
    var totalAmount = document.getElementById('total-amount');
    totalAmount.innerHTML = Number(totalAmount.innerHTML) - Number(priceCell3.innerHTML);

    tableBody.removeChild(tableRow);
    var cartCounter = document.getElementById('counter');
    counter--;

    // Re-numbering the cart items. 
    var x = 1;
    for (var j = 0; j < tableBody.rows.length; j++) {
        tableBody.rows.item(j).cells[0].innerHTML = x;
        x++;
    }

    cartCounter.innerHTML = nfObject.format(counter);
    var theBtn = document.getElementById('button3');
    theBtn.innerHTML = 'ADD TO CART';
    theBtn.style.backgroundColor = '#ff9a3d';
}

function removeFromCart4() {
    var tableRow = document.getElementById('row-4');
    var tableBody = document.getElementById('tbody');

    var priceCell4 = document.getElementById('totalItemPrice4');
    var totalAmount = document.getElementById('total-amount');
    totalAmount.innerHTML = Number(totalAmount.innerHTML) - Number(priceCell4.innerHTML);

    tableBody.removeChild(tableRow);
    // tableRow.innerHTML = '';
    var cartCounter = document.getElementById('counter');
    counter--;

    // Re-numbering the cart items. 
    var x = 1;
    for (var j = 0; j < tableBody.rows.length; j++) {
        tableBody.rows.item(j).cells[0].innerHTML = x;
        x++;
    }

    cartCounter.innerHTML = nfObject.format(counter);
    var theBtn = document.getElementById('button4');
    theBtn.innerHTML = 'ADD TO CART';
    theBtn.style.backgroundColor = '#ff9a3d';
}

function removeFromCart5() {
    var tableRow = document.getElementById('row-5');
    var tableBody = document.getElementById('tbody');

    var priceCell5 = document.getElementById('totalItemPrice5');
    var totalAmount = document.getElementById('total-amount');
    totalAmount.innerHTML = Number(totalAmount.innerHTML) - Number(priceCell5.innerHTML);

    tableBody.removeChild(tableRow);
    var cartCounter = document.getElementById('counter');
    counter--;

    // Re-numbering the cart items. 
    var x = 1;
    for (var j = 0; j < tableBody.rows.length; j++) {
        tableBody.rows.item(j).cells[0].innerHTML = x;
        x++;
    }

    cartCounter.innerHTML = nfObject.format(counter);
    var theBtn = document.getElementById('button5');
    theBtn.innerHTML = 'ADD TO CART';
    theBtn.style.backgroundColor = '#ff9a3d';
}

function removeFromCart6() {
    var tableRow = document.getElementById('row-6');
    var tableBody = document.getElementById('tbody');

    var priceCell6 = document.getElementById('totalItemPrice6');
    var totalAmount = document.getElementById('total-amount');
    totalAmount.innerHTML = Number(totalAmount.innerHTML) - Number(priceCell6.innerHTML);

    tableBody.removeChild(tableRow);
    var cartCounter = document.getElementById('counter');
    counter--;

    // Re-numbering the cart items. 
    var x = 1;
    for (var j = 0; j < tableBody.rows.length; j++) {
        tableBody.rows.item(j).cells[0].innerHTML = x;
        x++;
    }
    
    cartCounter.innerHTML = nfObject.format(counter);
    var theBtn = document.getElementById('button6');
    theBtn.innerHTML = 'ADD TO CART';
    theBtn.style.backgroundColor = '#ff9a3d';
}

function emailValidation(){
	var emailInput = document.getElementById('emailInput');
	var emailError = document.getElementById('emailError');

	if (emailInput.value == ""){
		emailInput.style.borderColor = 'red';
		emailError.innerHTML = 'Please enter an email';
	}else if (!emailInput.value.includes('@')){
		emailInput.style.borderColor = 'red';
		emailError.innerHTML = 'Please enter a valid email';
	}else {
		emailInput.style.borderColor = 'green';
		emailError.innerHTML = '';
	}
}

function nameValidation(){
	var nameInput = document.getElementById('nameInput');
	var nameError = document.getElementById('nameError');

	if (nameInput.value == ""){
		nameInput.style.borderColor = 'red';
		nameError.innerHTML = 'Please enter your name';
	}else {
		nameInput.style.borderColor = 'green';
		nameError.innerHTML = '';
	}
}


function phoneConfirmation(){
    // var phoneFormat = /\d\d\d\d\d\d\d\d\d\d\d/;
    var pattern = /[0-9]{11}/;
	var phoneInput = document.getElementById('phoneInput');
	var phoneError = document.getElementById('phoneError');

	if (phoneInput.value == ""){
		phoneInput.style.borderColor = 'red';
		phoneError.innerHTML = 'Please add your phone number';
    }else if (pattern.test(phoneInput.value) == false) {
        phoneInput.style.borderColor = 'red';
		phoneError.innerHTML = 'Please enter a valid phone number';
	}else if (phoneInput.value.length < 11){
		phoneInput.style.borderColor = 'red';
		phoneError.innerHTML = 'Phone number cannot be ' + phoneInput.value.length + 'digits';
    }else {
		phoneInput.style.borderColor = 'green';
		phoneInput.style.backgroundColor = 'rgb(232, 240, 254)';
		phoneError.innerHTML = '';
	}
}


function checkOut() {
    var cartCounter = document.getElementById('counter');
    if (Number(cartCounter.innerHTML) == 0) {
        alert('Please select a product')
        return;
    } else if (nameInput.style.borderColor == 'red' || emailInput.style.borderColor == 'red') {
        alert('Please complete form');
        return;
    }else if (nameInput.value == "" || emailInput.value == "") {
        alert('Please complete form');
        return;
    }else {
        closeCart();
        payWithPaystack();
    }
}


function payWithPaystack() {
    // e.preventDefault();
    let handler = PaystackPop.setup({
      key: 'pk_test_782641ac1fb2dd96e12aedf184fae73bc7d49aa8', // Replace with your public key
      email: document.getElementById("emailInput").value,
      amount: Number(document.getElementById("total-amount").innerHTML) * 100,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      // label: "Optional string that replaces customer email"
      onClose: function(){
        alert('Window closed.');
      },
      callback: function(response){
        showSummary();
      }
    });
    handler.openIframe();
  }

// Show summary modal.
var summaryModal = document.getElementById('summary-modal-container');
var sumMod = document.getElementById('summary-modal');

function showSummary() {
    
    filterTable();
    var table = document.getElementById("payment-table");
    sumMod.appendChild(table);
    closeCart();

    summaryModal.style.opacity = '1';
    summaryModal.style.pointerEvents = 'auto';
    var customerName = document.getElementById('nameInput').value;
    var confirmationText = document.getElementById('order-confirmation');
    confirmationText.innerHTML = `Thank you ${customerName}. Your order has been received.`;
}

function closeSummary() {
    summaryModal.style.opacity = '0';
    summaryModal.style.pointerEvents = 'none';
    var cartCounter = document.getElementById('counter');
    counter = 0;
    cartCounter.innerHTML = counter;
    var buttons = document.getElementsByClassName('cart-button');
    // for (let i of buttons) {
    //     i.innerHTML = 'ADD TO CART';
    //     i.style.backgroundColor = '#ff9a3d';
    // }
    document.location.reload(true);
}


function filterTable() {
    var table = document.getElementById("payment-table"); 

    // Getting the rows in table.
    var row = table.rows;  

    // Removing the column at index(2).  
    var i = 2;
    for (var j = 0; j < row.length; j++) {

        // Deleting the ith cell of each row.
        row[j].deleteCell(i);
    }
    var k = 3;
    for (var j = 0; j < row.length; j++) {

        // Deleting the ith cell of each row.
        row[j].deleteCell(k);
    }

    var collection = document.getElementsByClassName('filter');
    for (let i of collection) {
        i.parentNode.removeChild(i);
    }
    var collection2 = document.getElementsByClassName('filter');
    for (let i of collection2) {
        i.parentNode.removeChild(i);
    }
    var collection3 = document.getElementsByClassName('filter');
    for (let i of collection3) {
        i.parentNode.removeChild(i);
    }
    var collection4 = document.getElementsByClassName('filter');
    for (let i of collection4) {
        i.parentNode.removeChild(i);
    }
}