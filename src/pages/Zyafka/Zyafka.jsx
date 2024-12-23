import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './zyafka.css';

export default function Zayafka({ boxData, setBoxData }) {
    const [formData, setFormData] = useState({
        dateFrom: '',
        dateTo: '',
        locationA: '',
        locationB: '',
        cargoType: '',
        transportType: '',
        weight: '',
        vehicleCount: '',
        volume: '',
        dimensions: { length: '', width: '', height: '' },
        price: '',
        priceUnit: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (['length', 'width', 'height'].includes(name)) {
            setFormData((prev) => ({
                ...prev,
                dimensions: {
                    ...prev.dimensions,
                    [name]: value
                }
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const validateForm = () => {
        // Validate if all necessary fields are filled
        return Object.values(formData).every(value => {
            if (typeof value === 'object') {
                return Object.values(value).every(subValue => subValue !== '');
            }
            return value !== '';
        });
    };

    const handleSubmit = () => {
        if (!validateForm()) {
            alert('Iltimos, barcha maydonlarni to\'ldiring!');
            return;
        }

        const newBox = {
            date: formData.dateFrom,
            date2: formData.dateTo,
            locationA: formData.locationA,
            locationB: formData.locationB,
            infom3: `${formData.cargoType} ${formData.weight} t ${formData.volume} m³`,
            infokm: `~ ${formData.dimensions.length}×${formData.dimensions.width}×${formData.dimensions.height} m, ${formData.transportType}`,
            price: formData.price,
            email: formData.email,
            phone: formData.phone
        };

        setBoxData((prev) => [...prev, newBox]);
        alert('Yangi yuk muvaffaqiyatli qo\'shildi!');
    };

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
                            <input type="date" name="dateFrom" onChange={handleChange} />
                            <label>ga</label>
                            <input type="date" name="dateTo" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Olib ketish manzili:</label>
                            <input type="text" name="locationA" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Tashlab ketish manzili:</label>
                            <input type="text" name="locationB" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Yuk turi:</label>
                            <input type="text" name="cargoType" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Transport turi:</label>
                            <select name="transportType" onChange={handleChange}>
                                <option value="Truck">Truck</option>
                                <option value="Trailer">Trailer</option>
                            </select>
                        </div>
                        <div>
                            <label>Yuk og‘irligi (t):</label>
                            <input type="text" name="weight" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Yuk mashinalari soni:</label>
                            <input type="number" name="vehicleCount" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Yuk hajmi (m³):</label>
                            <input type="text" name="volume" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Yuklamalar o‘lchamini kiriting, metrda:</label>
                            <div className="dimensions-row">
                                <label>Uzunlik (m):</label>
                                <input type="number" name="length" onChange={handleChange} />
                                <label>Kenglik (m):</label>
                                <input type="number" name="width" onChange={handleChange} />
                                <label>Balandlik (m):</label>
                                <input type="number" name="height" onChange={handleChange} />
                            </div>
                        </div>
                        <div>
                            <label>Narxi:</label>
                            <input type="number" name="price" onChange={handleChange} />
                            <select name="priceUnit" onChange={handleChange}>
                                <option value="UZS">UZS</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </div>
                        <div className="contact-row">
                            <div>
                                <label>Email:</label>
                                <input type="email" name="email" onChange={handleChange} />
                            </div>
                            <div>
                                <label>Telefon:</label>
                                <input type="tel" name="phone" onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <button id='post' onClick={handleSubmit}>Post</button>
                </div>
            </div>
            <Footer />
        </>
    );
}
