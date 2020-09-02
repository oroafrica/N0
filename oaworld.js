
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
            console.log(this.handlerOne.selectedIndex);
            //console.log($(this.handlerOne)[0].prop('selectedIndex'));
         }	
      });
   }
   
  getPrefix()
  {
     $(".ty-price").prepend("<span class='ty-price-num' style='font-size:0.6rem' >From </span>");
  }
  render()
  {
      this.getAlloySel();
      this.getPrefix();
      //console.log("new world loaded!");
  }
}
  
