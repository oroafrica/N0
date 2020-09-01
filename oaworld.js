
class World
{
   constructor()
  {
      this.tgtOne = null;
      this.tgtTwo = null;
      this.handlerOne = null;
      this.handlerTwo = null;
  }
  
  getPrefix()
  {
     $(".ty-price").prepend("<span class='ty-price-num' style='font-size:0.6em' >From </span>");
     
  }
  render()
  {
      this.getPrefix();
      console.log("new world loaded!");
  }
}
  
