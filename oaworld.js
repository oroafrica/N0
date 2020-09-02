
class World
{
   constructor()
  {
      this.tgtOne = null;
      this.tgtTwo = null;
      this.handlerOne = null;
      this.handlerTwo = null;
  }
  
   getAlloySel()
   {
      var tgt = $('select').toArray();
      $.each(tgt, (index)=> 
      {
         if($(tgt).eq(index).find("option").length > 2 && $(tgt)[index].options[1].text === "Silver")
         {
            this.handlerOne =  $(tgt)[index];
            $(this.handlerOne).addClass("ty-alloy");
            console.log("sel index: " +index);
            //console.log(this.handlerOne.selectedIndex);
            //console.log($(this.handlerOne)[0].prop('selectedIndex'));
         }	
      });
      
      
   }
  alloySel()
  {
     this.getAlloySel();
     $(document).bind("change",this.handlerOne,()=> 
     {
        $(".tmp-hold").remove();
        $(".ty-price").prepend("<span class='ty-price-num tmp-hold' style='font-size:0.6rem' >From </span>");
     });
  }
  getPrefix()
  {
     $(".ty-price").prepend("<span class='ty-price-num tmp-hold' style='font-size:0.6rem' >From </span>");
  }
  render()
  {
      //this.getAlloySel();
      this.alloySel();
      this.getPrefix();
      //console.log("new world loaded!");
  }
}
  
