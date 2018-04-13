$(function(){
  $('.listItem').height($('.listItem').width());
  // パネルの挙動
  $("[id^='panel_']").on('click', function() {
    // 誤クリック防止
    if (confirm('本当にこのパネルで良いですか？')) {
      // 画像を挿入するのに使う
      let number = parseInt($(this).text());
      let url = `img/keihin${number}.jpg`;
      let target = this;
      $('#fullimage')
        .css('background-image', `url(${url})`)
        .css('background-size', 'contain')
        .css('background-position', 'center')
        .css('background-color', 'white')
        .css('background-repeat', 'no-repeat')
        .css('display', 'block');
      $(target)
        .css('color', 'rgba(33, 35, 84, 0.5)')
        .css('background-color', 'transparent')
        .css('background-image', `url(${url})`)
        .css('background-size', 'contain')
        .css('background-repeat', 'no-repeat');
    }
  });
  $('#fullimage').on('click', function(){
    $(this).css('display', 'none');
  });
});