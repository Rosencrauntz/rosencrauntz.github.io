

$('button').on('click', function() {
    let val = $('#title').val();
    $("div").append("<h2>"+val+"</h2>");
    let val1 = $('#content').val();
    $("div").append("<p>"+val1+"</p>");
   
    let path = "posts/1";
    let dataToSave = {
      title: val,
      content: val1 
    };
    fb.ref(path).set(dataToSave);
  });

  fb.ref("posts").once('value').then(data => {
    let savedPosts = data.val();
  });

  let samePath = "posts/1";
let updatedData = {
  title: "My first edited and updated blog post",
  text: "Some hilarious content again, which proves how awesome I am again."
};
fb.ref(samePath).set(updatedData);