window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.title');
    let savingsPage = document.querySelector('.savings_page'),
        enterInput = document.querySelector('.entering_input'),
        enterBtn = document.querySelectorAll('.myBtn'),
        theme = document.querySelector('.todo_list'),
        darkMode = localStorage.getItem('dark-mode'),
        sub = document.querySelectorAll('.bre')

    const applyStyle = (domNode, styleObject) => {
        for (const property in styleObject) {
            domNode.style[property] = styleObject[property];
        }
    }

 const domNodes = [];
    const styleTwo = (domNodes, styleObject) => {
        Array.from(domNodes).forEach(domNode => {
            for (const property in styleObject) {
                domNode.style[property] = styleObject[property];
            }
        })
    }

    const styleObject = {

        darkMode: {
            backgroundColor: '#000',
            color: '#fff',
            btn: {
                backgroundColor: 'red'
            },
            subtitle: {
                color: 'red'
            }

        },
        lightMode:{
            backgroundColor: '#fff',
            color: '#000',
            subtitle: {
                color: 'black'
            }
        },
        savingsDiv: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'lightgrey',
            color: '#000',
            marginBottom: '5px',
            padding: '10px',
            fontsize: '20px'
        },
        deleteBtn: {
            backgroundColor: 'dodgerblue',
            padding: '5px',
            borderRadius: '5px',
            border: 'none'
        }
    }


    const enableDarkMode = () => {
        applyStyle(theme, styleObject.darkMode)
        styleTwo(sub, styleObject.darkMode.subtitle)
        enterBtn[1].classList.remove("dark-mode-toggle");
        localStorage.setItem("dark-mode", "enabled");
    };
    const disableDarkMode = () => {
        applyStyle(theme, styleObject.lightMode)
        styleTwo(sub, styleObject.lightMode.subtitle)

        enterBtn[1].classList.add("dark-mode-toggle");
        localStorage.setItem("dark-mode", "disabled");
    };

    if (darkMode === "enabled") {
        enableDarkMode();
    }

    enterBtn[1].addEventListener("click", (e) => {
        darkMode = localStorage.getItem("dark-mode");
        if (darkMode === "disabled") {
            enableDarkMode();

        } else {
            disableDarkMode();
        }
    });




    const createDeleteBtn = (savingDiv) => {
        let deleteBtn = document.createElement('button');

        deleteBtn.innerHTML = 'Delete'

        applyStyle(deleteBtn, styleObject.deleteBtn)

        savingDiv.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', () => {
            savingDiv.remove();
        })
    }


    const createTodo = () => {

        if(enterInput.value.trim() === '') {
            alert("Enter task")
        }
        else {
            let savingsDiv = document.createElement('div'),
                text = document.createElement('div');

            savingsPage.appendChild(savingsDiv);
            savingsDiv.appendChild(text)

            applyStyle(savingsDiv, styleObject.savingsDiv)

            text.innerHTML = enterInput.value;

            enterInput.value = '';
            createDeleteBtn(savingsDiv)
        }
    }



    enterBtn[0].addEventListener('click', () => {
        createTodo()
    })

})
























