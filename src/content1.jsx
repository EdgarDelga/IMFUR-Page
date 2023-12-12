import React from 'react'
import styleCont1 from './styleCont1.css'

export default function Content1() {
  return (
    
    <>
    
    <div className="container">
        <div className="row padding">

            <div className="col-6">
                
               <p className='orden fs-2 txt'>Instituto Mexicano del Furry</p>
               <p className='tittletxt fs-5'> "Entre Furros Todxs Sumamos"</p>
               <p className='orden fs-4 txt'>Sus siglas hacen alusión a los diversos institutos que existen dentro de México
               dando como resultado una parodia directa a dichas instituciones, sin embargo, hemos tomado el Lorem ipsum,
               dolor sit amet consectetur adipisicing elit. Voluptatibus ex debitis non sapiente quos, in fugit officiis 
               libero deserunt, eos eligendi laboriosam totam eveniet repellendus? Reprehenderit aliquam pariatur iusto voluptate?
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate ratione praesentium veniam vel dolorem est 
               neque tenetur. Nobis voluptates ipsa totam tempora accusamus minus. Corrupti aut numquam fugiat odit!
               </p>
            
            </div>
            <div className="col-6">

                <img src="./src/assets/IMFUR-Logo.jpg" alt="IMFUR LOGO" className=' orden img'/>

            </div>
            <div className="col-12">
               <p className='txt fs-1'><strong>Misión</strong></p>
               <p className='txt fs-5'>Leales a nuestros valores y objetivos. 
               Nuestra misión es brindarle a nuevos y veteranos miembros de esta familia “Furry”, un espacio seguro de convivencia;
               Así como promover el movimiento artístico y social que representa.</p>
            </div>
            <div className="col">
               <p className='txt fs-1'><strong>Visión</strong></p>
               <p className='txt fs-5'>Congruentes a nuestra misión; nuestra visión es crear eventos de reunión tales
               como fiestas y convenciones para los miembros de nuestra comunidad. Los cuales reflejen la calidad de los 
               servicios y productos que como organización formal ofrecemos y nos posicionen como una de las organizaciones 
               destacadas y referentes de esta industria.</p>
            </div>

        </div>
    </div>
    
    </>

    )
}
