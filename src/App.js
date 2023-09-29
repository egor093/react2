import './style/App.css';
import img1 from './img/logo.png'
import img2 from "./img/avatar.png"
import img3 from "./img/basket.png"
import img4 from "./img/green-puf.jpg"
import img5 from "./img/yellow-puf.jpg"
import img6 from "./img/blue-puf.jpg"
import img7 from "./img/grey-puf.jpg"
import img8 from "./img/teal-puf.jpg"
import img9 from "./img/red-puf.jpg"

function App() {
  return (
    <div className="App">
        
        <div className="head">

            <img className="logo" src={img1} alt=""/>

            <div className="burger">
            <i className="fas fa-bars"></i>

            </div>

            <a className="png" href="#">СПАЛЬНИ</a>
            <a href="#">ОФИС</a>
            <a href="#">ДЕТСКИЕ</a>
            <a href="#">КУХНИ</a>
            <a href="#">АКСЕССУАРЫ</a>
            <a href="#">ГДЕ КУПИТЬ</a>
            <img className="play" src={img2} alt="" />
            <img className="play" src={img3} alt="" />

        </div>
    
    <main>

        <div className="center">

            <div className="box1">
                <img className="puf1" src={img4} alt=""/>
                <h2 className="text1">Зеленый</h2>
                <p className="text1">320p</p>
                <button>Подробнее</button>
            </div>
            <div className="box2">
                <img className="puf1" src={img5} alt=""/>
                <h2 className="text1">Желтый</h2>
                <p className="text1">130p</p>
                <button>Подробнее</button>
            </div>
            <div className="box3">
                <img className="puf1" src={img6} alt=""/>
                <h2 className="text1">Синий</h2>
                <p className="text1">310p</p>
                <button>Подробнее</button>
            </div>

        </div>

            <div className="center1">

            <div className="box4">
                <img className="puf1" src={img7} alt=""/>
                <h2 className="text1">Серый</h2>
                <p className="text1">310p</p>
                <button>Подробнее</button>
            </div>
            <div className="box5">
                <img className="puf1" src={img8} alt=""/>
                <h2 className="text1">Вроде зеленый</h2>
                <p className="text1">310p</p>
                <button>Подробнее</button>
            </div>
            <div className="box6">
                <img className="puf1" src={img9} alt=""/>
                <h2 className="text1">Красный</h2>
                <p className="text1">310p</p>
                <button>Подробнее</button>
            </div>

            </div>
            <button className="b1">Больше вариантов</button> 
    </main>

    <footer>
        <div className="end">
            <div class="end1">
        <div className="content1">
            <h2>Lorem, ipsum.</h2>
            <p className="t1">Lorem, ipsum.</p>
            <p className="t1">Lorem, ipsum.</p>
        </div>
        <div className="content2">
            <h2>Lorem, ipsum.</h2>
            <p className="t1">Lorem, ipsum.</p>
            <p className="t1">Lorem, ipsum.</p>
        </div>
        <div className="content3">
            <h2>Lorem, ipsum.</h2>
            <p className="t1">Lorem, ipsum.</p>
            <p className="t1">Lorem, ipsum.</p>
        </div>
        <div className="content4">
            <h2>Lorem, ipsum.</h2>
            <p className="t1">Lorem, ipsum.</p>
            <p className="t1">Lorem, ipsum.</p>
        </div>
        <div className="content5">
            <h2>Lorem, ipsum.</h2>
            <p className="t1">Lorem, ipsum.</p>
            <p className="t1">Lorem, ipsum.</p>
        </div>
    </div> 
        <div className="globe">
        <i className="fas fa-globe"></i>
    </div>
    <div class="icon">
        <i className="fab fa-vk"></i>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-odnoklassniki"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
    </div>

    <p className="final">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> 
    </div>
    </footer>
    
    </div>
  );
}

export default App;
