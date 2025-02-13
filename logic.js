const searchByTitleOrGenre = (item, search) =>
  search
  .toLowerCase()
  .split(' ')
  .every(v => item.title.toLowerCase().includes(v) || item.genre.toLowerCase().includes(v));

const searchPlaylists = (playlists, search) => {
  const searchResults = [];

  if (search) {
    for (const [playlistName, playlistItems] of Object.entries(playlists)) {
      // Search for the item that matches the search by the single playlist title
      const matchingPlaylistItems = playlistItems.filter(item => searchByTitleOrGenre(item, search));
      // Set the first matching playlist as the search result
      if (matchingPlaylistItems.length !== 0) {
        searchResults.push(matchingPlaylistItems);
      }
    }
  }
  return searchResults;
};

var app = new Vue({
    el: '#app',
    data: {
      searchQuery: null,
      playlists: {
        curated: [
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
        recommended: [
          {
            title: "Title 3",
            color: "blue",
            description: "description",
            genre: "indie",
            list: "PLGFMsDB0B5xyqR0LgYHa79ZsWDxBSE_Kq",
          },
        ],
      },
    },
    computed: {
      resultQuery() {
         return searchPlaylists(this.playlists, this.searchQuery);
        }
      },
  });


$('a[action="#dialog"]').click(function() {
  $('#dialog').addClass('open')
  $('body').addClass('remove-scrollbar')
})
$('a[action="#closedialog"]').click(function() {
  $('#dialog').removeClass('open')
  $('body').removeClass('remove-scrollbar')

})


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
      }
      function onPlayerReady(event) {
        event.target.playVideo();
      }
      function changePlayIcon(playerStatus) {
        if (playerStatus == -1) {
            document.querySelector('[play]').textContent = 'check_circle';
        }
        else if (playerStatus == 1) {
            document.querySelector('[play]').textContent = 'pause';
            
         
           
        } 
        else if (playerStatus == 2) {
            document.querySelector('[play]').textContent = 'play_arrow';
           
        } 
        else if (playerStatus == 3) {
            document.querySelector('[play]').textContent = 'hourglass_empty';
        }
    }
    function onPlayerStateChange(event) {
        changePlayIcon(event.data);
    }
    function play() {
        player.playVideo() 
        $(this).one("click", pause); 
        
    }
    function pause() {
        player.pauseVideo() 
        $(this).one("click", play);
        
    }
    $("[play]").one("click", play);
    $(".playlist a").one("click", play);
   
    $("[skip-next]").on("mousedown", function() {
        player.nextVideo();
    });
    $("[skip-prev]").on("mousedown", function() {
        player.previousVideo();
    });
 
