$( document ).ready(function() {

  let transform = 0;
  let line = 0;
  let video = $("#videoPlayer");
  let play = $('#play');
  let stop = $('#stop');
  
  stop.hide();
  $('#lyrics ul li').each(function() {
    $(this).css({
      'font-size':'1rem',
      'color':'#ccc'
    });
  });

  function update(elapsed_time) {
    $('#lyrics ul li').each(function(index) {
      var time = parseInt($( this ).attr( "time" ));
      elapsed_time = parseInt(elapsed_time);
      if((elapsed_time >= time) && (time > line)){
        $(this).css({
          'font-size':'2rem',
          'line-height':'2rem',
          'z-index':'10',
          'color':'#000'
        });
        $(this).prev().css({
          'font-size':'1rem',
          'line-height':'1rem',
          'z-index':'1',
          'color':'#ccc'
        });
        transform++;
        $('#lyrics ul').css('transform','translateY(-'+transform+'rem)');
        line = time;
        return false;
      }
    });
  }

  video.bind('timeupdate', function() {
    player = this;
    var duration = player.duration;    // Durée totale
    var time     = player.currentTime; // Temps écoulé
    var fraction = time / duration;
    var percent  = Math.ceil(fraction * 100);
    var progress = document.querySelector('#progressBar');
    update(time);
  });

  play.on('click', function() {
    video.get(0).play();
    play.hide();
    stop.show();
  });

  stop.on('click', function() {
    video.get(0).pause();
    stop.hide();
    play.show();
  });

});