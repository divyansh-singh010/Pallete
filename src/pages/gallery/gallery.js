import React from 'react';
import './gallery.css';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';
import img7 from './7.png';
import img8 from './8.png';
import img9 from './9.png';
import img10 from './10.png';
import img11 from './11.png';
import img12 from './12.png';
import img13 from './13.png';
import img14 from './14.png';
import img15 from './15.png';
import img16 from './16.png';
import img17 from './17.png';
import img18 from './18.png';

const Gallery = () => {
    return (
        <div>
            <div className='gallery-container'>
                <h1 className='gallery-head'>Gallery</h1>
            </div>
            <div className='gallery-container2'>
            <h2 className='gallery-head2'>Photos of Celebrity Chef's Culinary Creations </h2>
            <div className='gallery-img-grid'>
                <div className='gallery-img1'>
                    <img src={img1} alt='img1' className='gallery-img1-img'></img>
                </div>
                <div className='gallery-img1'>
                    <img src={img2} alt='img2' className='gallery-img1-img'></img>
                </div>
                <div className='gallery-img1'>
                    <img src={img3} alt='img3' className='gallery-img1-img'></img>
                </div>
                <div className='gallery-img1'>
                    <img src={img4} alt='img4' className='gallery-img1-img'></img>
                </div>
                <div className='gallery-img1'>
                    <img src={img5} alt='img5' className='gallery-img1-img'></img>
                </div>
                <div className='gallery-img1'>
                    <img src={img6} alt='img6' className='gallery-img1-img'></img>
                </div>
            </div>
            </div>
            <div className='gallery-container2'>
            <h2 className='gallery-head2'>Photos of Celebrity Chef's Culinary Creations </h2>
            <div className='gallery-img-grid'>
                <div className='gallery-img1'>
                    <img src={img7} alt='img7' className='gallery-img1-img'></img>
                </div>
                <div className='gallery-img1'>
                    <img src={img8} alt='img8' className='gallery-img1-img'></img>
                </div>
                <div className='gallery-img1'>
                    <img src={img9} alt='img9' className='gallery-img1-img'></img>
                </div>
                <div className='gallery-img1'>
                    <img src={img10} alt='img10' className='gallery-img1-img'></img>
                </div>
                <div className='gallery-img1'>
                    <img src={img11} alt='img11' className='gallery-img1-img'></img>
                </div>
                <div className='gallery-img1'>
                    <img src={img12} alt='img12' className='gallery-img1-img'></img>
                </div>
            </div>
            </div>
            <div className='gallery-container2'>
            <h2 className='gallery-head2'>Photos of Celebrity Chef's Culinary Creations </h2>
            <div className='gallery-img-grid'>
                <div className='gallery-img1'>
                    <img src={img13} alt='img13' className='gallery-img1-img'></img>
                </div>
                <div className='gallery-img1'>
                    <img src={img14} alt='img14' className='gallery-img1-img'></img>
                </div>
                <div className='gallery-img1'>
                    <img src={img15} alt='img15' className='gallery-img1-img'></img>
                </div>
                <div className='gallery-img1'>
                    <img src={img16} alt='img16' className='gallery-img1-img'></img>
                </div>
                <div className='gallery-img1'>
                    <img src={img17} alt='img17' className='gallery-img1-img'></img>
                </div>
                <div className='gallery-img1'>
                    <img src={img18} alt='img18' className='gallery-img1-img'></img>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Gallery;