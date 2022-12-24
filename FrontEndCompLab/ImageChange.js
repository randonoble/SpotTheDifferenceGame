var counter = 1;
        function pictureChange()
        {    
            if (counter == 1 && $('#fx > div').length >= 10) { 
              while ($('#fx > div').length > 0) {
                $('#fx > div').last().remove();
            }   
            document.getElementById('Image').src="/home/shivm/Desktop/CompLab-main/CompLab/FrontEndCompLab/Images/Spot2.jpg"
            counter++; 
          } else if (counter == 2 && $('#fx > div').length >= 15) { 
            while ($('#fx > div').length > 0) {
              $('#fx > div').last().remove();
          }   
            document.getElementById('Image').src="/home/shivm/Desktop/CompLab-main/CompLab/FrontEndCompLab/Images/Spot3.jpg";
            counter++; 
          } else if (counter == 3 && $('#fx > div').length >= 10) { 
            while ($('#fx > div').length > 0) {
              $('#fx > div').last().remove();
          }   
            document.getElementById('Image').src="/home/shivm/Desktop/CompLab-main/CompLab/FrontEndCompLab/Images/Spot4.jpg";
            counter++;
          } else if (counter == 4 && $('#fx > div').length >= 10) { 
            while ($('#fx > div').length > 0) {
              $('#fx > div').last().remove();
          }   
            document.getElementById('Image').src="/home/shivm/Desktop/CompLab-main/CompLab/FrontEndCompLab/Images/Spot5.jpg";
            counter++;
          } else if (counter == 5 && $('#fx > div').length >= 5) { 
            while ($('#fx > div').length > 0) {
              $('#fx > div').last().remove();
          }   
            document.getElementById('Image').src="/home/shivm/Desktop/CompLab-main/CompLab/FrontEndCompLab/Images/spot1.jpg";
            counter=1;
          }
        }