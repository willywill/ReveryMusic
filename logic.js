var section1 = new Vue({
    el: '#section1',
    data: {
      playlist1: [
        {
            title: "Metal Essentials",
            color: "red",
            description: "description",
            genre: "metal",
            list: "PLRJWQz0eR2QVQigxE6xzfdoLmJzR7ZVrS",
          },
          {
            title: "Title2",
            color: "blue",
            description: "description",
            genre: "rock",
            list: "PLGFMsDB0B5xyqR0LgYHa79ZsWDxBSE_Kq",
          },
       
      ],
      playlist2: [
        {
            title: "Title2",
            color: "blue",
            description: "description",
            genre: "indie pop",
            list: "PLGFMsDB0B5xyqR0LgYHa79ZsWDxBSE_Kq",
          },
       
      ],
    }
  });




      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        $("[tame]").on("mousedown", function() {
            player.loadPlaylist({list: "PLGFMsDB0B5xyqR0LgYHa79ZsWDxBSE_Kq", index: 0, startSeconds: 0,suggestedQuality: "small"});
        });
      }
      function onPlayerReady(event) {
        event.target.playVideo();
      }
      async function changePlayIcon(playerStatus) {
        if (playerStatus == -1) {
            document.querySelector('[play]').textContent = 'check_circle';
        }
        else if (playerStatus == 1) {
            document.querySelector('[play]').textContent = 'pause';
            $("[play]").click(function(){player.pauseVideo()});
            await sleep(200);
        } 
        else if (playerStatus == 2) {
            document.querySelector('[play]').textContent = 'play_arrow';
            $("[play]").click(function(){player.playVideo()});
            await sleep(200);
        } 
        else if (playerStatus == 3) {
            document.querySelector('[play]').textContent = 'hourglass_empty';
        }
      }
      function onPlayerStateChange(event) {
        changePlayIcon(event.data);
      }
