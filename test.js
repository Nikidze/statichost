    function goToVk(){
      if(window.mobileCheck()){
        location.replace('vk://vk.com/cakeshop.school')
        setTimeout(() => {
          location.replace('https://vk.com/cakeshop.school')
        }, 1000);
      }else{
        window.open('https://vk.com/cakeshop.school', '_blank').focus();
      }
    }
