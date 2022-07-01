    function goToVk(){
      if(window.mobileCheck()){
        location.replace('vk://vk.com/nikidze_dev')
        setTimeout(() => {
          window.open('https://vk.com/nikidze_dev', '_blank').focus();
        }, 1000);
      }else{
        window.open('https://vk.com/nikidze_dev', '_blank').focus();
      }
    }
