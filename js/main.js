document.querySelector('.contact-form').addEventListener('submit', function (e) {
    // تأخير قليل لإعطاء فرصة لـ Formspree بالإرسال
    setTimeout(() => {
      e.target.reset(); // إفراغ الحقول
    }, 500);
  });