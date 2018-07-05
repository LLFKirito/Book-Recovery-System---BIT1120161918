// event handlers for modal dialog

var login = document.getElementById('log');
var modal = document.getElementById('modal');
var close = document.getElementById('button-close');

login.onclick = function () {
    modal.style.display = 'block';
}

close.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function () {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// input validation

var username = document.getElementById('username');
var password = document.getElementById('password');
var warning_user = document.getElementById('warning-user');
var warning_pass = document.getElementById('warning-pass');

username.onfocus = function () {
    username.placeholder = '';
}

username.onblur = function () {
    username.placeholder = '';
}

username_validate = function (value) {
    if (value == 0) {
        return -1;
    }
    else {
        re = /^[a-zA-Z][0-9a-zA-Z]*$/
        if (!re.test(value)) {
            return 0;
        }
        else {
            return 1;
        }
    }
}

username.onchange = function () {
    result = username_validate(username.value)
    if (result == -1) {
        warning_user.innerText = 'Username is required!'
        warning_user.style.display = 'block';
    }
    else if (result == 0) {
        warning_user.innerText = 'Invalid username!'
        warning_user.style.display = 'block';
    }
    else {
        warning_user.style.display = 'none';
    }
}

password.onfocus = function () {
    password.placeholder = ''
}

password.onblur = function () {
    password.placeholder = ''
}

password_validation = function (value) {
    if (value.length == 0) {
        return -1;
    }
    else if (value.length < 6) {
        return 0;
    }
    else {
        return 1;
    }
}

password.onchange = function () {
    result = password_validation(password.value);
    if (result == -1) {
        warning_pass.innerText = 'Password is required!'
        warning_pass.style.display = 'block';
    }
    else if (result == 0) {
        warning_pass.innerText = 'Password is too short!'
        warning_pass.style.display = 'block';
    }
    else {
        warning_pass.style.display = 'none';
    }
}

// event handlers for the 'login' button

var button_login = document.getElementById('button-login')

button_login.onclick = function () {
    if (username_validate(username.value) <= 0) {
        event = document.createEvent('HTMLEvents');
        event.initEvent('change', false, true);
        username.dispatchEvent(event);
        return;
    }
    if (password_validation(password.value) <= 0) {
        event = document.createEvent('HTMLEvents');
        event.initEvent('change', false, true);
        password.dispatchEvent(event);
        return;
    }
    modal.style.display = 'none';
    login.innerText = 'Hi, ' + username.value
}

// event handlers for the 'top' button

button_top = document.getElementById('button-top');

button_top.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button_top.style.display = "block";
    } else {
        button_top.style.display = "none";
    }
}


// slideshow
