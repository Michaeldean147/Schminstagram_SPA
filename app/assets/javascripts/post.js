$(document).ready(function (){
  $('input[type="submit"]').on('click', addPost)
  $('ul').on('click','div li span', deletePost)
});

function imageForNewPost(data){
  return '<li> <img src="' + data.image_url + '" width = 200 height = 200>' + '<span>X</span></li>'
}
function titleForNewPost(data){
  return '<li>' + data.title + '</li>'
}
function usernameForNewPost(data){
  return '<li>By: ' + data.user_name + '</li>'
}

function addPost(event){
  event.preventDefault();
  var post_image_url = $('#post_image_url').val();
  var post_title = $('#post_title').val();
  var post_user_name = $('#post_user_name').val()
  $.ajax('/posts',{
    type: 'post',
    data:{
      post:{
        image_url: post_image_url,
        title: post_title,
        user_name: post_user_name
      }
    }
  }).done(function(data){
    var new_post_div = '<div data-id="'+data.id+'">'+ imageForNewPost(data) + titleForNewPost(data) + usernameForNewPost(data) + '</div>'
    $('ul').append(new_post_div)
    return false
  }).fail(function(data){
    console.log('INSIDE THE .FAIL!!')
    console.log(data.responseText)
  })
}

function deletePost(event){
  var id = $(this).parent().parent().data('id')
  console.log(id + 'was clicked')
  var url = '/posts/' + id
  $.ajax(url, {type: 'delete'}).done(function(data){
    var div = $('div[data-id="'+ data.id +'"]');
    div.fadeOut(function(){
      div.remove();
    })
  })
}
