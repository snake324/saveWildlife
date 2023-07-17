package rinocerontes.de.java.save.wil.dlife.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rinocerontes.de.java.save.wil.dlife.models.Family;
import rinocerontes.de.java.save.wil.dlife.services.FamilyService;

@RestController
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

    @PostMapping(path = "/families")
    public ResponseEntity<Family> store(@RequestBody Family family){
        Family familySaved = service.save(family);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(familySaved);
    }

    @DeleteMapping(path = "/families/{id}")
    public Map<String, String> destroy(@PathVariable("id") Long id) {
        Map<String, String> msg = service.delete(id);
        return msg;
    }
}
