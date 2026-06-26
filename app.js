const form = document.querySelector('#form')
const pwd = document.querySelector('#pwd')
const login = document.querySelector('#login')
const loginLable = document.querySelector('#loginLable')
const pwdLable = document.querySelector('#pwdLable')
const error = document.querySelector('#error')
const skills = document.querySelectorAll(".skill");
const frame = document.getElementById("videoFrame");



const handleSubmit = (e) => {
    e.preventDefault()

    
    error.innerHTML = ""
    loginLable.innerHTML = ""
    pwdLable.innerHTML = ""

    login.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-500/20')
    pwd.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-500/20')

    if (login.value.trim().length > 8) {
        loginLable.innerHTML = "Login 8 tadan ko'p bo'lmasligi kerak!"
        login.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500/20')
        return 
    }

    
    if (pwd.value.length > 8) {
        pwdLable.innerHTML = "Parol 8 tadan ko'p bo'lmasligi kerak!"
        pwd.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500/20')
        return 
    }

    if (login.value.trim() === "login" && pwd.value === "1234") {
            
        window.location.href = "BookMaster.html"    
    } else {    
        error.innerHTML = "Login yoki parol xato!"
        login.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500/20')
        pwd.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500/20')

    }
}

form.addEventListener('submit', handleSubmit)

// help