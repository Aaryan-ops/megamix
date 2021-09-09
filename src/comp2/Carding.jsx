import React from 'react'
import "./Carding.css";
const Carding = () => {

  return (
    <>
    <div className="cards">
      <div className="card">
      <img src="https://orig00.deviantart.net/e59d/f/2015/140/4/5/bbcp_minerva_stand_animation_by_caliburwarrior-d8u52w8.gif" alt="e1" className="im1" />
      <div className="card__info">
        <span className="card__category"><q>If you want to find the real competition, just look in the mirror. After awhile, you'll see rivals scrambling for second place.</q></span>
        <h3 className="card__title">Visual book with gifs teaching complex concepts, in which case it will be abstract arts</h3>
       <button  onClick={()=>window.open("./plop1.html","_self")}><img style={{height:"40%"}} src="https://th.bing.com/th/id/R.d9a884269adcd774b7260d7f90b8e31a?rik=A1%2b5IFo9JxT2Pw&riu=http%3a%2f%2f24.media.tumblr.com%2ff280c848b949ef9b3c464eb49c8f3da6%2ftumblr_mge8hlYT7j1rvpsgxo1_400.gif&ehk=8uEo6Rwu0ngO1IF252V9n%2fxHwIoBamB0Co%2bpxMusXno%3d&risl=&pid=ImgRaw&r=0" alt="poks" /></button>
      </div>
      </div>
      <div className="card"><img src="https://mugen.spriteclub.tv/idles/8512.gif" alt="e2" className="im2" /><div className="card__info">
        <span className="card__category"><q>Who you are the next second begins with what you do now.</q></span>
        <h3 className="card__title">Ai powered gamification; ai into gifs</h3>
        <button  onClick={()=>window.open("./plop2.html","_self")}><img style={{height:"40%"}} src="https://th.bing.com/th/id/R.d9a884269adcd774b7260d7f90b8e31a?rik=A1%2b5IFo9JxT2Pw&riu=http%3a%2f%2f24.media.tumblr.com%2ff280c848b949ef9b3c464eb49c8f3da6%2ftumblr_mge8hlYT7j1rvpsgxo1_400.gif&ehk=8uEo6Rwu0ngO1IF252V9n%2fxHwIoBamB0Co%2bpxMusXno%3d&risl=&pid=ImgRaw&r=0" alt="poks" /></button>
      </div></div>
      <div className="card"><img src="https://th.bing.com/th/id/R.0bce66599339835e94ee501369a84cda?rik=83Z1P7DsJVYYeQ&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2fskullgirls-es%2fimages%2fd%2fd0%2fCerebella_Animacion_Stand_Idle.gif%2frevision%2flatest%3fcb%3d20150518204550%26path-prefix%3des&ehk=Xb5RURJYp7YLvbm9rD6a98oeUz9qQPAgZDghoSOif2M%3d&risl=&pid=ImgRaw&r=0" alt="e3" className="im3" /><div className="card__info">
        <span className="card__category"><q>Mind can conceive it, heart can believe it, and I can achieve it. A man can be destroyed but not defeated.</q></span>
        <h3 className="card__title">Skull girl x armed with wings x casey</h3>
        <button onClick={()=>window.open("./plop3.html","_self")}><img style={{height:"40%"}} src="https://th.bing.com/th/id/R.d9a884269adcd774b7260d7f90b8e31a?rik=A1%2b5IFo9JxT2Pw&riu=http%3a%2f%2f24.media.tumblr.com%2ff280c848b949ef9b3c464eb49c8f3da6%2ftumblr_mge8hlYT7j1rvpsgxo1_400.gif&ehk=8uEo6Rwu0ngO1IF252V9n%2fxHwIoBamB0Co%2bpxMusXno%3d&risl=&pid=ImgRaw&r=0" alt="poks" /></button>
      </div></div>
      <p>The barrier to self-improvement is not that we hate learning, but that we are being taught. We hate being taught. To learn entails that the knowledge was achieved on one's own accord-it feels great- but to be taught leaves a feeling of inferiority. It takes determination and humility for accepting a teaching.</p>
    </div>
    </>
  )
}

export default Carding
