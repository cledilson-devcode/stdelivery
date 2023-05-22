package com.devoffice.stdelivery.services;

import com.devoffice.stdelivery.dto.OrderDTO;
import com.devoffice.stdelivery.dto.ProductDTO;
import com.devoffice.stdelivery.entities.Order;
import com.devoffice.stdelivery.entities.Product;
import com.devoffice.stdelivery.repositories.OrderRepository;
import com.devoffice.stdelivery.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll(){
        List<Order> list = repository.findOrdersWithProducts();
        return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
    }

}
