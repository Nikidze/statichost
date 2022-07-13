    function goToVk(){
      if(window.mobileCheck()){
        location.replace('vk://vk.com/cakeshop.school')
        setTimeout(() => {
          if(document.hasFocus())
          {
           window.open('https://vk.com/cakeshop.school', '_blank');   
          }
        }, 1500);
      }else{
        window.open('https://vk.com/cakeshop.school', '_blank').focus();
      }
    }
