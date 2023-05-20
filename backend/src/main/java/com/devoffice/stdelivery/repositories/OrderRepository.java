package com.devoffice.stdelivery.repositories;


import com.devoffice.stdelivery.entities.Order;
import com.devoffice.stdelivery.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    

}
