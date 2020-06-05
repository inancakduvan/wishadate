let dayDefault = 4;
let monthDefault = 6;
let yearDefault = 2017;

const monthDaysAmount = {
    "January": 31,
    "February": 28,
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31
}

const monthsNames = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}

const daysNames = {
    "-1": "Sun",
    0: "Mon",
    1: "Tue",
    2: "Wed",
    3: "Thu",
    4: "Fri",
    5: "Sat",
    6: "Sun"
}

function wishadate(wishadateConfig) {
    // Event Listeners
    window.addEventListener("load", function () {
        document.getElementById("wishadate").innerHTML = '<div class="wishadate-container"> \
            <div class="wishadate-body" > \
                <div class="wishadate-header"> \
                    <div class="wishadate-header-left" onclick="wishadateBack()"> \
                        <i class="fas fa-chevron-left"></i> \
                    </div> \
                    <div class="wishadate-header-mid"> \
                        <span id="wishadate-month" data-month="6">June</span> / \
                    <span id="wishadate-year">2020</span> \
                    </div> \
                    <div class="wishadate-header-right" onclick="wishadateForth()"> \
                        <i class="fas fa-chevron-right"></i> \
                    </div> \
                </div> \
                <div class="wishadate-days"> \
                    <div class="wishadate-days-item wishadate-days-item-active" data-day="1" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">1</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="2" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">2</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="3" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">3</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="4" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">4</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="5" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">5</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="6" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">6</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="7" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">7</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="8" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">8</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="9" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">9</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="10" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">10</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="11" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">11</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="12" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">12</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="13" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">13</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="14" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">14</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="15" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">15</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="16" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">16</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="17" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">17</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="18" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">18</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="19" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">19</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="20" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">20</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="21" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">21</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="22" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">22</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="23" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">23</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="24" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">24</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="25" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">25</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="26" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">26</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="27" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">27</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="28" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">28</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="29" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">29</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="30" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">30</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                    <div class="wishadate-days-item" data-day="31" onclick="setDate(event,wishadateConfig)"> \
                        <div class="wishadate-days-num"> \
                            <div class="wishadate-days-num-text">31</div> \
                            <div class="wishadate-days-name">Tue</div> \
                        </div> \
                    </div> \
                </div> \
        </div > \
    </div > '
    })

    // Set defaults
    window.addEventListener("load", function () {

        const date = new Date();
        const day = date.getDay();
        const month = date.getMonth();
        const year = date.getFullYear();

        dayDefault = day;
        monthDefault = month + 1;
        yearDefault = year;

        monthDaysAmount[monthsNames[month - 1]] = new Date(year, month - 1, 0).getDate();

        document.getElementById("wishadate-month").innerHTML = monthsNames[monthDefault];
        document.getElementById("wishadate-year").innerHTML = yearDefault;

        const daysNum = document.querySelectorAll(".wishadate-days-num");
        for (let i = 0; i < daysNum.length; i++) {
            daysNum[i].style.background = "transparent";
        }

        if (wishadateConfig) {
            if (wishadateConfig.background) {
                daysNum[dayDefault - 1].style.background = wishadateConfig.background;
            } else {
                daysNum[dayDefault - 1].style.background = "#d7a385";
            }

            if (wishadateConfig.text) {
                daysNum[dayDefault - 1].style.color = wishadateConfig.text;
            } else {
                daysNum[dayDefault - 1].style.color = "#000";
            }
        } else {
            daysNum[dayDefault - 1].style.background = "#d7a385";
            daysNum[dayDefault - 1].style.color = "#000";
        }

        const dayName = new Date(year, month, day).getUTCDay();
        daysNum[dayDefault - 1].classList.add("wishadate-days-num-active");
        document.querySelector(".wishadate-days-num-active .wishadate-days-name").innerHTML = daysNames[dayName];

        const elements = document.querySelectorAll(".wishadate-days-item");
        for (let i = 0; i < elements.length; i++) {
            if (i + 1 > monthDaysAmount[monthsNames[month - 1]]) {
                elements[i].classList.add("wishadate-days-item-inactive")
            }
        }
    })

    // Set styles
    window.addEventListener("load", function () {
        setTimeout(function () {
            if (wishadateConfig) {
                if (wishadateConfig.background) {
                    document.querySelector(".wishadate-header").style.background = wishadateConfig.background;
                    document.querySelector(".wishadate-days").style.borderColor = wishadateConfig.background;
                }

                if (wishadateConfig.text) {
                    document.querySelector(".wishadate-header").style.color = wishadateConfig.text;
                }
            }

            document.getElementById("wishadate-trigger").addEventListener("click", function () {
                document.querySelector(".wishadate-container").classList.add("wishadate-container-active");
                document.querySelector(".wishadate-body").classList.add("wishadate-body-active");
            })

            document.getElementById("wishadate").addEventListener("click", function (event) {
                if (event.target.getAttribute("class") === "wishadate-container wishadate-container-active") {
                    event.target.classList.remove("wishadate-container-active");
                    document.querySelector(".wishadate-body").classList.remove("wishadate-body-active");
                }
            })
        }, 0)
    })
}

// Set Date
function setDate(event, wishadateConfig) {
    const day = event.target.getAttribute("data-day");
    const month = parseInt(document.getElementById("wishadate-month").getAttribute("data-month") - 1);
    const year = document.getElementById("wishadate-year").innerHTML;
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    const date = new Date(year, month, day, hour, minutes, seconds);

    dayDefault = day;

    const daysNum = document.querySelectorAll(".wishadate-days-num");
    for (let i = 0; i < daysNum.length; i++) {
        daysNum[i].style.background = "transparent";
        daysNum[i].style.color = "#000";
    }

    if (wishadateConfig) {
        if (wishadateConfig.background) {
            event.target.childNodes[1].style.background = wishadateConfig.background;
        } else {
            event.target.childNodes[1].style.background = "#d7a385";
        }

        if (wishadateConfig.text) {
            event.target.childNodes[1].style.color = wishadateConfig.text;
        } else {
            event.target.childNodes[1].style.color = "#000";
        }
    } else {
        event.target.childNodes[1].style.background = "#d7a385";
        event.target.childNodes[1].style.color = "#000";
    }

    document.querySelector(".wishadate-container").classList.add("wishadate-container-inactive");
    setTimeout(function () {
        document.querySelector(".wishadate-container").classList.remove("wishadate-container-inactive");
        document.querySelector(".wishadate-container").classList.remove("wishadate-container-active");
        document.querySelector(".wishadate-body").classList.remove("wishadate-body-active");
    }, 500)

    const dayName = date.getUTCDay();
    document.querySelector(".wishadate-days-num-active").classList.remove("wishadate-days-num-active");
    event.target.childNodes[1].classList.add("wishadate-days-num-active");
    document.querySelector(".wishadate-days-num-active .wishadate-days-name").innerHTML = daysNames[dayName - 1];


    console.log(dayName)
    wishadateCallback(date);
}

// Go Forth
function wishadateForth() {
    monthDefault++;

    if (monthDefault > 12) {
        monthDefault = 1;

        yearDefault++;
        document.getElementById("wishadate-year").innerHTML = yearDefault;
    }

    monthDaysAmount[monthsNames[monthDefault]] = new Date(yearDefault, monthDefault, 0).getDate();

    document.getElementById("wishadate-month").setAttribute("data-month", monthDefault)
    document.getElementById("wishadate-month").innerHTML = monthsNames[monthDefault];

    const dayName = new Date(yearDefault, monthDefault - 1, dayDefault).getUTCDay();
    document.querySelector(".wishadate-days-num-active .wishadate-days-name").innerHTML = daysNames[dayName];

    const inactives = document.querySelectorAll(".wishadate-days-item-inactive");
    for (let i = 0; i < inactives.length; i++) {
        inactives[i].classList.remove("wishadate-days-item-inactive");
    }

    const elements = document.querySelectorAll(".wishadate-days-item");
    for (let i = 0; i < elements.length; i++) {
        if (i + 1 > monthDaysAmount[monthsNames[monthDefault]]) {
            elements[i].classList.add("wishadate-days-item-inactive")
        }
    }
}

// Go Back
function wishadateBack() {
    monthDefault--;

    if (monthDefault < 1) {
        monthDefault = 12;

        yearDefault--;
        document.getElementById("wishadate-year").innerHTML = yearDefault;
    }

    monthDaysAmount[monthsNames[monthDefault]] = new Date(yearDefault, monthDefault, 0).getDate();

    document.getElementById("wishadate-month").setAttribute("data-month", monthDefault)
    document.getElementById("wishadate-month").innerHTML = monthsNames[monthDefault];

    const dayName = new Date(yearDefault, monthDefault - 1, dayDefault).getUTCDay();
    document.querySelector(".wishadate-days-num-active .wishadate-days-name").innerHTML = daysNames[dayName];

    const inactives = document.querySelectorAll(".wishadate-days-item-inactive");
    for (let i = 0; i < inactives.length; i++) {
        inactives[i].classList.remove("wishadate-days-item-inactive");
    }

    const elements = document.querySelectorAll(".wishadate-days-item");
    for (let i = 0; i < elements.length; i++) {
        if (i + 1 > monthDaysAmount[monthsNames[monthDefault]]) {
            elements[i].classList.add("wishadate-days-item-inactive")
        }
    }
}