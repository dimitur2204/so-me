(() => {
    const auth = localStorage.getItem('auth')
    if (auth !== 'true') {
        window.location.href = 'password.html'
    }
})()