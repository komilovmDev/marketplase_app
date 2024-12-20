import './filter.css'


export default function Filter() {
    return (
        <div className="fileter">
            <div className="filterCon">
                <div className="filterCon_box">
                    <p>Tashuvchi kerakmi?</p>
                    <p>Bepul! Yukingizni qo'shing va minglab ishonchli tashuvchilar siz bilan bog'lanishlari mumkin hozir!</p>
                    <button>Yuk Qo’shing</button>
                </div>
                <div className="filterCon_box">
                    <p>Yo'l yuklarini qidirish</p>
                    <div className="filterCon_box_dropdown">
                        <label htmlFor="">Qayerdan:</label>
                        <select name="" id="">
                            <option value="">Uzbekistan</option>
                            <option value="">Russia</option>
                            <option value="">Ukraina</option>
                        </select>
                        <select name="" id="">
                            <option value="">Xorazm</option>
                            <option value="">Toshkent</option>
                            <option value="">Buhoro</option>
                        </select>
                    </div>
                    <div className="filterCon_box_dropdown">
                        <label htmlFor="">Qayerga:</label>
                        <select name="" id="">
                            <option value="">Uzbekistan</option>
                            <option value="">Russia</option>
                            <option value="">Ukraina</option>
                        </select>
                        <select name="" id="">
                            <option value="">Xorazm</option>
                            <option value="">Toshkent</option>
                            <option value="">Buhoro</option>
                        </select>
                    </div>
                    <button>Toping</button>
                </div>
                <div className="filterCon_box">
                    <p>Yo'l mashinalarini qidirish</p>
                    <div className="filterCon_box_dropdown">
                        <label htmlFor="">Qayerdan:</label>
                        <select name="" id="">
                            <option value="">Uzbekistan</option>
                            <option value="">Russia</option>
                            <option value="">Ukraina</option>
                        </select>
                        <select name="" id="">
                            <option value="">Xorazm</option>
                            <option value="">Toshkent</option>
                            <option value="">Buhoro</option>
                        </select>
                    </div>
                    <div className="filterCon_box_dropdown">
                        <label htmlFor="">Qayerga:</label>
                        <select name="" id="">
                            <option value="">Uzbekistan</option>
                            <option value="">Russia</option>
                            <option value="">Ukraina</option>
                        </select>
                        <select name="" id="">
                            <option value="">Xorazm</option>
                            <option value="">Toshkent</option>
                            <option value="">Buhoro</option>
                        </select>
                    </div>
                    <button>Toping</button>
                </div>
                <div className="filterCon_box">
                    <p>Masofani hisoblash</p>
                    <div className="filterCon_box_info">
                        <label>Toshkent-Urganch</label>
                        <span>
                            960 km, sayohat vaqti - 13 soat
                            yuk tashish vaqti-2 kun
                        </span>
                    </div>
                    <div className="filterCon_box_info">
                        <label>Boku-Kattaqo'rg'on</label>
                        <span>
                            2 460 km, sayohat vaqti-33 soat
                            yuk tashish vaqti-5 kun
                        </span>
                    </div>
                    <button>Hisoblash</button>
                </div>
                <div className="filterCon_box">
                    <p>Yuk tashish narxlari</p>
                    <div className="filterCon_box_info">
                        <label>Farg'ona-Ohangaron 5 t</label>
                        <span>
                             20 000 000 сум
                        </span>
                        <span>
                            78125 so'm/km
                        </span>
                    </div>
                    <div className="filterCon_box_info">
                        <label>Boku-Kattaqo'rg'on</label>
                        <span>
                            10 000 000 сум
                        </span>
                        <span>
                            17761,99 so'm/km
                        </span>
                    </div>
                    <button>Barcha narxlarni ko'rsatish</button>
                </div>
            </div>
        </div>
    )
}