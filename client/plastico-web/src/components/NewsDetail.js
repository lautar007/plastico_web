import React from "react";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPublicacion} from "../actions/actions";

export default function NewsDetail(){

    let {id} = useParams();
    
    const dispatch = useDispatch();
    const noticia = useSelector((state)=>state.Publicacion);
    console.log(noticia);
 

    useEffect(()=>{
        dispatch(getPublicacion(id)); 
    }, [dispatch]);
    
    if(noticia.contenido){
    const parrafos = noticia.contenido.split('\n');
    }

    return(
        <div id="cont-blog">
        <div id="paper-blog">
            <h2 id="titulo-blog">{noticia.titulo}</h2>
            <hr></hr>
            <div id="cont-img-blog">
                <img id="img-blog" src={noticia.imagen}/>
                <h2 id="subt-blog">"{noticia.subtitulo}"</h2>
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
                noticia.galeria && noticia.galeria.map(el=>{
                    return(
                            <img id="img-blog" key={Math.random()} src={el}></img>
                    )
                })
            }
            </div>
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
            <p id="fecha-blog">fecha de publicación: {noticia.fecha}</p>
        </div>
    </div>
    )
}