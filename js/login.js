// بارگذاری هدر و فوتر
fetch('/components/header.html')
  .then(res => res.text())
  .then(data => document.getElementById('headerPlaceholder').innerHTML = data)
  .catch(() => console.warn('Header not loaded'));

fetch('/components/footer.html')
  .then(res => res.text())
  .then(data => document.getElementById('footer-placeholder').innerHTML = data)
  .catch(() => console.warn('Footer not loaded'));

// مدیریت تب‌ها
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');

function showLogin() {
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');
  tabLogin.classList.add('m3-btn--filled');
  tabLogin.classList.remove('m3-btn--tonal');
  tabRegister.classList.remove('m3-btn--filled');
  tabRegister.classList.add('m3-btn--tonal');
}

function showRegister() {
  registerForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
  tabRegister.classList.add('m3-btn--filled');
  tabRegister.classList.remove('m3-btn--tonal');
  tabLogin.classList.remove('m3-btn--filled');
  tabLogin.classList.add('m3-btn--tonal');
}

tabLogin.addEventListener('click', showLogin);
tabRegister.addEventListener('click', showRegister);

// === توابع کمکی اعتبارسنجی ===

function clearErrors(formId) {
  const errors = document.querySelectorAll(`#${formId} .error-message`);
  errors.forEach(el => el.textContent = '');
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

// === اعتبارسنجی فرم ورود ===
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  clearErrors('loginForm');

  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  let isValid = true;

  if (!email) {
    showError('login-email-error', 'ایمیل الزامی است.');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError('login-email-error', 'فرمت ایمیل نامعتبر است.');
    isValid = false;
  }

  if (!password) {
    showError('login-password-error', 'رمز عبور الزامی است.');
    isValid = false;
  }

  if (isValid) {
    // اینجا می‌توانید فرم را واقعاً ارسال کنید (مثلاً با fetch)
    alert('ورود موفقیت‌آمیز!');
  }
});

// === اعتبارسنجی فرم ثبت‌نام ===
registerForm.addEventListener('submit', function (e) {
  e.preventDefault();
  clearErrors('registerForm');

  const fullname = document.getElementById('register-fullname').value.trim();
  const email = document.getElementById('register-email').value.trim();
  const password = document.getElementById('register-password').value;

  let isValid = true;

  if (!fullname) {
    showError('register-fullname-error', 'نام و نام خانوادگی الزامی است.');
    isValid = false;
  } else if (fullname.length < 3) {
    showError('register-fullname-error', 'نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد.');
    isValid = false;
  }

  if (!email) {
    showError('register-email-error', 'ایمیل الزامی است.');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError('register-email-error', 'فرمت ایمیل نامعتبر است.');
    isValid = false;
  }

  if (!password) {
    showError('register-password-error', 'رمز عبور الزامی است.');
    isValid = false;
  }

  if (isValid) {
    // اینجا می‌توانید فرم را واقعاً ارسال کنید
    alert('ثبت‌نام موفقیت‌آمیز!');
  }
});