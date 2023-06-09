let actvlink = document.querySelectorAll('.leftgroup>ul>li>a')

actvlink.forEach(a => {
    a.addEventListener('click', function(){
        actvlink.forEach(anc => anc.classList.remove('active'));
        this.classList.add('active');
    });
});
//tophead megameu//
//mega menu active on click section start//
function showhide(){
  let click=document.querySelectorAll(".mega-menu"); 
   if(click.style.display == 'none'){
    click.style.dispaly ="block";
   }
   else{
    click.style.display = 'none';
   }
}
//mega menu active on section end//
