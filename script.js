// Function to create a button element
function createButton(text, onclick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.onclick = onclick;
    return button;
}

// Function to append the button to the calculator keys
function appendButton(text, onclick) {
    const keys = document.getElementById('keys');
    const button = createButton(text, onclick);
    keys.appendChild(button);
}

// Function to append characters to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to evaluate and display the result
function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Creating buttons dynamically and appending event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Digits and operators
    
   
    // Clear and equals buttons
    appendButton('C', clearDisplay);
    appendButton('<-', deleteLastDigit);
    appendButton('.', function () {
        appendToDisplay('.');
    });
    appendButton('X', function () {
        appendToDisplay('*');
    });

    // for (let i = 9; i >= 0; i--) {
    //     appendButton(i, function () {
    //         appendToDisplay(i);
    //     });
    // }
    for (let i = 7; i <= 9; i++) {
        appendButton(i, function () {
            appendToDisplay(i);
        });
    }

    appendButton('/', function () {
        appendToDisplay('/');
    });

    for (let i = 4; i <= 6; i++) {
        appendButton(i, function () {
            appendToDisplay(i);
        });
    }

    appendButton('-', function () {
        appendToDisplay('-');
    });

    for (let i = 1; i <= 3; i++) {
        appendButton(i, function () {
            appendToDisplay(i);
        });
    }

    
    appendButton('+', function () {
        appendToDisplay('+');
    });

    appendButton("0", function () {
        appendToDisplay("0");
    });

    appendButton("00", function () {
        appendToDisplay("00");
    });


    


    appendButton('=', calculate);

    // Function to delete the last character from the display
function deleteLastDigit() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}
});