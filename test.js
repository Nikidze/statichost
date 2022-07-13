    function goToVk(){
      if(window.mobileCheck()){
         var now = new Date().valueOf();
         setTimeout(function () {
            if (new Date().valueOf() - now > 100) return;
                window.location = "https://vk.com/cakeshop.school";
            }, 25);
          window.location = "vk://vk.com/cakeshop.school";
      }else{
        window.open('https://vk.com/cakeshop.school', '_blank').focus();
      }
    }
