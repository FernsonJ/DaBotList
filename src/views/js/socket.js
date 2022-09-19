const socket = io.connect("https://dabotlist.ml/");

socket.on('userCount', userCount => {
        document.getElementById('connectionCount').innerHTML = userCount;
  })
