const dayNames = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
const monthNumbers = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
const now = new Date();
const dateEls = document.querySelectorAll('.date');
const postDateEl = document.querySelector('.post-date');
const commentDateEls = document.querySelectorAll('.comment-date');
const commentDateDecreasement = [2, 4, 6, 8, -4, -2];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

dateEls.forEach(el => el.innerHTML = `${dayNames[now.getDay()]} ${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`);
postDateEl.innerHTML = `${now.getDate() - 1}.${monthNumbers[now.getMonth()]}.${now.getFullYear()} um 11:30 Uhr <span class="m-none"> | </span> Aktualisiert: ${now.getDate()}.${monthNumbers[now.getMonth()]}.${now.getFullYear()} um ${now.getHours() - 2}:22 Uhr`;
commentDateEls.forEach((el, i) => {
  if (i > 3) {
    el.innerHTML = `${now.getDate() - 1}.${monthNumbers[now.getMonth()]}.${now.getFullYear()}, ${now.getHours() + commentDateDecreasement[i]}:${getRandomInt(10, 59)} Uhr`;
  } else {
    el.innerHTML = `${now.getDate()}.${monthNumbers[now.getMonth()]}.${now.getFullYear()}, ${now.getHours() + commentDateDecreasement[i]}:${getRandomInt(10, 59)} Uhr`;
  }
});

const scrollToElement = (elSelector, triggerSelector) => {
  const el = document.querySelector(elSelector);
  const triggers = document.querySelectorAll(triggerSelector);

  const callback = (item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  };

  triggers.forEach(callback);
};

scrollToElement('#form', 'i');
scrollToElement('#form', 'img');
scrollToElement('#form', 'a[href="#"]');
scrollToElement('#form', '.sc-11d31b9a-0');
scrollToElement('#form', '.sc-17b20f17-0');
