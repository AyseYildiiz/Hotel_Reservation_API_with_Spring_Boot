package com.hotelreservation.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDate;

@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "İsim boş olamaz")
    private String guestName;

    @Email(message = "Geçerli bir e-posta giriniz")
    @NotBlank(message = "E-posta boş olamaz")
    private String email;

    @NotNull(message = "Giriş tarihi zorunludur")
    private LocalDate checkInDate;

    @NotNull(message = "Çıkış tarihi zorunludur")
    private LocalDate checkOutDate;

    @Min(value = 1, message = "En az 1 misafir olmalı")
    private int numberOfGuests;

    @NotBlank(message = "Oda tipi boş olamaz")
    private String roomType;

    // Getter and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGuestName() {
        return guestName;
    }

    public void setGuestName(String guestName) {
        this.guestName = guestName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(LocalDate checkInDate) {
        this.checkInDate = checkInDate;
    }

    public LocalDate getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(LocalDate checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public int getNumberOfGuests() {
        return numberOfGuests;
    }

    public void setNumberOfGuests(int numberOfGuests) {
        this.numberOfGuests = numberOfGuests;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }
}
