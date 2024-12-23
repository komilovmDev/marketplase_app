import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './zyafka.css'

export default function Zyafka() {
    return (
        <>
            <Navbar />
            <div className="zyafka">
                <div className="zyafka_con">
                    <div className="zyafka_con_title">
                        <p>Yuk tashish uchun ariza qo'shish</p>
                        <p>iltimos, yuklash va tushirish joylarini, yuk parametrlarini va aloqa ma'lumotlarini ko'rsating</p>
                    </div>
                    <div className="zyafka_con_form">
                        <div>
                            <label><b>Yuklash: </b>dan</label>
                            <input type="date" />
                            <label>ga</label>
                            <input type="date" />
                        </div>
                        <div>
                            <label>Olib ketish manzili::</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Tashlab ketish manzili:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Yuk turi:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Transport turi:</label>
                            <select>
                                <option value="">Truck</option>
                                <option value="">Trailer</option>
                            </select>
                        </div>
                        <div>
                            <label>yuk og‘irligi (t):</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Yuk mashinalari soni:</label>
                            <input type="number" />
                        </div>
                        <div>
                            <label>yuk hajmi (m³):</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Yuklamalar o‘lchamini kiriting, metrda </label>
                            <div className="dimensions-row">
                                <label>uzunlik (m):</label>
                                <input type="number" />
                                <label>kenglik (m):</label>
                                <input type="number" />
                                <label>balandlik (m):</label>
                                <input type="number" />
                            </div>
                        </div>
                        <div>
                            <label>Narxi:</label>
                            <select>
                                <option value="">UZS</option>
                                <option value="">USD</option>
                                <option value="">EUR</option>
                                <option value="">KZT</option>
                                <option value="">RUB</option>
                            </select>
                            <input type="number" />
                            <select>
                                <option value="">jami</option>
                                <option value="">har kilometrga</option>
                                <option value="">tonnasiga</option>
                            </select>
                        </div>
                        <div className="contact-row">
                            <div>
                                <label>Email:</label>
                                <input type="email" />
                            </div>
                            <div>
                                <label>Telefon:</label>
                                <input type="tel" />
                            </div>
                        </div>
                    </div>
                    <button id='post'>Post</button>
                </div>
            </div>
            <Footer />
        </>
    )
}