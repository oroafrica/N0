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
         }	
      });
      
   }
   
  alloySel()
  {
     $(document).on("change",this.handlerOne,()=> 
     {
         console.log($(this.handlerOne)text());
        //$(".tmp-hold").remove();
        //$(".ty-price").prepend("<span class='ty-price-num' style='font-size:0.6rem' >From </span>");
     });
  }
  getPrefix()
  {
     $(".ty-price").prepend("<span class='ty-price-num tmp-hold' style='font-size:0.6rem' >From </span>");
  }
  render()
  {
      this.getAlloySel();
      this.alloySel();
      this.getPrefix();
  }
}
  
