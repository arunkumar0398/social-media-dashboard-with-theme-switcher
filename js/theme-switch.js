// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
}

// function to set a given color-scheme
function setTheme(themeName) {
   localStorage.setItem('theme', themeName);
   document.body.className = themeName;
}

// Immediately invoked function to set the theme on initial load
(function () {
    localStorage.removeItem('theme')
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    } else {
        setTheme('theme-dark');
      document.getElementById('slider').checked = false;
    }
})();