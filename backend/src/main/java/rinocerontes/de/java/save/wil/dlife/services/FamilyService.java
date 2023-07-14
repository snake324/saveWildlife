package rinocerontes.de.java.save.wil.dlife.services;

import java.util.List;

import org.springframework.stereotype.Service;

import rinocerontes.de.java.save.wil.dlife.models.Family;
import rinocerontes.de.java.save.wil.dlife.repositories.FamilyRepository;

@Service
public class FamilyService {

    FamilyRepository repository;

    public FamilyService( FamilyRepository repository){
        this.repository = repository;
    }

    public List<Family> getAll(){
        List<Family> families = repository.findAll();
        return families;
    }

    public Family findById(Long id){
        Family family = repository.findById(id).orElseThrow();
        return family;
    }
    
}
