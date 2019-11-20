$(function(){ 
  function buildHTML(message){
    image = ( message.image ) ? `<img class= "lower-message__image" src=${message.image} >` : "";
    let html = `<div class="messages_message">
                    <div class="messages_message__upper-info">
                      <div class="messages_message__upper-info__talker">
                        ${message.user_name}
                      </div>
                      <div class="messages_message__upper-info__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="messages_message__text">
                      <p class="messages_message__text__content">
                        ${message.content}
                      </p>
                        ${image} 
                    </div>
                  </div>`  
    return html;           
  }  
              
$('.new_message').on('submit', function(e){   
      e.preventDefault(); 
      let formData = new FormData(this); 
      let url = $(this).attr('action')
      $.ajax({ 
        url: url, 
        type: "POST", 
        data: formData, 
        dataType: 'json', 
        processData: false, 
        contentType: false 
      }) 
    .done(function(data){
        html = buildHTML(data);
        $('.messages').append(html);  
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast'); 
        $('form')[0].reset();
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
    return false;      
  });
})