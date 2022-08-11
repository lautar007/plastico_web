import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublicaciones } from "../actions/actions";
import CardBlog from "./CardBlog";
import { Link } from "react-router-dom";

export default function Blog () {

    const dispatch = useDispatch();
    const noticia = useSelector((state)=>state.Noticia);
    let array = 'hola'

    useEffect(()=>{
        dispatch(getPublicaciones()); 
    }, [dispatch]);

    //function galeriaBlog(el){
      //  let fotos = []
      //      if(el.galeria){
      //      fotos = el.galeria;
      //      console.log(fotos);
      //  }
      //  return fotos
    //}

    return(
        <div>
            <h1>Blog de noticias</h1>
            <div className="contAll-blog">
                <div className="menu-blog">
                    <h3>Entradas: </h3>
                    <div className="entradas-blog">
                    {noticia && noticia.map((el)=>{
                        return(
                        <div key={Math.random()}>
                        <hr/>
                        <Link id="link" to={'/blog/' + el.id}>
                        <p id="tit-menu" key={el.id}>- {el.fecha}| {el.titulo.slice(0, 15)}...</p>
                        </Link>
                        </div>
                    )})}
                    </div>
                </div>
                <div className="card-blogs">
                {
                    noticia && noticia.map((el)=>{
                        return(
                            <div key={el.id}>
                                <CardBlog
                                titulo={el.titulo}
                                imagen={el.imagen}
                                id={el.id}
                                subtitulo={el.subtitulo}
                                contenido={el.contenido}
                                fecha = {el.fecha}
                                galeria = {el.galeria}
                                />
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
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}