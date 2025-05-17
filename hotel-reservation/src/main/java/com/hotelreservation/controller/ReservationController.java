package com.hotelreservation.controller;

import com.hotelreservation.model.Reservation;
import com.hotelreservation.repository.ReservationRepository;


import java.util.List;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

//Gets all reservations
    @GetMapping
    public List<Reservation> findAllReservations() {
        return reservationRepository.findAll();
    }
//Creates new reservation
    @PostMapping
    public ResponseEntity<String> createReservation(@RequestBody @Valid Reservation reservation) {
        if (reservationRepository.existsByEmail(reservation.getEmail())) {
            return ResponseEntity.badRequest().body("This email has been used before");
        }
        reservationRepository.save(reservation);
        return ResponseEntity.ok("Reservation made successfully.");
    }
//Get a reservation by an email
    @GetMapping("/by-email")
    public List<Reservation> getByEmail(@RequestParam("email") String email) {
        return reservationRepository.findReservationByEmail(email);
    }


}
