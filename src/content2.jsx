

function Carrusel() {
return (

    <>

        <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://scontent.fmex31-1.fna.fbcdn.net/v/t39.30808-6/315872669_191031996792863_6853693029616683110_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=173fa1&_nc_eui2=AeHN6mQ3fSsh2Xfgkkyy6FttQYpcpbGHrY1BilylsYetjYsnLCqLHz4Bpc2oBNRfNH8hec_gjtNINP-9Pu8z8ZFf&_nc_ohc=zgcLklcj1s4AX8-dhNj&_nc_ht=scontent.fmex31-1.fna&oh=00_AfDBJ5_sosIa5GUQm3erGH46zZ1cjz3OASz1sPyuCREjSA&oe=657BF204" className="d-block w-100" alt="Chrispaws Imagen"/>
            <div className="carousel-caption d-none d-md-block">
                <a href="https://www.facebook.com/groups/merrychrispaws" className="tag"><h5>Chrispaws 2022</h5></a>
                <p>Se trata del primer evento grande que tuvo el IMFUR</p>
            </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src="https://scontent.fmex31-1.fna.fbcdn.net/v/t39.30808-6/338850381_746381790484294_3818284623978371230_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeG6qb28I6ZXXfh8N1lMIwhHoG1vH96T4lOgbW8f3pPiU9PygYDx72VMvip6sxqXtIzicE1s8OdzHu7_eE7YwJe-&_nc_ohc=XKHlcI7azTQAX-VMAUP&_nc_ht=scontent.fmex31-1.fna&oh=00_AfB-U6l4Qci5IBP9GwmHBsWkaDYE3TW4k3jsylkycBaAGg&oe=657DDFD7" className="d-block w-00" alt="Fursommar Imagen"/>
            <div className="carousel-caption d-none d-md-block">
                <a href="https://www.facebook.com/events/1320253172038944" className="tag"><h5>Fursommar 2023</h5></a>
                <p>Lorem ipsum dolor sit amet, consectetur </p>
            </div>
            </div>
            <div className="carousel-item">
            <img src="https://scontent.fmex28-1.fna.fbcdn.net/v/t39.30808-6/358625829_292027903359938_4455925033927837482_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeH-T1oXgXZJkGwN201uIQztLPgAUnqKfaMs-ABSeop9oz-3BU66OzS0qIWDP6LlC9uePkISZdt_xOpON353RjNP&_nc_ohc=Z8ODARXIT7oAX9tmy5S&_nc_ht=scontent.fmex28-1.fna&oh=00_AfAFHrxkYmpRotEMGpb1vmg1tgSn7LXy_PNTwsoDtZId_g&oe=657D91E4" className="d-block w-100" alt="1FDB"/>
            <div className="carousel-caption d-none d-md-block">
                <a href="https://www.facebook.com/events/229482393372990" className="tag"><h5>Primera Furrada del Bienestar</h5></a>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
            <div className="carousel-item">
            <img src="https://scontent.fmex28-1.fna.fbcdn.net/v/t39.30808-6/358625829_292027903359938_4455925033927837482_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeH-T1oXgXZJkGwN201uIQztLPgAUnqKfaMs-ABSeop9oz-3BU66OzS0qIWDP6LlC9uePkISZdt_xOpON353RjNP&_nc_ohc=Z8ODARXIT7oAX9tmy5S&_nc_ht=scontent.fmex28-1.fna&oh=00_AfAFHrxkYmpRotEMGpb1vmg1tgSn7LXy_PNTwsoDtZId_g&oe=657D91E4" className="d-block w-100" alt="1FDB"/>
            <div className="carousel-caption d-none d-md-block">
            <a href="https://www.facebook.com/events/612130321042258" className="tag"><h5>Segunda Furrada del Bienestar</h5></a>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev background" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next background" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>

    </>

);
}

export default Carrusel;
