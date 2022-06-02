import React from "react";
import LOGO from '../media/LOGO.png';
import './CardBlog.css';

export default function CardBlog({titulo, imagen, subtitulo, contenido, fecha, galeria}){

    let content = 'esto es un contenido de prueba'

    const parrafos = content.split('\n');

    let hardGaleria = ['https://i.pinimg.com/564x/8f/9c/79/8f9c7953c5bb091debf7f2848ef1c319.jpg', 'https://i.pinimg.com/564x/23/dd/ec/23ddec61accdace2506689e799bbb053.jpg', 'https://i.pinimg.com/564x/22/b2/ca/22b2ca3e7e48cd74e56f8e96d93fe472.jpg', 'https://i.pinimg.com/564x/f8/e0/d4/f8e0d45fbfbef9d2c1ac9ad60ae079eb.jpg', 'https://i.pinimg.com/564x/a1/e8/a0/a1e8a09479fa66df0e58a6fbca1362ae.jpg']
    let hardImagen = 'https://i.pinimg.com/564x/12/f6/92/12f69233db7cc2c81f04fe34629afcba.jpg'

    return(
        <div id="cont-blog">
            <div id="paper-blog">
                <h2 id="titulo-blog">Este es un post de blog hardcodeado</h2>
                <hr></hr>
                <div id="cont-img-blog">
                    <img id="img-blog" src={hardImagen}/>
                    <h2 id="subt-blog">Hola</h2>
                </div>
                {
                    parrafos && parrafos.map((el) =>{
                        return(
                            <p id="content-blog" key={Math.random()}>{el}</p>
                        )
                    })
                }
                <div className="cont-galeria" key={Math.random()}>
                {
                    hardGaleria && hardGaleria.map(el=>{
                        return(
                                <img id="img-blog" key={Math.random()} src={el}></img>
                        )
                    })
                }
                <img src={LOGO} id='img-blog-logo'/>
                </div>
                <hr/>
                <div id="disqus_thread"></div>
{
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://plasticoestudio.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })()
}
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                <hr/>
                <p id="fecha-blog">fecha de publicación: 31/02/23</p>
            </div>
        </div>
    )
}