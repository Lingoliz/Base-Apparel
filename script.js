let tl = gsap.timeline()
tl.from('.logo img',{x:-80,opacity:0.1,duration:1})
.from('.img',{x:100,opacity:0,duration:1},'<50%')
.from('h1,p,.input',{y:-10,x:-100,opacity:0,stagger:0.2,duration:1})