function setLanguage(lang) {
  if (lang === "ur") {
    document.getElementById("subtitle").innerText =
      "نادتک، جمکا اور وافد اپائنٹمنٹ بکنگ";
    document.getElementById("servicesTitle").innerText =
      "ہماری خدمات";
  } else {
    location.reload();
  }
}
