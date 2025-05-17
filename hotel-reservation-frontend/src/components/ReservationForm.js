import React, { useState } from "react";
import "./ReservationForm.css";

function ReservationForm() {
    const [formData, setFormData] = useState({
        guestName: "",
        email: "",
        phone: "",
        checkInDate: "",
        checkOutDate: "",
        numberOfGuests: 1,
        roomType: "Single",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // numberOfGuests integer olarak alınmalı
        setFormData((prev) => ({
            ...prev,
            [name]: name === "numberOfGuests" ? parseInt(value) || 1 : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/reservations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorMsg = await response.text();
                alert("Hata: " + errorMsg);
            } else {
                alert("Rezervasyon gönderildi!");
                setFormData({
                    guestName: "",
                    email: "",
                    phone: "",
                    checkInDate: "",
                    checkOutDate: "",
                    numberOfGuests: 1,
                    roomType: "Single",
                });
            }
        } catch (error) {
            alert("Sunucuya bağlanırken hata oluştu: " + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
                <label className="form-label">Misafir Adı</label>
                <input
                    type="text"
                    name="guestName"
                    placeholder="Adınız Soyadınız"
                    value={formData.guestName}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label className="form-label">E-posta</label>
                <input
                    type="email"
                    name="email"
                    placeholder="ornek@eposta.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Telefon Numarası</label>
                <input
                    type="tel"
                    name="phone"
                    placeholder="5xxxxxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    pattern="[0-9]{10}"
                    title="10 haneli telefon numarası giriniz"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Giriş Tarihi</label>
                <input
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Çıkış Tarihi</label>
                <input
                    type="date"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Misafir Sayısı</label>
                <input
                    type="number"
                    name="numberOfGuests"
                    min="1"
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Oda Tipi</label>
                <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                    className="form-select"
                >
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Suite">Suite</option>
                </select>
            </div>

            <button type="submit" className="submit-button">
                Rezervasyon Yap
            </button>
        </form>
    );
}

export default ReservationForm;
