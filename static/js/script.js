$(document).ready(function() {
  $('.dropdown').hover(function() {
    $(this).find('.dropdown-content').stop(true, true).fadeIn(200);
  }, function() {$(this).find('.dropdown-content').stop(true, true).fadeOut(200); });

  $("#cr").text(`© ${new Date().getFullYear()} Grad Cazin`)
  console.log('%cPotreban ti je website?\n------------------------------\n| Github:                    |\n| https://github.com/seekiii |\n------------------------------', 'color: #ff9600; font-weight: bold;font-size:14px');
});

ucitani_brojevi = false
function uzmi_brojeve(id,broj,preskok=1){
  let counter = 0;
  const target = broj;
  const element = document.querySelector(id);
    const interval = setInterval(() => {
      counter += preskok;
      if (id == "#povrsina"){element.innerHTML = String(counter).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')+"km²";}
      else{element.innerHTML = String(counter).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');}
      if (parseInt(counter) >= target) {
        clearInterval(interval);
      }
    }, 10);
}

$(document).scroll(function() {
  var num = $(this).scrollTop()
  if (num > 1000){
    if (ucitani_brojevi){return}
    ucitani_brojevi = true
    uzmi_brojeve("#povrsina",356,2)
    uzmi_brojeve("#broj_stanovnika",66200,100)
    uzmi_brojeve("#hektar",21331,50)
    uzmi_brojeve("#gazinstva",3588,20)
  }
});
