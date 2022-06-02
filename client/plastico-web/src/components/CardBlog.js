import React from "react";
import LOGO from '../media/LOGO.png';
import './CardBlog.css';

export default function CardBlog({titulo, imagen, subtitulo, contenido, fecha, galeria}){

    const parrafos = contenido.split('\n');

    return(
        <div id="cont-blog">
            <div id="paper-blog">
                <h2 id="titulo-blog">{titulo}</h2>
                <hr></hr>
                <div id="cont-img-blog">
                    <img id="img-blog" src={imagen}/>
                    <h2 id="subt-blog">"{subtitulo}"</h2>
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
                    galeria && galeria.map(el=>{
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
                <p id="fecha-blog">fecha de publicación: {fecha}</p>
            </div>
        </div>
    )
}