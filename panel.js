$(function(){
  $('.listItem').height($('.listItem').width());
  // パネルの挙動
  $("[id^='panel_']").on('click', function() {
    // 誤クリック防止
    if (confirm('OK?')) {
      // 画像を挿入するのに使う
      let number = parseInt($(this).text());
      let url = `img/keihin${number}.jpg`;
      let target = this;
      $('#fullImage')
        .css('background-image', `url(${url})`)
        .css('background-size', 'cover')
        .css('background-repeat', 'no-repeat');
      $(target)
        .css('color', 'rgba(33, 35, 84, 0.8)')
        .css('background-color', 'transparent')
        .css('background-image', `url(${url})`)
        .css('background-size', 'contain')
        .css('background-repeat', 'no-repeat');
    }
  });
});