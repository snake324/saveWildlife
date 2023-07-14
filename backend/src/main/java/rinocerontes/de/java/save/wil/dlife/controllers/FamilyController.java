package rinocerontes.de.java.save.wil.dlife.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import rinocerontes.de.java.save.wil.dlife.models.Family;
import rinocerontes.de.java.save.wil.dlife.services.FamilyService;

public class FamilyController {
    
    FamilyService service;

    public FamilyController(FamilyService service){
        this.service = service;
    }

    @GetMapping(path = "/families")
    public List<Family> index() {

        List<Family> families = service.getAll();
        return families;
    }

    @GetMapping(path = "/families/{id}")
    public Family show(@PathVariable("id") Long id) {
        Family family = service.findById(id);
        return family;
    }
}
