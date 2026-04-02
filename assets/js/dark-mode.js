// Проверяем сохранённую тему или системную настройку
const userPref = localStorage.getItem('theme');
const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches;

const isDark = userPref === 'dark' || (userPref !== 'light' && systemPref);

// Применяем тему
if (isDark) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Функция переключения
function toggleDarkMode() {
  const html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}