import './Header.scss';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillTelephoneFill, BsFillCaretDownFill } from 'react-icons/bs';
import { GrFormSearch } from 'react-icons/gr';
import { HiShoppingCart } from 'react-icons/hi';

import ThreeHeardphones from '../../three/ThreeHeardphones';
import { useRef, useState } from 'react';

const Header = () => {
    const menu = useRef();
    const [ Ul, setUl ] = useState('none');
    const classChange = ()=>{
        Ul === 'none' ? setUl('block') : setUl('none')
    }
    return (
        <>
            <div className="containerHeader">
                <div className="firstNav">
                    <div className="phone">
                        <BsFillTelephoneFill />
                        <p className='pcall'>Call Now</p>
                        <span className='scall'>+1 987 654 3210</span>
                    </div>
                    <div className="links">
                        <p>Support</p>
                        <p>Store Location</p>
                        <p>Free Shopping</p>
                    </div>
                </div>

                <div className="secondNav">
                    <div className="title">
                        <h2><p>e</p>commerce solution</h2>
                    </div>
                    <div className="input">
                        <div className="categories">
                        <AiOutlineMenu />
                            <p>all categories</p>
                            <BsFillCaretDownFill />
                        </div>
                        <div className="search">
                            <input type="text" placeholder="Search new products" />
                            <GrFormSearch/>
                        </div>
                    </div>
                    <div className="user">
                        <div className="acount">
                            <div className="ico"><FaUserAlt/></div>
                            <p>my account</p>
                        </div>
                    </div>
                </div>

                <div className="tirdNav">
                    <div className="links">
                        <div className='menu' onClick={()=> classChange()}>
                            <AiOutlineMenu />
                            <AiOutlineMenu />
                        </div>
                        <ul ref={menu} className={Ul}>
                            <li>home</li>
                            <li>about</li>
                            <li>mobile</li>
                            <li>headphone</li>
                            <li>clothes</li>
                            <li>shoes</li>
                            <li>watches</li>
                            <li>blog</li>
                            <li>contact us</li>
                            <li>car buy
                                <HiShoppingCart className='ico'/>
                            </li>
                        </ul>
                    </div>

                    <div className="carousel">
                        <div className="mainText">
                            <div className="cursive">
                                <p>- Lorem adipisicing elit. earum. earum <span></span></p>
                            </div>
                            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing</h1>
                            <p>Lorem Quasi non tempore Quasi non tempore quia ipsum dolor sit amet, suscipit quis.</p>
                            <button>shop now</button>
                        </div>


                        <div className="threeContainer">
                                 <ThreeHeardphones/> 
                        </div> 
                            
                    </div>

                </div>

            </div> 
        </>
    )
}
export default Header;