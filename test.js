    function goToVk(){
      if(window.mobileCheck()){
        location.replace('vk://vk.com/nikidze_dev')
        setTimeout(() => {
          location.replace('https://vk.com/nikidze_dev')
        }, 1000);
      }else{
        window.open('https://vk.com/nikidze_dev', '_blank').focus();
      }
    }
